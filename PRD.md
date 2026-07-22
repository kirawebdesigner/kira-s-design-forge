# Product Requirements Document

## Product

Kirubel Daniel — Personal Portfolio

## Problem

The starting site was a static export of a premium Framer portfolio template. Its visual quality was strong, but its copy, projects, links, imagery, blog content, contact details, metadata, and promotional calls to action did not represent Kirubel Daniel.

The portfolio must establish Kirubel as a full-stack product builder who can take a business problem or product idea through product structure, interface implementation, backend logic, databases, automation, and deployment.

## Audience

- Founders and business owners who need working software, automation, or internal systems
- Product teams looking for a capable full-stack builder
- Companies evaluating Kirubel for product engineering opportunities
- Technical collaborators and potential partners

## Positioning

Kirubel Daniel is a full-stack product builder and digital systems developer based in Addis Ababa, Ethiopia. The portfolio should feel ambitious, modern, premium, technically capable, experimental, and serious.

## Core User Questions

The homepage must quickly answer:

1. Who is Kirubel?
2. What kinds of products and systems does he build?
3. Which real projects demonstrate that ability?
4. How does his work differ from a generic junior web developer portfolio?
5. How can a visitor contact him?

## MVP Scope

- Preserve the exported Framer template's premium composition, typography, animation, interactions, and responsive behavior.
- Replace all template identity and promotional residue.
- Rewrite the homepage around Kirubel's product-building positioning.
- Feature only:
  - Zewijuna
  - YourCloser
  - DMS
  - Pommy
  - Majestic
- Convert five existing work-detail routes into accurate product case studies.
- Feature KirzKit separately as an Open Source / Developer Tools project, not as a sixth product case study.
- Link the verified GitHub and LinkedIn profiles from the shared footer.
- Remove or repurpose unused template project and blog routes without leaving visible dead ends.
- Use only real project facts, screenshots, and confirmed links.
- Capture real product screenshots directly where accessible.
- Provide a clear, functional contact path.
- Update page metadata, social metadata, favicon/identity assets where possible, navigation, footer, and 404 content.
- Validate responsive behavior at 320, 360, 375, 390, 412, 430, 768, 1024, 1440, and 1920 pixels.

## Explicit Exclusions

- The supplied clinic dashboard screenshot was clarified by Kirubel as DMS and is used only for that project.
- Do not fabricate metrics, testimonials, clients, awards, employment history, results, URLs, or screenshots.
- Do not redesign from scratch or replace the site with a generic developer portfolio.
- Do not add a blog unless retained content is genuinely useful and written for Kirubel.
- Do not push to GitHub or alter a remote repository.

## Success Criteria

- No visible trace of the original owner, template vendor, purchased-template CTAs, retired projects, or fake content remains.
- The five approved projects are the only primary portfolio projects.
- Every displayed project image is a real product screenshot or a clearly documented temporary placeholder.
- The site is usable without horizontal overflow or clipped content at every required viewport.
- Navigation and internal links resolve correctly.
- No material browser-console errors are introduced.
- Available validation checks pass; unavailable checks are explicitly reported.

## Manifesto Component Release

- Replace the oversized single-paragraph manifesto with a compact, recruiter-readable product-approach component.
- Preserve the portfolio's editorial monochrome identity while improving hierarchy, pacing, mobile readability, and reduced-motion behavior.
- Keep the implementation framework-free; Astryx is used as a component-design reference because its React packages are incompatible with this static export.
- Commit and publish the fully validated portfolio through the existing DirectAdmin deployment workflow.

## Production Optimization Pass

- Reduce the homepage and work-index image payload with responsive WebP/AVIF derivatives while retaining original source files.
- Make all primary content available in static HTML so the complete portfolio remains readable without JavaScript.
- Preserve the current Framer-inspired visual direction while targeting desktop Performance 90+, mobile Performance 75+, Accessibility 100, Best Practices 100, and repository-controlled SEO 100.
- Publish valid crawler files, canonical metadata, verified structured data, safe static-host security headers, and appropriate cache policy.
- React migration remains outside this pass. The later manifesto release explicitly authorizes a commit and production deployment.
