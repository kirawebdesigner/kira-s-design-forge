# Implementation Plan

## Release Status

- [x] Publish the validated optimization and manifesto release in commit `7756473` (DirectAdmin workflow `29879563587` succeeded).
- [x] Refresh the Majestic full-page preview from the supplied capture with responsive AVIF/WebP derivatives and publish it in commit `20ca6ef` (workflow `29879956973` succeeded).
- [x] Verify the live Majestic 1040px AVIF response matches the committed asset.
- [ ] Require explicit user authorization before any future commit, push, or deployment.

## Manifesto Component Release

- [x] Audit the supplied desktop screenshot and existing sticky read-along implementation.
- [x] Define a compact two-column editorial component with a single-column mobile fallback.
- [x] Implement semantic static HTML, scroll-driven transform/opacity emphasis, and reduced-motion behavior.
- [x] Run responsive, accessibility, console, performance, and visual validation.
- [x] Commit the complete audited portfolio state, push `main`, and verify the DirectAdmin deployment.

## Targeted Screenshot Redesign

- [x] Audit the homepage manifesto and current homepage, work-index, and case-study screenshot containers.
- [x] Define a targeted editorial evolution using the existing neutral palette, typography, and real screenshots.
- [x] Add asymmetric desktop gallery rhythm and single-column mobile composition.
- [x] Add consistent screenshot stages to homepage cards, work cards, case-study imagery, and full-page previews.
- [x] Tighten the manifesto scroll runway and type measure without changing its content or accessibility behavior.
- [x] Replace Pommy presentation assets with optimized derivatives from the supplied updated screenshot.
- [x] Add KirzKit as a separate open-source/tooling feature with a direct GitHub link.
- [x] Add verified GitHub and LinkedIn profile links to all route footers and homepage structured data.
- [x] Run responsive, visual, interaction, accessibility, and performance regression validation.
- [x] Record final evidence, exact working-tree status, and release verification.

## Current Production Optimization Pass

- [x] Capture clean homepage browser and three-run Lighthouse baselines at 390px/mobile and 1440px/desktop.
- [x] Capture before screenshots at 390, 768, 1440, and 1920 pixels for the homepage, work index, and five case studies.
- [x] Generate responsive project-card and case-study image derivatives while retaining sources.
- [x] Move restored content into static HTML and reduce the custom script to progressive enhancement.
- [x] Remove obsolete Framer runtime and unused remote font declarations after route-by-route proof.
- [x] Add responsive picture/srcset/sizes markup and explicit intrinsic dimensions.
- [x] Fix hero first-paint behavior, manifesto batching, footer contrast, metadata, crawler files, structured data, cache policy, and security headers.
- [x] Complete all-route browser, accessibility, SEO, performance, warm-cache, JavaScript-disabled, and visual-regression validation.
- [x] Apply restrained design-taste polish to focus, selection, contact controls, and motion behavior without redesigning.
- [x] Produce the final evidence-backed report. Publish only when explicitly authorized.

## Current Restoration Pass

- [x] Restore the manifesto as a reversible scroll-progress read-along without rehydrating retired template content.
- [x] Rebuild Services, Featured Projects, Builder Mindset, Capabilities, Contact, and Footer inside their existing section roots.
- [x] Add Kirubel's supplied portrait to the original hero avatar component.
- [x] Standardize all contact destinations on `contact@kira.pro.et`.
- [x] Synchronize the complete footer and accessible mobile menu across all nine retained routes.
- [x] Integrate the supplied Zewijuna, Pommy, and Majestic full-page captures at their native proportions.
- [x] Re-run visual screenshots, the 90-page responsive matrix, console/image/link/accessibility checks, menu keyboard behavior, form fallback, and reduced motion.
- [x] Keep the restoration local through final audit, then publish through the existing GitHub Actions/DirectAdmin workflow after explicit authorization on 2026-07-20.

## Phase 1 — Audit and Baseline

- Inventory all routes, page titles, sections, links, images, metadata, and Framer promotional elements.
- Record current responsive behavior and interactions.
- Identify repeated generated fragments that require synchronized edits.
- Confirm the intended path is `template`, because the supplied `trmplate` path does not exist.
- Identify project source folders, documentation, deployments, and screenshot candidates.

## Phase 2 — Content and Information Architecture

- Finalize homepage positioning, biography, capabilities, and contact copy.
- Map the five approved projects onto five existing work-detail layouts.
- Remove all visible template projects and blog/editorial content.
- Define temporary factual copy for projects whose details remain incomplete.
- Build missing-information and link checklists.

## Phase 3 — Real Project Inspection

- Inspect and run Zewijuna variants; determine authoritative mobile and web sources.
- Inspect YourCloser local/repository/deployment references.
- Inspect DMS candidates (`dentalos`, `dms-test`, and related folders).
- Inspect Pommy.
- Locate and inspect Majestic.
- Integrate the user-supplied clinic dashboard screenshot as DMS.
- Capture privacy-safe screenshots at suitable desktop/mobile viewports.

## Phase 4 — Portfolio Transformation

- Update global metadata and identity.
- Rewrite homepage content while preserving layout and animation.
- Update work index to exactly five projects.
- Rewrite five project detail pages as product case studies.
- Update navigation, footer, contact areas, 404, and all related-project links.
- Add local screenshot assets and consistent image treatment.
- Remove or redirect surplus routes without creating dead links.

## Phase 5 — Quality and Responsiveness

- Serve locally over HTTP.
- Test all required viewport widths.
- Check mobile menu, anchors, project links, external links, contact actions, hover states, and scroll interactions.
- Capture browser console errors.
- Run available typecheck, lint, and build commands; report unavailable checks accurately.
- Fix transformation regressions.

## Phase 6 — Cleanup and Handoff

- Remove confirmed unused template-only assets/code/routes.
- Re-scan for original-owner details, vendor branding, template CTAs, placeholder project names, fake links, and prohibited project references.
- Ensure no secrets or private data were added.
- Prepare a clean static project ready for a future GitHub repository.
- Produce the full requested report and explicit screenshot, project-information, and link checklists.

## Final Audit Evidence

- Nine retained routes tested at ten required viewport widths: 90/90 passing.
- Fresh 390px and 1440px full-page captures stored outside production assets under `qa-artifacts/final-audit/`.
- Automated interaction checks cover the manifesto, mobile-menu keyboard flow, reduced motion, project-card hover, contact form validation/draft, link integrity, image loading, headings, labels, overflow, hidden content, footer consistency, and template residue.
