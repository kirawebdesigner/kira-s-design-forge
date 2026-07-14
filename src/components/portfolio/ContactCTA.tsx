import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2, Mail, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WEB3FORMS_ACCESS_KEY = "58d974db-6556-470c-89c1-bc4e1b8c7d33";

export const ContactCTA = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    need: "Website",
    budget: "Not sure yet",
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Missing fields", description: "Name, email, and message are required.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: form.name,
          email: form.email,
          subject: `[Portfolio] ${form.need} — ${form.name}${form.business ? " · " + form.business : ""}`,
          message: `Business: ${form.business || "-"}\nNeed: ${form.need}\nBudget: ${form.budget}\n\n${form.message}`,
        }),
      });
      const j = await r.json();
      if (j.success) {
        toast({ title: "Message sent", description: "I'll reply within 24 hours." });
        setForm({ name: "", email: "", business: "", need: "Website", budget: "Not sure yet", message: "" });
      } else throw new Error(j.message);
    } catch {
      toast({ title: "Something broke", description: "Try again or email kirubeldaniel01@gmail.com", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 md:py-40 border-t border-border">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="eyebrow mb-6">Contact</div>
            <h2 className="display-hero text-5xl md:text-7xl leading-[0.95] mb-8">
              Have something<br /><span className="display-italic text-ember">worth building?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mb-10">
              Whether it is a website that finally earns trust, a product that needs to become real,
              or a system that has to work — tell me what you are trying to make.
            </p>

            <div className="space-y-3">
              <a href="mailto:kirubeldaniel01@gmail.com" className="flex items-center gap-3 text-sm hover:text-ember transition-colors">
                <Mail className="w-4 h-4" /> kirubeldaniel01@gmail.com
              </a>
              <a href="https://github.com/kirawebdesigner" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-ember transition-colors">
                <Github className="w-4 h-4" /> github.com/kirawebdesigner
              </a>
              <a href="https://www.linkedin.com/in/kirubel-daniel/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-ember transition-colors">
                <Linkedin className="w-4 h-4" /> linkedin.com/in/kirubel-daniel
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            onSubmit={submit}
            className="md:col-span-7 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" name="name" value={form.name} onChange={onChange} required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required />
            </div>
            <Field label="Business or project (optional)" name="business" value={form.business} onChange={onChange} />
            <div className="grid sm:grid-cols-2 gap-5">
              <Select label="What do you need?" name="need" value={form.need} onChange={onChange}
                options={["Website", "Web application", "Mobile app", "SaaS / system", "AI / automation", "Not sure yet"]} />
              <Select label="Budget range" name="budget" value={form.budget} onChange={onChange}
                options={["Not sure yet", "< $500", "$500 – $2k", "$2k – $5k", "$5k – $15k", "$15k+"]} />
            </div>
            <div>
              <label className="eyebrow block mb-2">Tell me about it</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={5}
                placeholder="What are you trying to make, and what have you tried so far?"
                className="w-full bg-transparent border border-border focus:border-ember outline-none px-4 py-3 text-sm resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-2 bg-bone text-ink px-6 py-4 font-medium hover:bg-ember transition-colors disabled:opacity-60"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
              {loading ? "Sending…" : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, ...props }: any) => (
  <div>
    <label className="eyebrow block mb-2">{label}</label>
    <input
      {...props}
      className="w-full bg-transparent border border-border focus:border-ember outline-none px-4 py-3 text-sm transition-colors"
    />
  </div>
);

const Select = ({ label, options, ...props }: any) => (
  <div>
    <label className="eyebrow block mb-2">{label}</label>
    <select
      {...props}
      className="w-full bg-transparent border border-border focus:border-ember outline-none px-4 py-3 text-sm transition-colors appearance-none"
    >
      {options.map((o: string) => (
        <option key={o} value={o} className="bg-background">{o}</option>
      ))}
    </select>
  </div>
);
