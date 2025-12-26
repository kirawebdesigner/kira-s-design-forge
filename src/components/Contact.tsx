import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Label */}
          <span className="section-label justify-center mb-4">Get in Touch</span>

          {/* Main CTA */}
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mt-6 mb-8">
            Let's build something
            <br />
            <span className="gradient-text">exceptional</span> together.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Have a project in mind? I'm currently available for freelance work 
            and open to discussing new opportunities.
          </p>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Button variant="glow" size="xl" asChild>
              <a href="mailto:hello@kiraweb.pro.et" className="group">
                <Mail className="w-5 h-5" />
                hello@kiraweb.pro.et
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-4 max-w-xs mx-auto mb-10">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">or connect on</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
