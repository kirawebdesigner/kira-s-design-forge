import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export const EditorialFooter = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5">
            <div className="font-display text-3xl md:text-4xl leading-tight">
              Kirubel Daniel<br />
              <span className="text-muted-foreground">/ Kira Web</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Software developer and product builder. Websites, apps, systems, and AI — for teams
              with real users. Based in Addis Ababa, working with clients everywhere.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#work" className="hover:text-ember">Selected work</a></li>
              <li><a href="#capabilities" className="hover:text-ember">Capabilities</a></li>
              <li><a href="#story" className="hover:text-ember">Story</a></li>
              <li><a href="#kiraweb" className="hover:text-ember">Kira Web offer</a></li>
              <li><a href="#lab" className="hover:text-ember">Lab</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow mb-4">Get in touch</div>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:kirubeldaniel01@gmail.com" className="flex items-center gap-2 hover:text-ember"><Mail className="w-3.5 h-3.5" /> kirubeldaniel01@gmail.com</a></li>
              <li><a href="https://github.com/kirawebdesigner" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ember"><Github className="w-3.5 h-3.5" /> github.com/kirawebdesigner</a></li>
              <li><a href="https://www.linkedin.com/in/kirubel-daniel/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ember"><Linkedin className="w-3.5 h-3.5" /> linkedin.com/in/kirubel-daniel</a></li>
            </ul>
          </div>
        </div>

        <div className="rule mb-6" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground font-mono">
          <div>© {new Date().getFullYear()} Kirubel Daniel — All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </div>
        </div>
      </div>
    </footer>
  );
};
