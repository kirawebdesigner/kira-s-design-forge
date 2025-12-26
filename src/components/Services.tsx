import { motion } from "framer-motion";
import { Code, Layout, Database, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description: "High-converting, responsive landing pages built with Framer or WordPress. Fast delivery, pixel-perfect execution.",
    features: ["UI/UX Design", "Responsive Design", "Performance Optimized", "SEO Ready"],
  },
  {
    icon: Code,
    title: "Web Applications",
    description: "Full-stack web apps with React and Supabase. Multi-user systems, dashboards, and complex business logic.",
    features: ["React + TypeScript", "Database Design", "Authentication", "Real-time Features"],
  },
  {
    icon: Database,
    title: "SaaS Development",
    description: "End-to-end SaaS product development. From architecture to deployment, built for scale.",
    features: ["Multi-tenant Architecture", "Payment Integration", "Analytics", "Admin Dashboards"],
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    description: "AI agent development and workflow automation with n8n. Streamline operations and reduce manual work.",
    features: ["AI Agents", "n8n Workflows", "API Integrations", "Process Automation"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center mb-4">Services</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4">
            What I <span className="gradient-text">build.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Strategy, speed, and skill. I deliver exceptional digital products that 
            combine beautiful design with robust functionality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Arrow */}
              <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
