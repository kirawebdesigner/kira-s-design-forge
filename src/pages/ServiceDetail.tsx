import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Layout, Database, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesData = {
  "landing-pages": {
    icon: Layout,
    title: "Landing Pages",
    tagline: "High-converting pages that drive results",
    description: "I create stunning, responsive landing pages that capture attention and convert visitors into customers. Built with modern frameworks like Framer or WordPress, optimized for speed and SEO.",
    features: ["UI/UX Design", "Responsive Design", "Performance Optimized", "SEO Ready"],
    details: [
      "Custom designs tailored to your brand identity",
      "Mobile-first responsive layouts",
      "Optimized for Core Web Vitals",
      "Built-in SEO best practices",
      "Fast loading times under 2 seconds",
      "A/B testing ready structure"
    ],
    process: [
      { step: "Discovery", desc: "Understanding your goals and target audience" },
      { step: "Design", desc: "Creating wireframes and visual mockups" },
      { step: "Development", desc: "Building with clean, maintainable code" },
      { step: "Launch", desc: "Testing, optimization, and deployment" }
    ],
    cta: "Get a Landing Page"
  },
  "web-applications": {
    icon: Code,
    title: "Web Applications",
    tagline: "Full-stack solutions for complex problems",
    description: "From simple dashboards to complex multi-user systems, I build web applications that scale. Using React, TypeScript, and Supabase for robust, real-time functionality.",
    features: ["React + TypeScript", "Database Design", "Authentication", "Real-time Features"],
    details: [
      "Modern React architecture with TypeScript",
      "Secure authentication and authorization",
      "Real-time data synchronization",
      "RESTful API design",
      "Database modeling and optimization",
      "Role-based access control"
    ],
    process: [
      { step: "Planning", desc: "Defining features and technical requirements" },
      { step: "Architecture", desc: "Designing scalable system structure" },
      { step: "Development", desc: "Iterative building with regular demos" },
      { step: "Deployment", desc: "CI/CD setup and production launch" }
    ],
    cta: "Build Your App"
  },
  "saas-development": {
    icon: Database,
    title: "SaaS Development",
    tagline: "Products built to scale",
    description: "End-to-end SaaS development from concept to launch. I handle architecture, multi-tenancy, billing integration, and everything needed to run a successful SaaS business.",
    features: ["Multi-tenant Architecture", "Payment Integration", "Analytics", "Admin Dashboards"],
    details: [
      "Multi-tenant database architecture",
      "Stripe/payment gateway integration",
      "Usage-based billing systems",
      "Admin and user dashboards",
      "Analytics and reporting",
      "Subscription management"
    ],
    process: [
      { step: "Strategy", desc: "Product-market fit and feature prioritization" },
      { step: "MVP", desc: "Building the minimum viable product" },
      { step: "Iteration", desc: "User feedback and feature expansion" },
      { step: "Scale", desc: "Performance optimization and growth" }
    ],
    cta: "Start Your SaaS"
  },
  "ai-automation": {
    icon: Sparkles,
    title: "AI & Automation",
    tagline: "Intelligent workflows that save time",
    description: "Leverage AI agents and workflow automation to streamline your operations. I build custom solutions with n8n, OpenAI, and other cutting-edge tools.",
    features: ["AI Agents", "n8n Workflows", "API Integrations", "Process Automation"],
    details: [
      "Custom AI agent development",
      "Workflow automation with n8n",
      "Third-party API integrations",
      "Data processing pipelines",
      "Chatbots and virtual assistants",
      "Automated reporting systems"
    ],
    process: [
      { step: "Audit", desc: "Identifying automation opportunities" },
      { step: "Design", desc: "Mapping workflows and integrations" },
      { step: "Build", desc: "Implementing and testing automations" },
      { step: "Monitor", desc: "Tracking performance and optimization" }
    ],
    cta: "Automate Now"
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Service Not Found</h1>
          <Link to="/#services">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const otherServices = Object.entries(servicesData)
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <Link 
            to="/#services" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              {service.tagline}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {service.features.map((feature) => (
                <span 
                  key={feature}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              What's Included
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {service.details.map((detail, index) => (
                <motion.div
                  key={detail}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{detail}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              My Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {service.process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl font-display font-bold text-primary/20 mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                  
                  {index < service.process.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-3 w-6 h-6 text-muted-foreground/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your project and see how I can help bring your vision to life.
            </p>
            <Link to="/#contact">
              <Button size="lg" className="gap-2">
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-display font-bold mb-8">
            Other Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map(([key, svc]) => {
              const SvcIcon = svc.icon;
              return (
                <Link
                  key={key}
                  to={`/service/${key}`}
                  className="group p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all"
                >
                  <SvcIcon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {svc.tagline}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
