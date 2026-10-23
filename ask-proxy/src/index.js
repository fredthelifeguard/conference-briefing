// Cloudflare Worker: proxies "Ask the Conference" to the Anthropic API.
// Secrets: ANTHROPIC_API_KEY (wrangler secret put ANTHROPIC_API_KEY)
// Vars:    ALLOWED_ORIGIN  e.g. https://<user>.github.io  (set in wrangler.toml)
//          MODEL           default claude-sonnet-4-5
//          RATE_LIMIT      requests per IP per minute, default 10 (needs the KV binding below)
//
// Request:  POST { system: string, question: string, max_tokens?: number }
// Response: text/plain stream of the answer (the site renders it as it arrives).
// Errors:   JSON { code } with 4xx/5xx — codes match the site's error table:
//           rate_limited | prompt_too_large | upstream_error | refused

export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    const allowed = (env.ALLOWED_ORIGIN || "").split(",").map(s => s.trim()).filter(Boolean);
    const ok = allowed.length === 0 || allowed.includes(origin);
    const cors = {
      "Access-Control-Allow-Origin": ok ? origin : allowed[0] || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin",
    };
    const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (req.method !== "POST") return json(405, { code: "upstream_error" });
    if (!ok) return json(403, { code: "not_granted" });

    // Per-IP rate limit (optional: skipped when no KV namespace is bound).
    if (env.RATE_KV) {
      const ip = req.headers.get("CF-Connecting-IP") || "anon";
      const key = `rl:${ip}:${Math.floor(Date.now() / 60000)}`;
      const n = parseInt((await env.RATE_KV.get(key)) || "0", 10) + 1;
      await env.RATE_KV.put(key, String(n), { expirationTtl: 120 });
      if (n > parseInt(env.RATE_LIMIT || "10", 10)) return json(429, { code: "rate_limited" });
    }

    let body;
    try { body = await req.json(); } catch { return json(400, { code: "upstream_error" }); }
    const system = String(body.system || ""), question = String(body.question || "").trim();
    if (!question) return json(400, { code: "empty_completion" });
    if (system.length + question.length > 400000) return json(413, { code: "prompt_too_large" });

    const upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: env.MODEL || "claude-sonnet-4-5",
        max_tokens: Math.min(parseInt(body.max_tokens || "1500", 10) || 1500, 2000),
        system,
        messages: [{ role: "user", content: question }],
        stream: true,
      }),
    });

    if (!upstream.ok) {
      const code = upstream.status === 429 ? "rate_limited" : upstream.status === 413 ? "prompt_too_large" : "upstream_error";
      return json(upstream.status >= 500 ? 502 : upstream.status, { code });
    }

    // Convert Anthropic SSE into a plain text stream of deltas.
    const { readable, writable } = new TransformStream();
    (async () => {
      const writer = writable.getWriter(), enc = new TextEncoder(), dec = new TextDecoder();
      const reader = upstream.body.getReader();
      let buf = "";
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buf += dec.decode(value, { stream: true });
          const lines = buf.split("\n"); buf = lines.pop();
          for (const line of lines) {
            if (!line.startsWith("data:")) continue;
            try {
              const ev = JSON.parse(line.slice(5).trim());
              if (ev.type === "content_block_delta" && ev.delta && ev.delta.text) await writer.write(enc.encode(ev.delta.text));
            } catch {}
          }
        }
      } finally { await writer.close(); }
    })();

    return new Response(readable, { headers: { ...cors, "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
  },
};
