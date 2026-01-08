import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Wrench, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Python'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'SQL Server'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers,
    skills: ['React', 'Node.js', 'Spring Boot', 'Flask', 'Hibernate', 'TensorFlow', 'Mongoose'],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Eclipse IDE', 'JDBC', 'REST APIs', 'MVC Architecture'],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-4">
            Technical Skills
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Technologies and tools I work with to build modern, scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="p-2 rounded-lg bg-muted"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <category.icon className="w-5 h-5 text-foreground" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-display font-medium">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-muted rounded-lg text-sm font-medium hover:bg-foreground/10 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
