import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { EditorialNav } from "@/components/portfolio/EditorialNav";
import { EditorialFooter } from "@/components/portfolio/EditorialFooter";

const ease = [0.22, 1, 0.36, 1] as const;

const typeLabel: Record<string, string> = {
  client: "Client work",
  product: "Product",
  experiment: "Experiment",
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/" replace />;

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{project.title} — {project.tagline} | Kirubel Daniel</title>
        <meta name="description" content={project.summary} />
        <link rel="canonical" href={`https://kiraweb.pro.et/project/${project.slug}`} />
        <meta property="og:title" content={`${project.title} — ${project.tagline}`} />
        <meta property="og:description" content={project.summary} />
        <meta property="og:url" content={`https://kiraweb.pro.et/project/${project.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <EditorialNav />

        <article className="pt-32 pb-24">
          <div className="container-editorial">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-ember mb-12">
              <ArrowLeft className="w-4 h-4" /> All work
            </Link>

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="grid md:grid-cols-12 gap-8 items-end mb-16"
            >
              <div className="md:col-span-8">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="eyebrow text-ember">{typeLabel[project.type]}</span>
                  <span className="eyebrow">·</span>
                  <span className="eyebrow">{project.category}</span>
                  <span className="eyebrow">·</span>
                  <span className="eyebrow">{project.year}</span>
                </div>
                <h1 className="display-hero text-6xl md:text-8xl leading-[0.9]">{project.title}</h1>
                <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl leading-snug">
                  {project.tagline}
                </p>
              </div>

              <div className="md:col-span-4 space-y-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-bone text-ink px-5 py-3 text-sm font-medium hover:bg-ember transition-colors w-full justify-between"
                  >
                    Visit live project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <dl className="border-t border-border pt-6 space-y-3 text-sm">
                  {project.client && <Meta label="Client" value={project.client} />}
                  <Meta label="Role" value={project.role} />
                  <Meta label="Year" value={project.year} />
                  <Meta label="Status" value={project.status} />
                </dl>
              </div>
            </motion.header>

            {/* Cover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease, delay: 0.1 }}
              className="relative aspect-[21/10] overflow-hidden bg-secondary mb-24"
            >
              <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
            </motion.div>

            {/* Case study body */}
            <div className="grid md:grid-cols-12 gap-12 mb-24">
              <div className="md:col-span-3">
                <div className="md:sticky md:top-28">
                  <div className="eyebrow mb-4">Case study</div>
                  <ol className="space-y-2 font-mono text-xs text-muted-foreground">
                    <li>01 — Summary</li>
                    <li>02 — The problem</li>
                    <li>03 — The build</li>
                    <li>04 — Decisions</li>
                    <li>05 — Outcome</li>
                    <li>06 — What I learned</li>
                  </ol>
                </div>
              </div>

              <div className="md:col-span-9 space-y-16">
                <Section n="01" title="Summary" body={project.summary} />
                <Section n="02" title="The problem" body={project.problem} />
                <Section n="03" title="The build" body={project.build} />

                <div>
                  <SectionHead n="04" title="Decisions" />
                  <ul className="space-y-4">
                    {project.decisions.map((d, i) => (
                      <li key={i} className="flex items-baseline gap-4 text-lg leading-relaxed">
                        <span className="font-mono text-xs text-ember shrink-0 mt-1">04.{i + 1}</span>
                        <span className="text-muted-foreground">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Section n="05" title="Outcome" body={project.outcome} />
                <Section n="06" title="What I learned" body={project.learned} />

                <div>
                  <SectionHead n="07" title="Technology" />
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span key={t} className="font-mono text-xs uppercase tracking-wider text-muted-foreground border border-border px-3 py-1.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            {project.gallery.length > 1 && (
              <div className="mb-24">
                <div className="eyebrow mb-6">Selected screens</div>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.8, ease }}
                      className="relative aspect-[16/10] overflow-hidden bg-secondary"
                    >
                      <img src={img} alt={`${project.title} — ${i + 1}`} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Next projects */}
            <div className="border-t border-border pt-16">
              <div className="eyebrow mb-8">Keep exploring</div>
              <div className="grid md:grid-cols-3 gap-6">
                {others.map((p) => (
                  <Link key={p.slug} to={`/project/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-secondary mb-4">
                      <img src={p.cover} alt={p.title} className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]" />
                    </div>
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="eyebrow mb-1">{typeLabel[p.type]}</div>
                        <div className="font-display text-xl">{p.title}</div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-ember transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>

        <EditorialFooter />
      </div>
    </>
  );
};

const Meta = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-baseline justify-between gap-4">
    <dt className="eyebrow shrink-0">{label}</dt>
    <dd className="text-right text-sm max-w-[70%]">{value}</dd>
  </div>
);

const SectionHead = ({ n, title }: { n: string; title: string }) => (
  <div className="flex items-baseline gap-4 mb-5">
    <span className="font-mono text-xs text-ember">{n}</span>
    <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
  </div>
);

const Section = ({ n, title, body }: { n: string; title: string; body: string }) => (
  <div>
    <SectionHead n={n} title={title} />
    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{body}</p>
  </div>
);

export default ProjectDetail;
