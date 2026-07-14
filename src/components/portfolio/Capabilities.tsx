import { motion } from "framer-motion";
import { Globe, Boxes, Workflow, BrainCircuit } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const capabilities = [
  {
    n: "01",
    icon: Globe,
    title: "Digital experiences",
    body: "Premium, responsive websites built around trust, clarity, and conversion. From editorial marketing sites to hospitality and real estate presence.",
    tags: ["Websites", "Landing pages", "SEO", "Motion"],
  },
  {
    n: "02",
    icon: Boxes,
    title: "Products & applications",
    body: "Web and mobile applications with real authentication, real data, and real users. Multi-role dashboards, mobile apps, real-time chat, production deployments.",
    tags: ["React", "Expo", "Supabase", "Realtime"],
  },
  {
    n: "03",
    icon: Workflow,
    title: "Business systems",
    body: "Ordering systems, management platforms, admin dashboards, internal tools, Telegram commerce. The invisible workflows a business actually runs on.",
    tags: ["Postgres", "RLS", "Telegram", "Automation"],
  },
  {
    n: "04",
    icon: BrainCircuit,
    title: "AI & experimentation",
    body: "AI-powered products, model integrations, agent infrastructure, and creative technical experiments. Structured output over free-form magic.",
    tags: ["LLM APIs", "Vision", "Agents", "Pipelines"],
  },
];

export const Capabilities = () => {
  return (
    <section id="capabilities" className="relative py-32 md:py-40 bg-secondary/30 border-y border-border">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <div className="eyebrow mb-4">What I build</div>
            <h2 className="display-hero text-5xl md:text-7xl">
              Four ways<br /> I ship.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-muted-foreground text-lg leading-relaxed self-end">
            I do not sell a stack. I sell outcomes — a working product, a real system, a website
            that earns trust. The tools follow the problem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="group bg-background p-8 md:p-12 hover:bg-secondary/50 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-xs text-muted-foreground">{c.n}</span>
                <c.icon className="w-5 h-5 text-ember" strokeWidth={1.5} />
              </div>
              <h3 className="display-hero text-3xl md:text-4xl mb-4">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">{c.body}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
