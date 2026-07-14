import { motion } from "framer-motion";
import { ArrowUpRight, Building2, KeyRound, MessagesSquare, MapPin } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const offerings = [
  { icon: Building2, label: "Hotels & guest houses" },
  { icon: KeyRound, label: "Furnished apartments" },
  { icon: MapPin, label: "Real estate & property" },
  { icon: MessagesSquare, label: "WhatsApp / Telegram flow" },
];

export const KiraWeb = () => {
  return (
    <section id="kiraweb" className="relative py-32 md:py-40 bg-bone text-ink">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-6">
              Kira Web — Commercial offer
            </div>
            <h2 className="display-hero text-5xl md:text-7xl leading-[0.95] text-ink">
              A better <span className="display-italic">online presence</span> for the business you already run.
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-8">
            <p className="text-lg text-ink/70 leading-relaxed">
              Through Kira Web, I help hospitality and real estate businesses in Ethiopia improve
              online trust, room and property presentation, and direct inquiry flow — websites that
              actually generate WhatsApp and Telegram conversations, not just look nice.
            </p>

            <div className="grid grid-cols-2 gap-px bg-ink/10">
              {offerings.map((o) => (
                <div key={o.label} className="bg-bone p-5 flex items-center gap-3">
                  <o.icon className="w-4 h-4 text-ember shrink-0" strokeWidth={1.75} />
                  <span className="text-sm">{o.label}</span>
                </div>
              ))}
            </div>

            <ul className="space-y-3 text-ink/80">
              <li className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-ember">→</span>
                Room and property presentation that earns clicks and inquiries.
              </li>
              <li className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-ember">→</span>
                Direct WhatsApp / Telegram contact flows with real qualification.
              </li>
              <li className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-ember">→</span>
                Google Maps visibility and lead capture that respects the guest's time.
              </li>
            </ul>

            <motion.a
              href="#contact"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3, ease }}
              className="group inline-flex items-center gap-3 bg-ink text-bone px-6 py-4 text-base font-medium hover:bg-ember hover:text-ink transition-colors"
            >
              Have a business that deserves a better online presence? Let's talk.
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
