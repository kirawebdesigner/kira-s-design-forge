# Technical Specification

## Current Architecture

The project is a static Framer export consisting of 18 self-contained HTML files:

- `/index.html`
- `/404/index.html`
- `/work/index.html`
- Seven existing `/work/*/index.html` detail pages
- `/blog/index.html`
- Seven existing `/blog/*/index.html` article pages

There is no `package.json`, source component tree, local asset directory, build system, or Git repository. Framer-generated CSS, serialized React data, runtime scripts, fonts, and most images are referenced from `framerusercontent.com`.

## Implementation Strategy

- Preserve Framer-generated class names, layout CSS, breakpoints, animation runtime, and interaction bindings.
- Modify document metadata, rendered HTML content, links, image references, and matching serialized page data carefully.
- Prefer controlled transformation scripts for repeated, deterministic changes, but keep the final deliverable deployable as static files.
- Store captured project screenshots locally under `assets/projects/<project>/`.
- Add only minimal custom CSS or JavaScript when generated markup cannot support required content safely.
- Avoid introducing a new framework unless the static export proves impossible to maintain without breaking behavior.

## Local Development

- Serve the project with a local static HTTP server.
- Do not test primarily through `file://`, because route resolution and runtime behavior may differ.
- Browser validation will use an automated Chromium workflow and manual visual inspection where needed.

## Routes

Target public routes:

- `/` — homepage
- `/work/` — all approved work
- `/work/zewijuna/`
- `/work/yourcloser/`
- `/work/dms/`
- `/work/pommy/`
- `/work/majestic/`
- `/404/` — portfolio-branded not-found page

Existing surplus work and blog routes will be removed, redirected, or excluded from navigation only after link integrity is preserved.

## Data and Content

The portfolio has no application database. Project content is static and must be backed by:

- User-provided facts in the goal objective
- Local source repositories and documentation
- Real application behavior
- Confirmed live deployments and links
- Captured screenshots from real products

Unverified facts must not appear. The user-supplied clinic dashboard screenshot is authoritative visual evidence for DMS.

## Contact

- Use a direct `mailto:` link only after confirming Kirubel's email.
- Hide unconfirmed social and external profile links rather than inventing destinations.
- Preserve the template's contact interaction and visual composition.

## Security and Privacy

- Never expose `.env` values, API keys, tokens, phone numbers, private messages, customer data, authentication credentials, or internal identifiers in screenshots or portfolio copy.
- Use demo or empty-state data where real application access permits.
- Review every screenshot before integration.

## Validation

- HTML/link audit
- Automated screenshots at all required viewport widths
- Horizontal overflow and clipping checks
- Navigation and mobile-menu interaction checks
- Browser console error capture
- Static-server smoke test
- Typecheck/lint/build only if tooling exists or is intentionally added; otherwise report as not configured

## Hosting

The output remains host-agnostic static HTML suitable for GitHub Pages, Netlify, Cloudflare Pages, or equivalent static hosting. No deployment or remote change is authorized yet.
