import { motion } from "framer-motion";
import kiraPortrait from "@/assets/kira-portrait.jpg";
const skills = [{
  category: "Frontend",
  items: ["React", "TypeScript", "Framer", "Tailwind CSS"]
}, {
  category: "Backend",
  items: ["Supabase", "Node.js", "REST APIs"]
}, {
  category: "Tools",
  items: ["Cursor AI", "n8n", "WordPress", "Elementor"]
}, {
  category: "Design",
  items: ["UI/UX", "Framer Motion", "Responsive Design"]
}];
export const About = () => {
  return <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              {/* Main Image */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-border">
                <img alt="Kirubel Daniel - Full Stack Developer" className="w-full h-full object-cover" src="/lovable-uploads/544f920f-7fa2-4054-b66b-23a3bdcaa37b.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              
              {/* Floating Badge */}
              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5
            }} className="absolute -right-6 top-1/4 bg-card border border-border rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-display font-bold">G9</div>
                <div className="text-xs text-muted-foreground">Student</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <span className="section-label mb-4">About Me</span>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              Beyond Visuals.
              <br />
              <span className="text-muted-foreground">Built with Vision.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm <strong className="text-foreground">Kirubel Daniel</strong>, a Grade 9 student at 
                St. Raguel in Addis Ababa, operating as a professional Full-Stack Developer 
                and SaaS Founder.
              </p>
              <p>
                My approach is simple: <strong className="text-foreground">Systems over chaos</strong>. 
                I break problems into logical steps, identify patterns, and deliver practical, 
                deployable solutions that work.
              </p>
              <p>
                From web-based operating systems to school management platforms, I build 
                fully functional systems—not just visuals.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => <motion.div key={skillGroup.category} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }}>
                  <h4 className="text-sm font-semibold text-primary mb-2">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-1">
                    {skillGroup.items.map(skill => <li key={skill} className="text-sm text-muted-foreground">
                        {skill}
                      </li>)}
                  </ul>
                </motion.div>)}
            </div>

            {/* Location */}
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.6
          }} className="mt-8 pt-8 border-t border-border flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xl">
                🇪🇹
              </div>
              <div>
                <div className="text-sm font-medium">Based in</div>
                <div className="text-muted-foreground">Addis Ababa, Ethiopia</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};