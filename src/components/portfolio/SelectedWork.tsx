import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

const featured = ["zewijuna", "yourcloser", "pommy", "sims", "dentalcare", "signbridge"]
  .map((s) => projects.find((p) => p.slug === s)!)
  .filter(Boolean);

const typeLabel: Record<string, string> = {
  client: "Client work",
  product: "Product",
  experiment: "Experiment",
};

export const SelectedWork = () => {
  return (
    <section id="work" className="relative py-32 md:py-40">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow mb-4">Selected Work — 2024 / 2025</div>
            <h2 className="display-hero text-5xl md:text-7xl">
              Real projects.<br />
              <span className="display-italic text-muted-foreground">Real users.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A curated selection of client products, systems, and experiments. Each case study
            includes the problem, the build, and what I actually learned.
          </p>
        </div>

        {/* Featured huge card */}
        <ProjectHero project={featured[0]} />

        {/* Asymmetric grid */}
        <div className="mt-6 grid grid-cols-12 gap-4 md:gap-6">
          <ProjectCard project={featured[1]} className="col-span-12 md:col-span-7 aspect-[16/10]" size="lg" />
          <ProjectCard project={featured[2]} className="col-span-12 md:col-span-5 aspect-[4/3]" />
          <ProjectCard project={featured[3]} className="col-span-6 md:col-span-4 aspect-[3/4]" />
          <ProjectCard project={featured[4]} className="col-span-6 md:col-span-4 aspect-[3/4]" />
          <ProjectCard project={featured[5]} className="col-span-12 md:col-span-4 aspect-[3/4]" />
        </div>
      </div>
    </section>
  );
};

const ProjectHero = ({ project }: { project: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.9, ease }}
  >
    <Link to={`/project/${project.slug}`} className="group block">
      <div className="grid grid-cols-12 gap-4 md:gap-6 mb-4 items-end">
        <div className="col-span-12 md:col-span-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="eyebrow text-ember">01 — {typeLabel[project.type]}</span>
            <span className="eyebrow">{project.year}</span>
          </div>
          <h3 className="display-hero text-6xl md:text-8xl leading-[0.9]">
            {project.title}
          </h3>
        </div>
        <div className="col-span-12 md:col-span-4 md:pb-4">
          <p className="text-muted-foreground">{project.tagline}</p>
        </div>
      </div>
      <div className="relative aspect-[21/10] overflow-hidden bg-secondary">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute right-6 bottom-6 flex items-center gap-2 bg-bone text-ink px-4 py-2 text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          View case study <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  </motion.div>
);

const ProjectCard = ({
  project,
  className = "",
  size = "md",
}: {
  project: any;
  className?: string;
  size?: "md" | "lg";
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease }}
    className={className}
  >
    <Link to={`/project/${project.slug}`} className="group block h-full">
      <div className="relative h-full overflow-hidden bg-secondary">
        <img
          src={project.cover}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 p-5 flex items-center justify-between">
          <span className="eyebrow text-bone/80">{typeLabel[project.type]}</span>
          <span className="eyebrow text-bone/60">{project.year}</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h4 className={`font-display ${size === "lg" ? "text-3xl md:text-4xl" : "text-2xl"} leading-tight`}>
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{project.tagline}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ember" />
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);
