import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    emoji: '👨‍💻',
    title: 'Languages',
    gradient: 'from-sky-500/10 via-cyan-500/5 to-transparent',
    border: 'hover:border-sky-500/40',
    skills: ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python'],
  },
  {
    emoji: '⚙️',
    title: 'Backend & Architecture',
    gradient: 'from-emerald-500/10 via-green-500/5 to-transparent',
    border: 'hover:border-emerald-500/40',
    skills: ['Spring Boot', 'Node.js', 'Express', 'NestJS'],
  },
  {
    emoji: '🎨',
    title: 'Frontend & Mobile',
    gradient: 'from-violet-500/10 via-purple-500/5 to-transparent',
    border: 'hover:border-violet-500/40',
    skills: ['React', 'Next.js', 'Redux', 'Bootstrap', 'Tailwind CSS', 'Android', 'Kotlin'],
  },
  {
    emoji: '🗄️',
    title: 'Databases',
    gradient: 'from-amber-500/10 via-yellow-500/5 to-transparent',
    border: 'hover:border-amber-500/40',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    emoji: '🧰',
    title: 'Tools & DevOps',
    gradient: 'from-rose-500/10 via-red-500/5 to-transparent',
    border: 'hover:border-rose-500/40',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Android Studio', 'IntelliJ IDEA'],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
            Tech Stack
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Technologies and tools I work with to build modern, scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`relative p-6 rounded-2xl border border-border bg-gradient-to-br ${category.gradient} ${category.border} transition-all duration-300 group overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              {/* inner glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04),_transparent_70%)]" />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <motion.span
                  className="text-2xl select-none"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  {category.emoji}
                </motion.span>
                <h3 className="text-lg md:text-xl font-display font-semibold">
                  {category.title}
                </h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 bg-background/50 backdrop-blur-sm border border-border/60 rounded-lg text-sm font-medium hover:bg-foreground/10 hover:border-foreground/40 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 + skillIndex * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
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
