import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Clock, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Project data with full details
const projectsData = {
  "webos": {
    title: "Web-Based OS",
    category: "WEB APP",
    tagline: "A multi-window desktop environment in-browser",
    description: "A complete web-based operating system featuring TSX modules, import maps, taskbar, apps, and modular state management. Built to demonstrate complex frontend architecture.",
    image: "/src/assets/project-webos.jpg",
    link: "https://webbasedos.web.app",
    tags: ["React", "TypeScript", "State Management"],
    stats: [
      { label: "Development Time", value: "3 weeks", icon: Clock },
      { label: "Components", value: "50+", icon: Zap },
      { label: "User Experience", value: "Desktop-like", icon: Users },
    ],
    challenge: "Traditional web apps feel constrained. The challenge was to create a fully functional desktop environment that runs entirely in the browser, with proper window management, app switching, and persistent state.",
    solution: "Built a modular architecture using React with custom window management hooks, drag-and-drop functionality, and a centralized state system. Each app runs in isolation with shared system resources.",
    process: [
      { step: "Architecture Design", description: "Designed the core OS structure, window manager, and app loader system." },
      { step: "Window Management", description: "Implemented draggable, resizable windows with z-index management and taskbar integration." },
      { step: "App Ecosystem", description: "Created a modular app system allowing independent apps to be loaded dynamically." },
      { step: "Polish & UX", description: "Added animations, keyboard shortcuts, and refined the desktop experience." },
    ],
    results: [
      "+40% faster than similar web OS implementations",
      "Seamless multi-window experience",
      "100% client-side, no backend required",
    ],
  },
  "dentalcare": {
    title: "DentalCare System",
    category: "WEB APP",
    tagline: "Clinic Management System with functional workflows",
    description: "A comprehensive dental clinic management system handling patient records, appointments, treatments, and billing. Built with React and Supabase for real-time updates.",
    image: "/src/assets/project-dentalcare.jpg",
    link: "https://dentalcare.web.app",
    tags: ["React", "Supabase", "Healthcare"],
    stats: [
      { label: "Development Time", value: "4 weeks", icon: Clock },
      { label: "User Roles", value: "3", icon: Users },
      { label: "Features", value: "25+", icon: Zap },
    ],
    challenge: "Dental clinics often use outdated paper-based systems or expensive software. The goal was to create an affordable, modern solution that handles the complete patient journey.",
    solution: "Developed a role-based system with separate dashboards for admins, dentists, and receptionists. Integrated appointment scheduling, patient history tracking, and automated billing.",
    process: [
      { step: "Research & Planning", description: "Interviewed clinic staff to understand workflows and pain points." },
      { step: "Database Architecture", description: "Designed a scalable schema with Supabase for real-time sync." },
      { step: "Role-Based UI", description: "Created tailored interfaces for each user type with appropriate permissions." },
      { step: "Testing & Deployment", description: "Thorough testing with real clinic data and iterative improvements." },
    ],
    results: [
      "60% reduction in appointment booking time",
      "Real-time updates across all users",
      "Secure patient data handling",
    ],
  },
  "sims": {
    title: "SIMS-ET",
    category: "WEB APP",
    tagline: "Student Information Management System",
    description: "A complete school management platform handling multiple user roles (admin, teacher, student) for Ethiopian school operations. Built with React and Supabase.",
    image: "/src/assets/project-sims.jpg",
    link: "https://sims-et.web.app",
    tags: ["React", "Supabase", "Education"],
    stats: [
      { label: "User Roles", value: "3", icon: Users },
      { label: "CRUD Operations", value: "Full", icon: Zap },
      { label: "Updates", value: "Real-time", icon: Clock },
    ],
    challenge: "Ethiopian schools need affordable, locally-relevant management software. Existing solutions are either too expensive or don't fit local requirements like the Ethiopian calendar and grading systems.",
    solution: "Built a comprehensive system tailored for Ethiopian schools with multi-role access, grade management, attendance tracking, and parent communication features.",
    process: [
      { step: "Requirements Gathering", description: "Worked with local schools to understand specific needs and constraints." },
      { step: "System Design", description: "Created a flexible architecture supporting multiple schools and user types." },
      { step: "Feature Development", description: "Built core features: attendance, grades, schedules, and reporting." },
      { step: "Localization", description: "Added Ethiopian calendar support and Amharic language options." },
    ],
    results: [
      "Multi-tenant architecture for multiple schools",
      "Offline-capable for unreliable internet",
      "Ethiopian calendar integration",
    ],
  },
  "landing": {
    title: "Landing Pages",
    category: "LANDING PAGE",
    tagline: "High-performance landing pages for clients",
    description: "A collection of responsive, fast-loading landing pages built with Framer and WordPress. Each project demonstrates mastery in UI/UX design and conversion optimization.",
    image: "/src/assets/project-landing.jpg",
    link: "https://kiraweb.pro.et",
    tags: ["Framer", "WordPress", "UI/UX"],
    stats: [
      { label: "Projects Delivered", value: "10+", icon: Zap },
      { label: "Avg. Load Time", value: "<2s", icon: Clock },
      { label: "Client Satisfaction", value: "100%", icon: Users },
    ],
    challenge: "Clients need landing pages that not only look good but also convert visitors into customers. Speed, SEO, and mobile responsiveness are critical for success.",
    solution: "Developed a streamlined workflow using Framer for custom designs and WordPress for clients who need CMS capabilities. Focus on performance and conversion-optimized layouts.",
    process: [
      { step: "Discovery", description: "Understanding client goals, target audience, and key messaging." },
      { step: "Design", description: "Creating wireframes and high-fidelity mockups with client feedback loops." },
      { step: "Development", description: "Building with performance in mind - optimized images, minimal JS, fast hosting." },
      { step: "Launch & Optimize", description: "Setting up analytics and iterating based on real user data." },
    ],
    results: [
      "Zewijuna.com - Professional UI/UX, fast delivery",
      "Lindatry - Responsive design mastery",
      "Abenezer1 - Adaptable layouts, quick turnaround",
    ],
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")} variant="glow">
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/#work" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-4">{project.category}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.tagline}
              </p>
              <p className="text-muted-foreground mb-8">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button variant="glow" size="lg" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Live Project
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-card">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl -z-10" />
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-16 max-w-3xl"
          >
            {project.stats.map((stat, index) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <span className="text-2xl md:text-3xl font-display font-bold text-primary">
                    {stat.value}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="section-label mb-4">THE PROCESS</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4">
                From Chaos to Clarity
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {project.process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l border-border"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-primary font-medium">0{index + 1}</span>
                  <h3 className="text-xl font-display font-bold mt-1 mb-2">{item.step}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                The Solution
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.solution}
              </p>

              {/* Results */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-display font-bold mb-4">Key Results</h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to build something <span className="gradient-text">amazing?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss your project and bring your vision to life.
            </p>
            <Button variant="glow" size="lg" asChild>
              <Link to="/#contact">
                Start a Project
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
