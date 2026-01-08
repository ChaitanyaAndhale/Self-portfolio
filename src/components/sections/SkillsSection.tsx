import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
  "Programming Languages": [
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 80 },
    { name: "HTML/CSS", level: 95 },
  ],
  "Frameworks & Libraries": [
    { name: "React.js", level: 88 },
    { name: "Node.js", level: 80 },
    { name: "Spring Boot", level: 75 },
    { name: "Flask", level: 70 },
    { name: "TensorFlow", level: 65 },
  ],
  "Databases": [
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "SQL Server", level: 75 },
  ],
  "Tools & Technologies": [
    { name: "Git & GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Hibernate", level: 70 },
    { name: "REST APIs", level: 85 },
  ],
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <motion.span 
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const SkillIcon = ({ name, delay }: { name: string; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, type: "spring", stiffness: 200 }}
    >
      <motion.div
        className="px-4 py-3 glass rounded-xl text-sm font-medium cursor-pointer"
        whileHover={{ 
          scale: 1.1, 
          y: -5,
          boxShadow: "0 10px 40px hsl(var(--primary) / 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">{name}</span>
      </motion.div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allSkillNames = Object.values(skills).flat().map(s => s.name);

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={isInView ? { x: [0, 50, 0], opacity: [0.1, 0.2, 0.1] } : {}}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={isInView ? { x: [0, -50, 0], opacity: [0.1, 0.2, 0.1] } : {}}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
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
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Skills</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of programming languages, frameworks, and technologies
            that I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skill Tags Cloud */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {allSkillNames.map((skill, index) => (
            <SkillIcon key={skill} name={skill} delay={0.4 + index * 0.05} />
          ))}
        </motion.div>

        {/* Skill Bars Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          {Object.entries(skills).map(([category, categorySkills], catIndex) => (
            <motion.div
              key={category}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + catIndex * 0.1 }}
            >
              <h3 className="text-lg font-display font-semibold text-primary">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.6 + catIndex * 0.1 + index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Skill Visualization */}
        <motion.div
          className="mt-20 p-8 glass rounded-3xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{ backgroundSize: '200% 200%' }}
          />
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-display font-bold mb-4">Always Learning</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. Currently exploring advanced topics in 
              Machine Learning, Cloud Architecture, and System Design to stay ahead of the curve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
