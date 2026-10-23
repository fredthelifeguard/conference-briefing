# Huntington University Design System

Huntington University (HU) is a Christian liberal-arts university founded in 1897 by the Church of the United Brethren in Christ. It offers graduate and undergraduate programs in 70+ academic concentrations across three academic locations: the home campus (Huntington, IN), Huntington University Fort Wayne, and Huntington University Arizona (Peoria, AZ). Students and alumni are "Foresters"; the community is the "Forester Nation."

## Sources
- `uploads/Style_Guide_V4-1.pdf` — official HU Style Guide V4 (11/26/2024), 58 pages. An editorial/writing style dictionary: spellings, capitalization, acronyms, punctuation, voice and tone (Appendix B). Full extracted text: `scratch/style-guide-text.txt`.
- `uploads/univrel_brand_guide_20190820-1.pdf` — official Corporate Identity Standards (University Relations, 2019), 12 pages: logo construction and restrictions, corporate colors, screen-tint rules, font selection, athletic/spirit logos, Norm the Forester mascot, University seal. Extracted text: `scratch/brand-guide-text.txt`.
- `uploads/Supporting Your Student through their 1st College Semester (Poster (US)).pdf` — a 2-page parent-facing poster (working copy at `uploads/poster.pdf`); source of the modern-collateral patterns (Poppins, ALL-CAPS green headers, tables).

**Logo**: the bell-tower logo was extracted from the brand guide — `assets/logo-white.png`, `assets/logo-green.png` (Pantone 343), `assets/logo-black.png`. Never alter, stretch, skew, rotate, recolor, or split it (no bell tower alone, no logotype alone). New/modified logos require University Relations approval.

## CONTENT FUNDAMENTALS
Voice (from Style Guide Appendix B): honest, inviting, informative. "Friendly and accessible, but not overly casual — after all, we are an institution of higher education." Helpful and knowledgeable. Recurring identity lines: "Huntington University is home"; "Once you are a Forester, you are a Forester for life"; all students, alumni, faculty, and staff are part of the Forester Nation; "one school in three academic locations."

Rules to follow when writing HU copy:
- **We/our** for student, prospective-student, and alumni audiences (first-person plural promotes camaraderie). Avoid passive voice.
- **Earn, not get**: "Earn your degree at Huntington University," never "Get your degree."
- **Contractions** are fine for student/alumni audiences; avoid them for donors, grants, trustees, and formal announcements.
- **Serial (Oxford) comma** always. Em dashes with spaces around them (AP style). Exclamation points sparingly — acceptable for urgency around events/deadlines.
- **Acronyms**: spell out on first reference with acronym in parentheses; acronym alone after. Exceptions: the HUB, URL, grad. Plurals add -s, no apostrophe (URLs, ADDYs).
- **No ampersands** in running text or headings (use "and"), except Merillat Complex & Fieldhouse and the Office of Information & Technology Services.
- **Degree names**: "Bachelor of Arts degree" (never BA/B.A.); "bachelor's degree"; "associates degree"; BSN/BSW acronyms allowed after first reference (professional degrees).
- **Times**: 8:00 a.m. (lowercase with periods, space before). A.M./P.M. only inside all-caps display type. Academic years: 2021-2022 (four digits, hyphen, no spaces).
- **advisor** not adviser; **axe** not ax; fall semester (lowercase); Commencement (capitalized).
- Names: full name on first reference; first name after that in alumni stories/bios, last name in magazine/press (AP).
- No emoji anywhere in the provided materials.

Poster copy style: ALL-CAPS Poppins display headers ("SUPPORTING YOUR STUDENT THROUGH THEIR 1ST COLLEGE SEMESTER"), numbered action headers ("1. ENCOURAGE EMOTIONAL REGULATION & SELF-CARE"), short label + explanation pairs, bulleted fragments, reassuring imperative tone toward parents.

## VISUAL FOUNDATIONS
- **Color (official, brand guide p4)**: corporate colors are Pantone 343 green `#005244` (CMYK 95/15/62/58), Pantone Black `#1E1E1E` (CMYK 30/30/30/100), and Pantone 877 Metallic silver (no hex defined — `--hu-silver:#8A8D8F` is an approximation). The green ramp (`green-50…900`) and grey ramp extend these; `#00573D`/`#227C66`/`#7AAA9C` are poster-sampled secondary greens. A small red `#FF0013` appears once in the poster for an urgent asterisk note. Screened logo/color uses must keep a 30% value difference from the background.
- **Type**: two registers. *Print/formal* (brand guide): Garamond serif for body copy (sub: EB Garamond, bundled), Trajan caps for headlines/subheads, sparingly (sub: Cinzel, bundled; Trajan Bold appears in the logo), Helvetica for sidebars/captions, sparingly (system stack). *Modern collateral* (poster): Poppins 400/500/600/700 throughout, ALL-CAPS Bold display headers with a hard offset grey drop shadow (`--shadow-display`).
- **Layout**: white page, strong ALL-CAPS green headers, content in tables (green header row, ruled rows) and label/description two-column blocks. Generous margins.
- **Backgrounds**: plain white; no gradients, textures, patterns, or full-bleed imagery in the provided artifact.
- **Shadows**: hard offset grey shadow on display type; soft lifted shadow on the QR block (`--shadow-card`, `--shadow-lift`). No inner shadows.
- **Borders and radii**: thin grey rules in tables; no visible corner rounding in the poster — components here default to small radii (4-8px) and this is an inference, not a sourced value.
- **Imagery**: none provided beyond a QR code. No photo treatment can be documented.
- **Animation, hover, press states**: no digital product was provided; the web-component states here (darken on hover, focus ring in `--focus-ring`) are pragmatic defaults, not sourced.
- **Transparency/blur**: none observed.

## ICONOGRAPHY
No icon system exists: no icon font, no SVG glyphs, no emoji. The brand's graphic marks are: the bell-tower logo (extracted, in `assets/`); athletic/spirit "Foresters" logos and per-sport variants (athletic use only); **Norm the Forester** mascot (plaid and solid-shirt versions); and the University seal (diplomas/official documents only, white version preferred). The athletic logos, Norm, and the seal are vector art in the brand guide PDF and could not be extracted as usable rasters — request original files from University Relations before using them. Bullets are plain text; emphasis uses weight, caps, and the green.

## Index
- `styles.css` — global entry; imports everything in `tokens/` (colors, typography, spacing, fonts, base).
- `assets/` — bell-tower logo (white/green/black PNG), QR code, fonts (Poppins, EB Garamond, Cinzel woff2).
- `guidelines/` — foundation specimen cards (Design System tab).
- `components/core/` — Button, Input, Select, Checkbox, Radio, Card, Badge, Table, SectionHeader (standard set; no component source was provided).
- `ui_kits/poster/` — HTML recreation of the "Supporting Your Student" poster.
- `scratch/` — extracted PDF text and images (working files).
- `SKILL.md` — agent skill entry point.

### Intentional additions
- **SectionHeader** — the poster's signature ALL-CAPS green header with offset shadow, needed to reproduce HU collateral.
- **Table** — the poster's core content pattern (green header row, ruled body rows).

## Caveats
- Logo colorways were extracted from the brand guide PDF as 258×133px rasters — fine for screens, too small for large print. Request vector originals from University Relations.
- Garamond → EB Garamond and Trajan → Cinzel are Google Fonts substitutions (originals are licensed); Helvetica falls back to the system stack. Pantone 877 Metallic has no official hex; `#8A8D8F` is an approximation.
- Norm the Forester, the athletic logos, and the University seal exist in the brand guide but could not be extracted as usable images.
- No digital product (site/app) source existed, so the component set is a standard set styled to the poster's language, and interaction states are inferred defaults.
