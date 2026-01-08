import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen noise-overlay">
      <AnimatedBackground />
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <SkillsSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <ExperienceSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
