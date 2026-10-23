# Handoff: Wisdom in the Age of AI, Conference Briefing site

A finished static website plus a small serverless proxy that powers its one live feature, "Ask the Conference." The job for Claude Code is deployment, not design: put `site/` on GitHub Pages, deploy `ask-proxy/` as a Cloudflare Worker with the Anthropic key, connect the two with one line of config, and verify.

## Overview

The site is a reader-adaptive briefing on a three-day conference (Calvin University, October 8 to 10, 2026) compiled by Justin, Huntington University IT. All content lives in three JSON files as 115 small "blocks" (quotes, figures, reported ideas, open questions, synthesis) that the page filters and reorders per reader. Every block links to its theme, session, and speaker. "Ask the Conference" sends the blocks and a free-text question to Claude and shows the answer with the cited blocks underneath.

## About the design files

Unlike a typical handoff, **the files in `site/` are the production site, not a reference to recreate.** They run in any browser with no build step. Do not port them to React/Next/etc. The visual design, data, and interactions are final and were reviewed by the owner. Change only what this README asks for.

Fidelity: high. Ship as-is.

## Deliverables (in order)

1. **GitHub repo** containing this folder's contents at the root (`site/`, `ask-proxy/`, `.github/`).
2. **GitHub Pages** serving `site/` via the included workflow (`.github/workflows/pages.yml`). In repo settings, set Pages source to "GitHub Actions". The site must load at `https://<user>.github.io/<repo>/` with no console errors. `site/.nojekyll` is required (filenames begin with `_`).
3. **Cloudflare Worker** from `ask-proxy/`:
   - `cd ask-proxy && npm i && npx wrangler login`
   - Edit `wrangler.toml`: set `ALLOWED_ORIGIN` to the exact Pages origin (`https://<user>.github.io`, no path).
   - `npx wrangler secret put ANTHROPIC_API_KEY` (the owner supplies the key; never commit it).
   - Optional: `npx wrangler kv namespace create RATE_KV`, paste the id into `wrangler.toml`, uncomment the block. Without it the proxy still works, just without per-IP rate limiting.
   - `npx wrangler deploy` and note the `*.workers.dev` URL.
4. **Connect**: in `site/config.js` set `window.ASK_ENDPOINT = "https://<worker>.workers.dev";` and push. This single value is the only edit the site needs. When it is empty the Ask UI hides itself and the site is fully static.
5. **Verify** on the live Pages URL: home → Ask the Conference → type a question → answer streams in with `[B..]` citations and a "Blocks this answer used" list below. Also check a scoped ask from a theme page ("Ask the Conference about this theme →").

Vercel or Netlify functions are acceptable substitutes for the Worker if preferred; keep the same request/response contract below.

## How the site is built (what you are deploying)

- `site/index.html` and `site/Conference Briefing.dc.html` are identical. `index.html` exists so Pages serves the root. The file contains an `<x-dc>` template and a `<script data-dc-script>` logic class.
- `site/support.js` is the small client runtime that renders that template with React. It loads React 18.3.1 and ReactDOM from unpkg with SRI hashes; those are the only external requests besides the Ask proxy. If you need zero external dependencies, download those two UMD files into `site/vendor/` and add `<script src="vendor/react.production.min.js">` and `react-dom` tags before `support.js` in both HTML files (the runtime skips the CDN when `window.React` already exists).
- `site/BriefingBlock.dc.html` is a child component fetched by the runtime relative to the page (`./BriefingBlock.dc.html`). Keep it beside `index.html`.
- `site/briefing-data.json`, `speakers.json`, `reading.json` are fetched relatively at boot. Keep them beside `index.html`.
- `site/_ds/...` is the Huntington University design system (tokens, fonts, component bundle). Paths are relative; do not move.
- `site/config.js` is loaded in the page `<helmet>` before boot and sets `window.ASK_ENDPOINT`.
- Routing is hash-based (`#/readers/infra/brief`, `#/themes/formation`, `#/speakers/crouch`, `#/ask/theme/<id>`). No server routing needed.
- `localStorage` keys `lcb-plain`, `lcb-lens`, `lcb-fmt` remember the plain-words toggle and last reader/format.

## Ask the Conference: request/response contract

The site's logic class (`runAsk()` in the `<script data-dc-script>` block) chooses a transport in this order: an in-app Claude connection if present (only inside the design tool), otherwise `window.ASK_ENDPOINT`.

Request to the endpoint:

```
POST <ASK_ENDPOINT>
Content-Type: application/json
{ "system": "<full instructions + all 115 blocks, ~60 KB>", "question": "<user text>", "max_tokens": 1500 }
```

The `system` string is built client-side and already contains every rule (cite block ids in brackets, quote only QUOTE blocks verbatim, etc.) and the reader persona. The proxy must pass it through unchanged as the Anthropic `system` parameter and send `question` as the single user message.

Response, either of:
- `200 text/plain` streamed. The site appends chunks as they arrive. (What the included Worker does.)
- `200 application/json` `{ "text": "..." }` in one piece.

Errors: non-2xx with JSON `{ "code": "<code>" }`. Codes the site maps to friendly messages: `rate_limited`, `prompt_too_large`, `upstream_error`, `refused`, `empty_completion`, `not_granted`, `session_expired`. Unknown codes fall back to the `upstream_error` message. A 429 is treated as `rate_limited` regardless of body.

Security requirements for the proxy: API key only in a server-side secret; CORS restricted to the Pages origin; cap `max_tokens` (the Worker caps at 2000); reject bodies over ~400 KB; rate limit per IP if KV is available. The system prompt comes from the client, which is acceptable here because the blocks are public content and the key is never exposed. If abuse is a concern, the proxy could instead load `briefing-data.json` itself and ignore the client `system`, but that requires reproducing `buildPrompt()` from the logic class server-side.

## Interactions & behavior (for verification only, nothing to build)

- Top bar: Home, For you, Themes, Sessions, Speakers, Learn more, plus "Ask the Conference" (only when an endpoint exists) and an "Ask Justin" button to a Menti (`https://www.menti.com/?code=88258238`, also a Tweaks prop default).
- "Plain words" toggle rewrites non-quote blocks into simpler language and adds a plain gloss under quotes.
- For you: six readers × four formats (Briefing, Deep dive, Monday morning, The skeptic). Changing either only filters and reorders prewritten blocks; no AI call.
- Figure blocks show small bar charts; Themes and Deep dive pages show a per-theme chart; Sessions list shows a per-session bar.
- Speaker names anywhere in text link to `#/speakers/<id>`.
- Ask page: reader chips, textarea (Ctrl/Cmd+Enter sends), suggestion chips, Stop button while busy, answer rendered from simple Markdown with `[B03]` citations turned into links that scroll to the matching block below.

## Design tokens

All styling is inline or from `site/_ds/.../tokens/*.css`. Key values: green `#005244` (`--hu-green-800`), black `#1E1E1E`, Poppins (sans, bundled woff2), EB Garamond (serif, bundled). No changes expected.

## Assets

- Fonts: `site/_ds/.../assets/fonts/*.woff2` (Poppins 400–700, EB Garamond 400/500/700, Cinzel 400/700).
- No images. The HU logo was intentionally removed from the top bar.

## Files

```
site/                         static site, deploy as-is
  index.html                  entry (identical to Conference Briefing.dc.html)
  Conference Briefing.dc.html
  BriefingBlock.dc.html       child component (block renderer)
  support.js                  client runtime (do not edit)
  config.js                   <-- set ASK_ENDPOINT here
  briefing-data.json          115 blocks, sessions, themes, lenses, notes, actions
  speakers.json               29 speakers with sessions and affiliations
  reading.json                reading list
  .nojekyll
  _ds/huntington-university-design-system-.../   tokens, fonts, component bundle
ask-proxy/                    Cloudflare Worker
  src/index.js
  wrangler.toml               set ALLOWED_ORIGIN; add KV id if using rate limiting
  package.json
.github/workflows/pages.yml   deploys site/ to GitHub Pages on push to main
```

## Open items for the owner

- Anthropic API key (for `wrangler secret put`).
- Final Pages origin, to lock CORS.
- Whether to vendor React locally (see above) or keep the unpkg CDN.
