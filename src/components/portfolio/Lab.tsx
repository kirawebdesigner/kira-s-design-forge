import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Beaker } from "lucide-react";
import { experiments, projects } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

const currentlyBuilding = [
  { name: "YourCloser", note: "Telegram commerce SaaS — multi-tenant." },
  { name: "SignBridge AI", note: "Live sign-language recognition." },
  { name: "Kira Web systems", note: "Hospitality & real estate client work." },
  { name: "Hermes Operator", note: "AI operator infrastructure sketch." },
];

export const Lab = () => {
  return (
    <section id="lab" className="relative py-32 md:py-40 border-t border-border">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-6">
            <div className="eyebrow mb-4 flex items-center gap-2">
              <Beaker className="w-3.5 h-3.5" /> Lab — experiments & currently building
            </div>
            <h2 className="display-hero text-5xl md:text-7xl">
              The work<br /><span className="display-italic text-muted-foreground">before the work.</span>
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 text-muted-foreground self-end">
            Not every project is client-facing. The lab is where I try the things that later
            become part of how I build.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          {/* experiments cards */}
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
            {experiments.slice(0, 3).map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              >
                <Link to={`/project/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary mb-3">
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <div className="eyebrow mb-1">{p.category}</div>
                      <h3 className="font-display text-xl">{p.title}</h3>
                    </div>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-ember transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* currently building */}
          <div className="md:col-span-4 bg-secondary/40 border border-border p-6 md:p-8">
            <div className="eyebrow mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
              Currently building
            </div>
            <ul className="space-y-5">
              {currentlyBuilding.map((c, i) => (
                <li key={c.name} className="flex items-baseline gap-3 pb-5 border-b border-border/60 last:border-0 last:pb-0">
                  <span className="font-mono text-xs text-muted-foreground shrink-0">0{i + 1}</span>
                  <div>
                    <div className="font-display text-lg">{c.name}</div>
                    <div className="text-sm text-muted-foreground">{c.note}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
