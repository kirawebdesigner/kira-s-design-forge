import { Helmet } from "react-helmet-async";
import { EditorialNav } from "@/components/portfolio/EditorialNav";
import { Hero } from "@/components/portfolio/Hero";
import { CapabilityMarquee } from "@/components/portfolio/CapabilityMarquee";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { Story } from "@/components/portfolio/Story";
import { KiraWeb } from "@/components/portfolio/KiraWeb";
import { Lab } from "@/components/portfolio/Lab";
import { ContactCTA } from "@/components/portfolio/ContactCTA";
import { EditorialFooter } from "@/components/portfolio/EditorialFooter";

const Index = () => (
  <>
    <Helmet>
      <title>Kirubel Daniel — Software developer & product builder in Addis Ababa | Kira Web</title>
      <meta
        name="description"
        content="Kirubel Daniel (Kira) — I turn ambitious ideas into real digital products. Websites, mobile apps, SaaS, and business systems for teams with real users. Based in Addis Ababa, Ethiopia."
      />
      <link rel="canonical" href="https://kiraweb.pro.et/" />
      <meta property="og:title" content="Kirubel Daniel — Software developer & product builder" />
      <meta property="og:description" content="I turn ambitious ideas into real digital products. Websites, apps, SaaS, and systems." />
      <meta property="og:url" content="https://kiraweb.pro.et/" />
    </Helmet>
    <div className="min-h-screen bg-background text-foreground">
      <EditorialNav />
      <main>
        <Hero />
        <CapabilityMarquee />
        <SelectedWork />
        <Capabilities />
        <Story />
        <KiraWeb />
        <Lab />
        <ContactCTA />
      </main>
      <EditorialFooter />
    </div>
  </>
);

export default Index;
