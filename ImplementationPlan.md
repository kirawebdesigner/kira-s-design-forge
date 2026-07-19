# Implementation Plan

## Current Restoration Pass

- [x] Restore the manifesto as a reversible scroll-progress read-along without rehydrating retired template content.
- [x] Rebuild Services, Featured Projects, Builder Mindset, Capabilities, Contact, and Footer inside their existing section roots.
- [x] Add Kirubel's supplied portrait to the original hero avatar component.
- [x] Standardize all contact destinations on `contact@kiraweb.pro.et`.
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
