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
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

const Index = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isFlipping, setIsFlipping] = useState(false);
  const [direction, setDirection] = useState(1);

  // Re-enable scroll listener for active section tracking
  useEffect(() => {
    const handleScroll = () => {
      if (isFlipping) return;
      const sections = ['home', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFlipping]);

  const handleNavClick = (newSection: string) => {
    if (newSection === activeSection || isFlipping) return;
    
    // Determine flip direction
    const currentEl = document.getElementById(activeSection);
    const newEl = document.getElementById(newSection);
    if (currentEl && newEl) {
      setDirection(newEl.offsetTop > currentEl.offsetTop ? 1 : -1);
    }
    
    setIsFlipping(true);

    // Wait for flip out (400ms), then instantly scroll, then flip in
    setTimeout(() => {
      const element = document.getElementById(newSection);
      if (element) {
        // Instant scroll while invisible
        window.scrollTo({ top: element.offsetTop - 80, behavior: 'instant' as ScrollBehavior });
      }
      setActiveSection(newSection);
      setIsFlipping(false);
    }, 400);
  };

  return (
    <>
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      
      {loadingComplete && (
        <div className="relative min-h-screen bg-[#030303] overflow-x-hidden perspective-[2000px]">
          <AnimatedBackground />
          <Navbar activeSection={activeSection} setActiveSection={handleNavClick} />
          
          <motion.main 
            className="relative z-10 origin-center"
            animate={isFlipping ? { rotateY: direction > 0 ? -90 : 90, scale: 0.8, opacity: 0 } : { rotateY: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
            <GitHubStatsSection />
            <ContactSection />
            <Footer />
          </motion.main>
        </div>
      )}
    </>
  );
};

export default Index;
