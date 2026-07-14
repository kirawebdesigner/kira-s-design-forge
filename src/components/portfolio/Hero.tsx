import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import zewijunaHero from "@/assets/zewijuna-hero.png";
import projectSims from "@/assets/project-sims.jpg";
import projectDentalcare from "@/assets/project-dentalcare.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] pt-28 pb-16 overflow-hidden">
      <div className="container-editorial relative">
        {/* meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-6 border-b border-border/60"
        >
          <div>
            <div className="eyebrow mb-2">Index</div>
            <div className="font-mono text-sm">01 / 25</div>
          </div>
          <div>
            <div className="eyebrow mb-2">Discipline</div>
            <div className="text-sm">Software, product, and web design</div>
          </div>
          <div>
            <div className="eyebrow mb-2">Based in</div>
            <div className="text-sm">Addis Ababa, Ethiopia</div>
          </div>
          <div>
            <div className="eyebrow mb-2">Status</div>
            <div className="text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Taking new projects
            </div>
          </div>
        </motion.div>

        {/* headline */}
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.1 }}
              className="display-hero text-[15vw] leading-[0.9] md:text-[11vw] lg:text-[9.5vw]"
            >
              I turn <span className="display-italic text-ember">ambitious</span>
              <br /> ideas into <span className="display-italic">real</span>
              <br /> digital products.
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.35 }}
            className="lg:col-span-4 lg:pb-6"
          >
            <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
              Kirubel Daniel — a software developer and product builder in Addis Ababa. I design
              and ship websites, mobile apps, SaaS, and business systems for teams with real users.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-bone text-ink px-5 py-3 text-sm font-medium hover:bg-ember hover:text-ink transition-colors"
              >
                View selected work
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm hover:border-ember hover:text-ember transition-colors"
              >
                Start a project
              </a>
            </div>
          </motion.div>
        </div>

        {/* preview strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.5 }}
          className="mt-20 grid grid-cols-12 gap-4"
        >
          <div className="col-span-12 md:col-span-7 aspect-[16/10] relative overflow-hidden bg-secondary">
            <img src={zewijunaHero} alt="Zewijuna — Muslim dating app" className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 flex items-end justify-between bg-gradient-to-t from-ink/80 to-transparent">
              <div>
                <div className="eyebrow">Featured — Client</div>
                <div className="font-display text-xl mt-1">Zewijuna</div>
              </div>
              <span className="font-mono text-xs opacity-70">2025</span>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3 aspect-[3/4] md:aspect-auto relative overflow-hidden bg-secondary">
            <img src={projectSims} alt="SIMS-ET" className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink/80 to-transparent">
              <div className="eyebrow">Product</div>
              <div className="font-display text-sm mt-1">SIMS-ET</div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-2 aspect-[3/4] md:aspect-auto relative overflow-hidden bg-secondary">
            <img src={projectDentalcare} alt="DentalCare" className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink/80 to-transparent">
              <div className="eyebrow">Client</div>
              <div className="font-display text-sm mt-1">DentalCare</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex items-center gap-3 text-muted-foreground"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span className="eyebrow">Scroll — selected work</span>
        </motion.div>
      </div>
    </section>
  );
};
