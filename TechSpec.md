# Technical Specification

## Current Architecture

The project is a static Framer export consisting of nine retained public HTML files:

- `/index.html`
- `/404.html`
- `/404/index.html`
- `/work/index.html`
- `/work/zewijuna/index.html`
- `/work/yourcloser/index.html`
- `/work/dms/index.html`
- `/work/pommy/index.html`
- `/work/majestic/index.html`

There is no `package.json`, source component tree, or build system. The static site is tracked in Git and retains Framer-generated CSS, serialized data, runtime scripts, and fonts. Project screenshots and the homepage restoration layer are local under `assets/`.

## Implementation Strategy

- Preserve Framer-generated class names, layout CSS, breakpoints, animation runtime, and interaction bindings.
- Modify document metadata, rendered HTML content, links, image references, and matching serialized page data carefully.
- Prefer controlled transformation scripts for repeated, deterministic changes, but keep the final deliverable deployable as static files.
- Store captured project screenshots locally under `assets/projects/<project>/`.
- Add only minimal custom CSS or JavaScript when generated markup cannot support required content safely.
- Use the shared `portfolio-restoration.css` and `portfolio-restoration.js` layer for the synchronized footer, accessible mobile menu, read-along behavior, contact flow, and export-specific visibility fixes.
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
- `/404.html` — direct static-host not-found document

Retired project and editorial routes have been removed. Retained navigation uses root-relative links so nested case-study pages resolve consistently.

## Data and Content

The portfolio has no application database. Project content is static and must be backed by:

- User-provided facts in the goal objective
- Local source repositories and documentation
- Real application behavior
- Confirmed live deployments and links
- Captured screenshots from real products

Unverified facts must not appear. The user-supplied clinic dashboard screenshot is authoritative visual evidence for DMS.

## Contact

- The confirmed portfolio address is `contact@kiraweb.pro.et`.
- The homepage contact form validates Name, Email, and Project / message, then opens a transparent prefilled `mailto:` draft. It does not claim backend submission.
- Hide unconfirmed social and external profile links rather than inventing destinations.
- Preserve the template's contact interaction and visual composition.

## Security and Privacy

- Never expose `.env` values, API keys, tokens, phone numbers, private messages, customer data, authentication credentials, or internal identifiers in screenshots or portfolio copy.
- Use demo or empty-state data where real application access permits.
- Review every screenshot before integration.

## Validation

- HTML/link audit
- Automated screenshots at all required viewport widths across all nine retained routes
- Fresh full-page evidence captures at 390px and 1440px for the homepage, work index, five case studies, and not-found page
- Horizontal overflow and clipping checks
- Navigation and mobile-menu interaction checks
- Scroll-linked read-along, rapid-scroll, reverse-scroll, and reduced-motion checks
- Browser console error capture
- Static-server smoke test
- Typecheck/lint/build only if tooling exists or is intentionally added; otherwise report as not configured

## Hosting

The output remains host-agnostic static HTML. Production is currently published to `kiraweb.pro.et` by `.github/workflows/deploy.yml`: a push to `main` prepares the retained static files and uploads them to the existing DirectAdmin document root over FTP. Deployment was explicitly authorized on 2026-07-20.
