import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

import projectDentalcare from "@/assets/project-dentalcare.jpg";
import projectWebos from "@/assets/project-webos.jpg";
import projectSims from "@/assets/project-sims.jpg";
import projectLanding from "@/assets/project-landing.jpg";

const projects = [
  {
    title: "Web-Based OS",
    slug: "webos",
    category: "Web Application",
    description: "Multi-window desktop environment in-browser with TSX modules, import maps, taskbar, and modular state management.",
    image: projectWebos,
    tags: ["React", "TypeScript"],
    link: "https://webbasedos.web.app",
    featured: true,
  },
  {
    title: "SIMS-ET",
    slug: "sims",
    category: "SaaS Product",
    description: "Student Information Management System with multi-role access (admin, teacher, student), real-time CRUD operations.",
    image: projectSims,
    tags: ["React", "Supabase"],
    link: "https://sims-et.web.app",
    featured: true,
  },
  {
    title: "DentalCare CMS",
    slug: "dentalcare",
    category: "Web Application",
    description: "Clinic Management System with functional workflows, appointment scheduling, and multi-user logic.",
    image: projectDentalcare,
    tags: ["React", "Supabase"],
    link: "https://dentalcare.web.app",
    featured: false,
  },
  {
    title: "Landing Pages",
    slug: "landing",
    category: "Design & Development",
    description: "High-converting landing pages for clients including zewijuna.com, lindatry, and professional portfolios.",
    image: projectLanding,
    tags: ["Framer", "WordPress"],
    link: "https://zewijuna.com",
    featured: false,
  },
];

export const Projects = () => {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#contact");
    }
  };

  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="section-label mb-4">Selected Work</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
              Selected <span className="gradient-text">Work.</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl">
              A curated collection of my best projects. Building digital experiences 
              that matter with a focus on UI/UX and modern frontend architecture.
            </p>
          </div>
          <a
            href="https://github.com/kirawebdesigner/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            VIEW ALL
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Project - Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2"
          >
            <Link
              to={`/project/${projects[0].slug}`}
              className="project-card block h-full"
            >
              <div className="relative overflow-hidden aspect-[16/10] rounded-t-xl">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="project-card-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary rounded-full text-xs font-medium text-primary-foreground">
                  FEATURED
                </div>
                
                {/* Tags on image */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-md text-xs">
                    {projects[0].category.toUpperCase()}
                  </span>
                  {projects[0].tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-md text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-display font-bold">{projects[0].title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">{projects[0].description}</p>
              </div>
            </Link>
          </motion.div>

          {/* Second Project - Smaller */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              to={`/project/${projects[1].slug}`}
              className="project-card block h-full"
            >
              <div className="relative overflow-hidden aspect-[4/3] rounded-t-xl">
                <img
                  src={projects[1].image}
                  alt={projects[1].title}
                  className="project-card-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute top-4 left-4 text-xs text-primary font-medium">
                  {projects[1].category.toUpperCase()}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-display font-bold mb-1">{projects[1].title}</h3>
                <p className="text-sm text-muted-foreground">{projects[1].tags.join(" · ")}</p>
              </div>
            </Link>
          </motion.div>

          {/* Third Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to={`/project/${projects[2].slug}`}
              className="project-card block h-full"
            >
              <div className="relative overflow-hidden aspect-[4/3] rounded-t-xl">
                <img
                  src={projects[2].image}
                  alt={projects[2].title}
                  className="project-card-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute top-4 left-4 text-xs text-primary font-medium">
                  {projects[2].category.toUpperCase()}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-display font-bold mb-1">{projects[2].title}</h3>
                <p className="text-sm text-muted-foreground">{projects[2].tags.join(" · ")}</p>
              </div>
            </Link>
          </motion.div>

          {/* Fourth Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to={`/project/${projects[3].slug}`}
              className="project-card block h-full"
            >
              <div className="relative overflow-hidden aspect-[4/3] rounded-t-xl">
                <img
                  src={projects[3].image}
                  alt={projects[3].title}
                  className="project-card-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute top-4 left-4 text-xs text-primary font-medium">
                  {projects[3].category.toUpperCase()}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-display font-bold mb-1">{projects[3].title}</h3>
                <p className="text-sm text-muted-foreground">{projects[3].tags.join(" · ")}</p>
              </div>
            </Link>
          </motion.div>

          {/* Your Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              type="button"
              onClick={scrollToContact}
              className="block h-full w-full border border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-secondary/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Go to contact section"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Plus className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Your Project Next?</h3>
              <p className="text-sm text-muted-foreground">Let's build something amazing together.</p>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
