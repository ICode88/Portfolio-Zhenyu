import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-violet-900/10 rounded-full blur-3xl -z-10 opacity-30" />
      <div className="fixed bottom-0 left-0 w-1/2 h-1/2 bg-violet-600/5 rounded-full blur-3xl -z-10 opacity-20" />
      
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}