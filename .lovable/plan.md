## Kira Web Portfolio — Full Strategic Rebuild

A complete redesign of the portfolio for Kirubel Daniel (Kira Web) — a serious, editorial, product-builder portfolio. No generic dev clichés, no template feel.

### Positioning
Headline direction: **"I turn ambitious ideas into real digital products."**
Sub: Kirubel Daniel — software developer & product builder in Addis Ababa. Websites, apps, SaaS, and AI systems for businesses and ambitious ideas.

### Visual Direction
- **Aesthetic**: Editorial-premium. Deep near-black (`#0A0A0A`) canvas, warm bone (`#F5F1EA`) contrast surfaces, single restrained accent (burnt ember `#E85D3A`).
- **Typography**: Display — **Fraunces** (variable serif, oversized editorial). Body — **Inter Tight**. Mono metadata — **JetBrains Mono**.
- **Layout language**: Asymmetric, generous negative space, large image framing, ticker/marquee metadata, numbered indices (01 · 02 · 03), oversized project titles.
- **Motion**: Framer Motion — masked image reveals, typography clipping, cursor-context labels ("VIEW", "OPEN"), sticky project choreography. Respects `prefers-reduced-motion`.
- **No**: glassmorphism, purple gradients, floating tech logos, terminal hero, bento SaaS grid, uniform 3-column card grid.

### Route Architecture
```
/                    Homepage narrative
/work/:slug          Individual case study (existing ProjectDetail, rebuilt)
/about               Story & principles
/lab                 Experiments (Web OS, Hermes, BrandBlueprint)
/contact             Real conversation form
```

### Homepage Narrative
1. **Nav** — Home · Work · About · Lab · Contact + "Start a project" CTA
2. **Hero** — Oversized editorial headline, live availability status, cinematic project preview strip that reveals on scroll
3. **Selected Work** — Asymmetric bento (1 huge featured Zewijuna, then varied scale cards for YourCloser, Pommy, SignBridge, SIMS, Dental)
4. **What I Build** — 4 outcome-based capability blocks (Digital Experiences · Products & Applications · Business Systems · AI & Experimentation)
5. **Featured Case Study** — Deep-dive strip for YourCloser (Telegram commerce SaaS) with system architecture visual
6. **Story** — Editorial About block: "I learned software the way I still prefer to learn most things..." + real Zewijuna turning-point story
7. **Kira Web** — Commercial offer for hotels / guesthouses / real estate — trust, direct inquiry, WhatsApp/Telegram flow
8. **Lab / Currently Building** — Split section: past experiments + active work
9. **Contact CTA** — "Have something worth building?" with real form (Web3Forms already wired)
10. **Footer** — Rich metadata, socials, location, availability

### Project Data Model
Centralized `src/data/projects.ts`:
```ts
type Project = {
  id, slug, title, tagline, type: "client" | "product" | "experiment",
  category, year, client?, role, summary, challenge, build, decisions,
  outcome, learned, technologies[], cover, gallery[], liveUrl?, featured, status
}
```

### Featured Projects (truthful, from user brief)
1. **Zewijuna** — Client · Muslim dating mobile app + web · Expo/RN, Supabase, RLS, real-time chat, phone auth, admin verification
2. **YourCloser** — Product · Telegram commerce SaaS · Python, python-telegram-bot, FastAPI, Supabase, PL/pgSQL atomic stock, multi-tenant RLS
3. **Pommy Burger & Pizzeria** — Client · Restaurant system · 101-item menu, cart, COD checkout, Webflow IX2 preservation, Netlify (pommydemo.netlify.app)
4. **SignBridge AI** — Product · Accessibility AI · TensorFlow, OpenCV, live camera inference (role: product/frontend/integration)
5. **SIMS-ET** — Product · School management · React + Supabase, multi-role
6. **DentalCare / DMS** — Client + Product · Dental workflows
7. **Web-Based OS** — Lab · Multi-window browser OS
8. **Hermes Operator** — Lab · AI agent infrastructure
9. **BrandBlueprint AI** — Lab · AI brand generator

### Component Plan
**New**:
- `src/data/projects.ts` — single source of truth
- `src/components/portfolio/Hero.tsx` — editorial hero
- `src/components/portfolio/SelectedWork.tsx` — asymmetric bento
- `src/components/portfolio/Capabilities.tsx` — what I build
- `src/components/portfolio/FeaturedCase.tsx` — YourCloser deep strip
- `src/components/portfolio/Story.tsx` — editorial about
- `src/components/portfolio/KiraWeb.tsx` — hospitality/real estate offer
- `src/components/portfolio/Lab.tsx` — experiments strip
- `src/components/portfolio/ContactCTA.tsx` — form
- `src/components/portfolio/EditorialFooter.tsx`
- `src/components/portfolio/EditorialNav.tsx`
- `src/components/portfolio/CursorLabel.tsx` — desktop-only cursor context
- `src/components/portfolio/Marquee.tsx` — reworked capabilities ticker
- `src/pages/About.tsx`
- `src/pages/Lab.tsx`
- `src/pages/Contact.tsx`

**Rebuilt**:
- `src/pages/Index.tsx` — new narrative
- `src/pages/ProjectDetail.tsx` — editorial case-study layout, driven by `projects.ts`
- `src/index.css` + `tailwind.config.ts` — new tokens (bone, ember, ink), Fraunces/Inter Tight/JetBrains Mono fonts, editorial spacing
- `index.html` — Fonts, upgraded meta
- `src/App.tsx` — new routes

**Removed**:
- Old `Projects.tsx` (replaced by SelectedWork + data model)
- Old `Hero.tsx`, `About.tsx`, `Services.tsx`, `Contact.tsx`, `Footer.tsx`, `Navbar.tsx` (replaced by editorial versions)
- Old `ServiceDetail.tsx` route (services collapse into capabilities on home; no separate pages)

### Content Truth Rules
- No fake metrics, testimonials, or GitHub stats
- Age not used as marketing hook; may appear naturally in Story
- Only real live URLs (zewijuna.com, pommydemo.netlify.app, webbasedos.web.app, sims-et.web.app)
- Kira Web positioned as commercial arm for hospitality/real estate — no booking-guarantee claims

### Motion & Accessibility
- Framer Motion for reveals, sticky scenes
- Custom cursor labels only on `pointer: fine` + `prefers-reduced-motion: no-preference`
- Semantic HTML, keyboard nav, focus-visible, alt text on all imagery
- Mobile: cursor UI disabled, layouts genuinely re-composed (not stacked)

### SEO
- Per-route Helmet: title, description, canonical, og:*
- Sitemap regenerated with /work/:slug entries, /about, /lab, /contact
- Structured data: Person (Kirubel Daniel) + WebSite sitewide

### Implementation Order
1. Design tokens + fonts (index.css, tailwind, index.html)
2. Project data model
3. New nav + footer + cursor
4. Homepage sections top → bottom
5. About + Lab + Contact pages
6. Rebuilt ProjectDetail case-study template
7. Delete deprecated components + routes
8. Sitemap + SEO metadata
9. Playwright visual pass at 1920 / 1440 / 1024 / 768 / 390

### Scope Note
This is a large build (~15-20 new/rewritten files). I'll implement in one pass without stopping for approval between sections, and validate visually before handing back.
