import CollaborationCTA from "./components/home/CollaborationCTA";
import HeroSection from "./components/home/HeroSection";
import { HowItWorksSection } from "./components/home/HowItWorksSection";
import TargetUsersSection from "./components/home/TargetUsersSection";
import TestimonialSection from "./components/home/TestimonialSection";
import WhyREnalyse from "./components/home/WhyREnalyse";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col overflow-x-hidden">
      <Navbar/>
      <HeroSection/>
      {/* Mobi  le-optimized Trust Banner */}
      <div className="bg-renalyse-dark py-4 px-6 text-center text-white">
        <p className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] opacity-80">
          Azure AI Foundry • FHIR Compliant • Sub-100ms Analysis
        </p>
      </div>
      <WhyREnalyse/>
      <HowItWorksSection/>
      <TargetUsersSection />
      <TestimonialSection />
      <CollaborationCTA/>
      <Footer />
    </main>
  );
}