import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

const experience = [
  {
    title: 'Software Engineer (Trainee)',
    company: 'Qspider Training Institute',
    period: '2024',
    location: 'India',
    responsibilities: [
      'Developed full-stack web applications using Java, Spring Boot, JSP, Hibernate, and React for dynamic user interfaces',
      'Built REST APIs and performed CRUD operations using SQL Server, JDBC, and followed MVC architecture',
      'Practiced OOPs concepts and applied DSA in Java for efficient problem-solving and backend logic',
      'Gained hands-on experience with enterprise-level application development and best practices',
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wide uppercase">Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white/70">Experience</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          {experience.map((exp, index) => (
            <div key={exp.title} className="relative mb-16 md:mb-24 last:mb-0">
              
              {/* Timeline Node */}
              <motion.div 
                className="absolute left-0 md:left-1/2 top-8 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-20"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />

              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}>
                {/* Empty half for spacing on desktop */}
                <div className="hidden md:block flex-1" />

                {/* Content Card */}
                <motion.div
                  className="flex-1 ml-8 md:ml-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="premium-card p-8 rounded-3xl group relative">
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center gap-3 mb-4 text-sm font-medium text-primary">
                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {exp.period}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {exp.location}</span>
                      </div>

                      <h3 className="text-2xl font-display font-bold text-white mb-2 transition-colors duration-300 group-hover:text-primary">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6 font-medium">
                        {exp.company}
                      </p>

                      <ul className="space-y-4">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex gap-3 text-muted-foreground/80 leading-relaxed text-[15px]">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
