import { motion } from "framer-motion";
import kiraPortrait from "@/assets/kira-portrait.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const principles = [
  "Build before debating.",
  "Ship before polishing.",
  "Systems over hacks.",
  "Reliability is the product.",
  "Documentation over memory.",
  "Real users, not demos.",
];

export const Story = () => {
  return (
    <section id="story" className="relative py-32 md:py-40">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
            className="md:col-span-5"
          >
            <div className="eyebrow mb-6">The story</div>
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-8">
              <img src={kiraPortrait} alt="Kirubel Daniel" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink to-transparent">
                <div className="font-display text-2xl">Kirubel Daniel</div>
                <div className="eyebrow mt-1">Addis Ababa · Building since 2022</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="md:col-span-7 md:pl-8"
          >
            <h2 className="display-hero text-4xl md:text-6xl mb-8 leading-[1.02]">
              I learned software the way I still prefer to learn most things —{" "}
              <span className="display-italic text-muted-foreground">by building something slightly more difficult than I was ready for.</span>
            </h2>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
              <p>
                I started with personal experiments — small websites, small apps, small ideas. Then
                came real client work, and with it the parts of software you cannot fake: backend
                architecture, authentication, deployment, and being responsible for something a real
                person is using.
              </p>
              <p>
                Zewijuna was the turning point. My first major real client product — a mobile app
                with authentication, Row Level Security, real-time chat, and production builds. I
                underestimated it. Then I learned it. Now I build with that lesson in mind: real
                products are different from demos.
              </p>
              <p>
                I run <span className="text-foreground">Kira Web</span> alongside my product work,
                helping hospitality and real estate businesses in Ethiopia earn trust and inquiries
                online. Same discipline, different surface.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-3">
              {principles.map((p, i) => (
                <div key={p} className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-ember">0{i + 1}</span>
                  <span className="text-sm">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
