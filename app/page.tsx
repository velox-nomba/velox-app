import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardPreview from "@/components/DashboardPreview";
import Features from "@/components/Features";
import BuiltFor from "@/components/BuiltFor";
import DeveloperExperience from "@/components/DeveloperExperience";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
      <BuiltFor />
      <DeveloperExperience />
      <FinalCTA />
      <Footer />
    </main>
  );
}
