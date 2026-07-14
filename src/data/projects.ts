import zewijunaHero from "@/assets/zewijuna-hero.png";
import zewijunaMatch from "@/assets/zewijuna-match.png";
import zewijunaHowit from "@/assets/zewijuna-howit.png";
import projectDentalcare from "@/assets/project-dentalcare.jpg";
import dentalDashboard from "@/assets/dentalcare-dashboard.png";
import dentalLogin from "@/assets/dentalcare-login.png";
import projectSims from "@/assets/project-sims.jpg";
import simsDashboard from "@/assets/sims-dashboard.png";
import projectWebos from "@/assets/project-webos.jpg";
import webosScreenshot from "@/assets/webos-screenshot.png";
import projectLanding from "@/assets/project-landing.jpg";

export type ProjectType = "client" | "product" | "experiment";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  type: ProjectType;
  category: string;
  year: string;
  client?: string;
  role: string;
  summary: string;
  problem: string;
  build: string;
  decisions: string[];
  outcome: string;
  learned: string;
  technologies: string[];
  cover: string;
  gallery: string[];
  liveUrl?: string;
  status: "shipped" | "in-progress" | "case-study";
  featured?: boolean;
  accent?: string;
}

export const projects: Project[] = [
  {
    slug: "zewijuna",
    title: "Zewijuna",
    tagline: "A halal dating platform — mobile app + web experience.",
    type: "client",
    category: "Mobile App · Real-time",
    year: "2025",
    client: "Zewijuna",
    role: "Full product build — mobile app, backend, real-time chat, admin flows.",
    summary:
      "My first major real client product. A Muslim dating mobile application built to help people find meaningful connections while honoring their values. The scope forced a jump from frontend demos into real backend architecture, authentication, and production responsibility.",
    problem:
      "The client needed a production mobile app with phone authentication, gender-aware discovery, real-time chat, membership upgrade flows, and manual verification — not a landing page, not a prototype. Everything had to actually work with real users.",
    build:
      "Built the mobile app in Expo / React Native with Supabase as the backend. Implemented phone authentication, a discover experience with gender filtering, real-time chat, membership upgrade flows, and an admin verification pipeline. Also delivered the web landing experience.",
    decisions: [
      "Supabase over a custom Node backend — Row Level Security fits multi-user privacy rules better than hand-rolled middleware.",
      "Manual admin verification before automated moderation — trust matters more than throughput at this stage.",
      "Expo managed workflow — fastest path to a signed production build for a solo builder.",
    ],
    outcome:
      "Shipped the mobile app and the web experience. First live client product in the App/Play distribution direction.",
    learned:
      "Do not underestimate a project. Real products are different from demos. Backend, security, and deployment are where the actual work lives.",
    technologies: ["Expo", "React Native", "Supabase", "Postgres", "RLS", "Realtime", "TypeScript"],
    cover: zewijunaHero,
    gallery: [zewijunaHero, zewijunaMatch, zewijunaHowit],
    liveUrl: "https://zewijuna.com",
    status: "shipped",
    featured: true,
    accent: "14 78% 56%",
  },
  {
    slug: "yourcloser",
    title: "YourCloser",
    tagline: "Telegram commerce automation for boutiques and digital sellers.",
    type: "product",
    category: "SaaS · Automation",
    year: "2025",
    role: "Solo product architect — bot, backend, database, admin console.",
    summary:
      "A multi-tenant SaaS that lets Telegram-first businesses run their entire sales operation without a website. Product browsing, cart, checkout, order tracking, and an admin dashboard — all inside Telegram.",
    problem:
      "Ethiopian boutiques and digital sellers already do business on Telegram. They lose sales after hours, mishandle stock, and cannot broadcast reliably. A website was not the answer — meeting them where they are was.",
    build:
      "Python bot (python-telegram-bot) fronting a FastAPI service, Supabase Postgres with Row Level Security for multi-tenant isolation, and PL/pgSQL for atomic stock handling. Owner/admin roles, plan enforcement, broadcast, chaos-tested with anti-spam locks and edit-safe order state.",
    decisions: [
      "Atomic PL/pgSQL functions for stock — never let two customers buy the last item.",
      "Multi-tenant RLS at the database, not the app — one query mistake cannot leak another shop.",
      "Plan gates enforced server-side, not in the UI — the free tier cannot be unlocked from the client.",
    ],
    outcome:
      "Full customer + admin experience live in Telegram: categories, new arrivals, search, product carousel, cart, checkout, profile memory, order tracking, and broadcast.",
    learned:
      "Reliability is the product. Chaos tests, database guards, and boring correctness outrank features.",
    technologies: ["Python", "python-telegram-bot", "FastAPI", "Supabase", "Postgres", "PL/pgSQL", "Redis"],
    cover: projectLanding,
    gallery: [projectLanding],
    status: "in-progress",
    featured: true,
  },
  {
    slug: "pommy",
    title: "Pommy Burger & Pizzeria",
    tagline: "A restaurant ordering system that started as a website customization.",
    type: "client",
    category: "Web · E-commerce",
    year: "2025",
    role: "Full build — visual restoration, menu system, cart, checkout, deployment.",
    summary:
      "What began as a Webflow visual customization became a real restaurant system: 101-item menu, search, cart, quantity, COD checkout, delivery/takeaway flows, and Supabase-backed data.",
    problem:
      "A restaurant needed a website that also actually took orders. The starting point was an exported Restaurante X Webflow composition — beautiful but static, template-branded, and full of dangling assets.",
    build:
      "De-Webflowed the export, localized assets, restored responsive behavior, preserved IX2 motion, then wired a real 101-item menu with categories, search, cart with local persistence, quantity control, and a COD checkout with delivery/takeaway flows. Deployed on Netlify.",
    decisions: [
      "Preserve IX2 motion instead of rebuilding — the visual identity was already right.",
      "Local cart persistence before authentication — checkout must not depend on account creation.",
      "Static frontend + Supabase data — cheapest reliable path for a restaurant with a small team.",
    ],
    outcome:
      "Public site live on Netlify. Real menu, real cart, real orders. Admin dashboard direction defined for the next phase.",
    learned:
      "A visual customization brief can hide a full product. Read the actual need, not the ticket.",
    technologies: ["Webflow IX2", "Vanilla JS", "Supabase", "Netlify", "HTML/CSS"],
    cover: projectDentalcare,
    gallery: [projectDentalcare],
    liveUrl: "https://pommydemo.netlify.app",
    status: "shipped",
    featured: true,
  },
  {
    slug: "signbridge",
    title: "SignBridge AI",
    tagline: "Live sign-language recognition — accessibility through computer vision.",
    type: "product",
    category: "AI · Accessibility",
    year: "2025",
    role: "Product & integration — frontend, model integration contract, live inference UX.",
    summary:
      "An accessibility project translating sign language into text using live camera input and computer vision. The model work was collaborative; my ownership was the product surface, live inference behavior, and integration.",
    problem:
      "Making sign language recognition actually usable in a browser — camera permissions, latency, frame handling, and a UX that does not feel like a lab demo.",
    build:
      "Camera pipeline, frame preprocessing, TensorFlow + OpenCV model integration, and a live inference UI. Defined the contract between the model and the product so the model author and I could iterate independently.",
    decisions: [
      "Client-side inference where possible — no round-trip beats real-time.",
      "Clear model/product boundary — I do not claim to have trained every layer.",
    ],
    outcome:
      "Working prototype with live camera capture, model inference, and a readable output surface.",
    learned:
      "In AI products, the interface between the model and the user is the actual product.",
    technologies: ["TensorFlow", "OpenCV", "Python", "React", "WebRTC"],
    cover: projectSims,
    gallery: [projectSims],
    status: "case-study",
    featured: false,
  },
  {
    slug: "sims",
    title: "SIMS-ET",
    tagline: "Student Information Management System — built for a school competition.",
    type: "product",
    category: "SaaS · Education",
    year: "2024",
    role: "Solo build — architecture, roles, dashboards, real-time data.",
    summary:
      "Multi-role school information platform (admin / teacher / student) with real-time CRUD across grades, attendance, and enrollment. Built for a school competition; well received by the reviewing teacher.",
    problem:
      "Ethiopian schools rely on paper and spreadsheets. A working, role-aware digital system — even a small one — is a step change.",
    build:
      "React + Supabase with role-based access, live data, and dashboards tuned per role. Data model designed for the actual workflows a school runs, not a generic CRUD template.",
    decisions: [
      "Role-based dashboards, not a single admin view with permission checks.",
      "Real-time updates where they matter (attendance, announcements), polling elsewhere.",
    ],
    outcome: "Working demo used in a school context. Early proof that I could build a full system solo.",
    learned:
      "Role-first thinking beats feature-first thinking when the same data means different things to different users.",
    technologies: ["React", "TypeScript", "Supabase", "Postgres", "Tailwind"],
    cover: projectSims,
    gallery: [projectSims, simsDashboard],
    liveUrl: "https://sims-et.web.app",
    status: "shipped",
    featured: true,
  },
  {
    slug: "dentalcare",
    title: "DentalCare CMS",
    tagline: "Clinic management system — reception, doctor, and admin flows.",
    type: "client",
    category: "Web · Business System",
    year: "2024",
    role: "Full build — workflows, scheduling, multi-user logic.",
    summary:
      "A dental management system with functional workflows for admin, reception, and doctor roles: patient records, appointment scheduling, and role-scoped access.",
    problem:
      "Small dental practices need appointment scheduling and patient records without enterprise pricing or complexity.",
    build:
      "React + Supabase with appointment scheduling, patient record management, and workflow separation per role. Focused on the daily flows a receptionist actually uses.",
    decisions: [
      "Reception flow first — the highest-touch role should be the fastest UI.",
      "Role-scoped data via RLS — a doctor cannot accidentally see billing.",
    ],
    outcome: "Working system with role-based flows and real appointment scheduling.",
    learned: "Business systems live or die on the boring flows. Design those first.",
    technologies: ["React", "Supabase", "Postgres", "Tailwind"],
    cover: projectDentalcare,
    gallery: [projectDentalcare, dentalDashboard, dentalLogin],
    status: "shipped",
    featured: false,
  },
  {
    slug: "webos",
    title: "Web-Based OS",
    tagline: "A browser desktop environment — an engineering experiment.",
    type: "experiment",
    category: "Lab · Creative Engineering",
    year: "2024",
    role: "Solo experiment.",
    summary:
      "A multi-window desktop environment running entirely in the browser: TSX modules loaded via import maps, a taskbar, and modular state management.",
    problem:
      "Can a desktop-class window manager and app runtime live inside a browser tab without a build step per app? What breaks first?",
    build:
      "Import-map-driven TSX module loading, a windowing system, a taskbar, and per-app state isolation. No framework lock-in on the apps themselves.",
    decisions: [
      "Import maps over bundling per app — hot-swap apps without redeploying the shell.",
      "State isolation per window — closing an app should not leak memory into the next one.",
    ],
    outcome: "Working demo at webbasedos.web.app.",
    learned: "Constraints breed architecture. Removing the build step forced a cleaner runtime contract.",
    technologies: ["React", "TypeScript", "Import Maps", "TSX Runtime"],
    cover: projectWebos,
    gallery: [projectWebos, webosScreenshot],
    liveUrl: "https://webbasedos.web.app",
    status: "shipped",
    featured: false,
  },
  {
    slug: "hermes",
    title: "Hermes Operator",
    tagline: "An AI operator infrastructure experiment.",
    type: "experiment",
    category: "Lab · AI Systems",
    year: "2025",
    role: "Solo experiment.",
    summary:
      "An AI operator architecture: FastAPI core, a task system, memory, graph execution, a Supabase persistence layer, a Telegram adapter, and a GitHub memory direction.",
    problem:
      "What does an agentic system need at the infrastructure layer — tasks, memory, execution graph, adapters — separate from any specific model?",
    build:
      "FastAPI service exposing tasks, a graph executor, Supabase-backed memory, agent commands, and a Telegram adapter. Structured around projects, goals, and skills as first-class objects.",
    decisions: [
      "Agent commands as data, not code — enable inspection and replay.",
      "Adapters (Telegram, GitHub) instead of a monolithic client — swap surfaces without touching the core.",
    ],
    outcome: "Working scaffolding. Not a production autonomous system — an infrastructure sketch.",
    learned: "Naming the primitives early (task, goal, skill, memory) is the actual architecture work.",
    technologies: ["FastAPI", "Supabase", "Python", "Telegram Bot API"],
    cover: projectLanding,
    gallery: [projectLanding],
    status: "in-progress",
    featured: false,
  },
  {
    slug: "brandblueprint",
    title: "BrandBlueprint AI",
    tagline: "From business brief to full brand system.",
    type: "experiment",
    category: "Lab · AI Product",
    year: "2025",
    role: "Solo experiment.",
    summary:
      "An AI branding tool that takes a business brief and generates a palette, typography direction, brand voice, sitemap, SEO direction, copy, logo prompts, photo direction, and brand guidelines.",
    problem:
      "Small businesses hire five different people to answer one question: what should my brand feel like? A single generator can do most of the first pass.",
    build:
      "Structured prompt pipeline over a business brief, producing a coherent brand system as JSON + a printable guideline document.",
    decisions: [
      "Structured output over free-form — a brand system must be composable, not a wall of text.",
      "Guideline PDF as the deliverable — clients recognize the artifact.",
    ],
    outcome: "Working generator; product direction defined.",
    learned: "AI product work is 20% model, 80% output shape.",
    technologies: ["LLM APIs", "React", "TypeScript", "Prompt Engineering"],
    cover: projectLanding,
    gallery: [projectLanding],
    status: "case-study",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const experiments = projects.filter((p) => p.type === "experiment");
export const clientWork = projects.filter((p) => p.type === "client");
