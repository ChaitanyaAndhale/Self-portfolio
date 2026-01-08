import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award, FileText, BookOpen } from 'lucide-react';

const experience = [
  {
    title: 'Software Engineer',
    company: 'Qspider Training Institute',
    period: '2024',
    description: [
      'Developed full-stack web applications using Java, Spring Boot, JSP, Hibernate, and React',
      'Built REST APIs and performed CRUD operations using SQL Server, JDBC, and MVC architecture',
      'Practiced OOPs concepts and applied DSA in Java for efficient problem-solving',
    ],
    icon: Briefcase,
  },
];

const achievements = [
  {
    title: 'Research Publication',
    description: 'Published a research paper on "Crop Disease Detection and Recovery Prediction using CNN" in a reputed journal.',
    icon: FileText,
  },
  {
    title: 'Conference Paper',
    description: 'Web Scraping for E-Commerce Website, International Conference on Recent Trends in Innovation and Technology, vol.13, Issue 04, 2024.',
    icon: BookOpen,
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={isInView ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Career</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">
            Experience & Achievements
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <motion.h3
              className="text-2xl font-display font-bold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="p-2 rounded-xl bg-primary/10">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              Work Experience
            </motion.h3>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
                  
                  <motion.div
                    className="glass rounded-2xl p-6 ml-4 border-l-4 border-primary"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className="absolute left-[14px] top-8 w-3 h-3 rounded-full bg-primary"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-display font-bold">{exp.title}</h4>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Column */}
          <div>
            <motion.h3
              className="text-2xl font-display font-bold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="p-2 rounded-xl bg-accent/10">
                <Award className="w-6 h-6 text-accent" />
              </div>
              Achievements
            </motion.h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15 }}
                >
                  <motion.div
                    className="glass rounded-2xl p-6 relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />

                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div
                        className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <achievement.icon className="w-6 h-6 text-accent" />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-display font-bold mb-2">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>

                    {/* Glow on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        boxShadow: '0 0 40px hsl(var(--accent) / 0.2)',
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Publications Card */}
            <motion.div
              className="mt-8 p-6 glass rounded-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
              <div className="relative z-10 text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FileText className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-3xl font-display font-bold gradient-text">2</h4>
                <p className="text-muted-foreground mt-1">Published Research Papers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
