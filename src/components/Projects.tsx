import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

import projectDentalcare from "@/assets/project-dentalcare.jpg";
import projectWebos from "@/assets/project-webos.jpg";
import projectSims from "@/assets/project-sims.jpg";
import projectLanding from "@/assets/project-landing.jpg";

const projects = [
  {
    title: "Web-Based OS",
    category: "Web Application",
    description: "Multi-window desktop environment in-browser with TSX modules, import maps, taskbar, and modular state management.",
    image: projectWebos,
    tags: ["React", "TypeScript", "State Management"],
    link: "https://webbasedos.web.app",
    featured: true,
  },
  {
    title: "SIMS-ET",
    category: "SaaS Product",
    description: "Student Information Management System with multi-role access (admin, teacher, student), real-time CRUD operations.",
    image: projectSims,
    tags: ["React", "Supabase", "Multi-tenant"],
    link: "https://sims-et.web.app",
    featured: true,
  },
  {
    title: "DentalCare CMS",
    category: "Web Application",
    description: "Clinic Management System with functional workflows, appointment scheduling, and multi-user logic.",
    image: projectDentalcare,
    tags: ["React", "Supabase", "Dashboard"],
    link: "https://dentalcare.web.app",
    featured: false,
  },
  {
    title: "Landing Pages",
    category: "Design & Development",
    description: "High-converting landing pages for clients including zewijuna.com, lindatry, and professional portfolios.",
    image: projectLanding,
    tags: ["Framer", "WordPress", "Elementor"],
    link: "https://zewijuna.com",
    featured: false,
  },
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-4">Selected Work</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
            Projects that <span className="gradient-text">perform.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl">
            Not just visuals. Functional systems built with modern architecture 
            and real-world scalability in mind.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`project-card ${project.featured ? 'md:col-span-1' : ''}`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute inset-0 bg-primary/10 flex items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-primary font-medium">
                    {project.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-display font-bold mb-2">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Github className="w-5 h-5" />
            <span className="link-underline">View more on GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
