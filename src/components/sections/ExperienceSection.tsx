import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
    <section id="experience" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-4">
            Work Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Professional experience and training in software development.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="relative pl-8 md:pl-12 border-l-2 border-border"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-foreground"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
              />

              <motion.div
                className="bg-muted rounded-lg p-6 md:p-8 hover:bg-foreground/5 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-medium mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm font-medium">Trainee</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <motion.div
                      key={respIndex}
                      className="flex gap-3 items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + respIndex * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {resp}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
