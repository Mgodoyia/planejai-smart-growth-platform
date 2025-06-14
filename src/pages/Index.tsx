
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Features from "@/components/Features";
import SystemShowcase from "@/components/SystemShowcase";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PainPoints />
      <Features />
      <SystemShowcase />
      <Benefits />
      <Testimonials />
      <TechStack />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
