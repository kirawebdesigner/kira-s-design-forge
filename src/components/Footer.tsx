import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-display font-bold"
            whileHover={{ scale: 1.02 }}
          >
            KIRA<span className="text-primary">.</span>
          </motion.a>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} Kirubel Daniel. All rights reserved.
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-8 flex justify-center">
          <motion.a
            href="#"
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            Back to top
            <ArrowUpRight className="w-4 h-4 rotate-[-45deg] group-hover:rotate-0 transition-transform" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};
