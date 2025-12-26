import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl md:text-3xl font-display font-bold tracking-tight"
          whileHover={{ scale: 1.02 }}
        >
          KIRA<span className="text-primary">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link text-sm font-medium tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA + Status */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available
          </div>
          <Button variant="hero" size="default" asChild>
            <a href="#contact">
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border"
        >
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium py-2"
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" className="mt-4" asChild>
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
