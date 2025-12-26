import { motion } from "framer-motion";

const techStack = [
  "React", "TypeScript", "Supabase", "Framer", "WordPress", 
  "Tailwind CSS", "n8n", "Node.js", "Cursor AI", "Elementor"
];

export const Marquee = () => {
  return (
    <div className="py-12 border-y border-border overflow-hidden bg-secondary/30">
      <div className="flex">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex gap-12 items-center whitespace-nowrap"
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="text-2xl md:text-3xl font-display font-bold text-muted-foreground/30 hover:text-foreground transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
