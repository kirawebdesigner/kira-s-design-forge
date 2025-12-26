import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/kirawebdesigner/", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kirubel-daniel/", Icon: Linkedin },
];

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
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-secondary/80 transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center">
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
