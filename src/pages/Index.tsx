import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kirubel Daniel (Kira) | Full-Stack Developer & SaaS Founder in Ethiopia</title>
        <meta name="description" content="Award-winning full-stack developer based in Addis Ababa, Ethiopia. Specializing in React, TypeScript, Supabase web applications, SaaS products, and high-converting landing pages." />
        <link rel="canonical" href="https://kiraweb.pro.et/" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <section id="work" aria-label="Portfolio Projects">
            <Projects />
          </section>
          <section id="about" aria-label="About Kirubel Daniel">
            <About />
          </section>
          <section id="services" aria-label="Services Offered">
            <Services />
          </section>
          <section id="contact" aria-label="Contact Information">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
