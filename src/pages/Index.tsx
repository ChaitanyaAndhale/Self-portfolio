import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { GitHubStatsSection } from '@/components/sections/GitHubStatsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

import { useState } from 'react';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

const Index = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      
      {loadingComplete && (
        <div className="relative min-h-screen animate-fade-in">
          <AnimatedBackground />
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
            <GitHubStatsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
