const services = [
  "Websites", "Web apps", "Mobile apps", "SaaS products", "Business systems",
  "AI integrations", "Automation", "Telegram bots", "Real estate presence", "Hospitality"
];

export const CapabilityMarquee = () => (
  <div className="relative py-8 border-y border-border overflow-hidden bg-background">
    <div className="marquee-track">
      {[...services, ...services, ...services].map((s, i) => (
        <div key={i} className="flex items-center gap-16 shrink-0">
          <span className="font-display text-2xl md:text-4xl">{s}</span>
          <span className="text-ember">✦</span>
        </div>
      ))}
    </div>
  </div>
);
