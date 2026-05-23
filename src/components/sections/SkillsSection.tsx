import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    iconColor: 'text-primary',
    skills: ['Java', 'JavaScript', 'HTML5', 'CSS3', 'Python'],
  },
  {
    title: 'Backend & Architecture',
    iconColor: 'text-white',
    skills: ['Spring Boot', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Frontend & Mobile',
    iconColor: 'text-primary',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Databases',
    iconColor: 'text-white',
    skills: ['MySQL', 'MongoDB', 'Supabase'],
  },
  {
    title: 'Tools & DevOps',
    iconColor: 'text-primary',
    skills: ['Git', 'Vercel', 'Render', 'CI/CD', 'Postman'],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wide uppercase">Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white/70">Arsenal</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A comprehensive overview of the tools and technologies I use to build scalable, high-performance systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`relative p-8 rounded-3xl premium-card bg-white/[0.02] transition-all duration-300 group`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-2.5 h-2.5 rounded-full bg-current ${category.iconColor}`} />
                <h3 className="text-2xl font-display font-bold text-white transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-muted-foreground transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 + skillIndex * 0.02, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
