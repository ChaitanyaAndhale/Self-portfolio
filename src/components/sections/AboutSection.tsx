import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const stats = [
  { number: 3, suffix: '+', label: 'Projects Completed' },
  { number: 1, suffix: '+', label: 'Years Experience' },
  { number: 7.92, suffix: '', label: 'CGPA Score' },
  { number: 2, suffix: '', label: 'Research Papers' },
];

const education = [
  {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Savitribai Phule Pune University',
    period: '2021 – 2025',
    location: 'Pune, India',
    score: 'CGPA: 7.92',
  },
  {
    degree: '12th Maharashtra State Board',
    institution: 'Sant Bhagwanbaba Uchha-Madhyamik Vidyalay',
    period: '2019 – 2021',
    location: 'Maharashtra, India',
    score: 'Percentage: 85%',
  },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {isInView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {target}{suffix}
          </motion.span>
        ) : '0'}
      </motion.span>
    </motion.span>
  );
};

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">
            Know Me Better
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-accent to-secondary p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-3xl bg-card" />
              </motion.div>
              
              {/* Content placeholder */}
              <div className="absolute inset-4 rounded-2xl glass flex items-center justify-center overflow-hidden">
                <motion.div
                  className="text-8xl font-display font-bold gradient-text"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  CA
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 p-4 glass rounded-2xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <GraduationCap className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 p-4 glass rounded-2xl"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Award className="w-8 h-8 text-secondary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold">
              I'm <span className="gradient-text">Chaitanya Andhale</span>, 
              a passionate Software Engineer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my Bachelor's in Computer Science Engineering at Savitribai Phule Pune University. 
              I specialize in building full-stack web applications using modern technologies like React, Node.js, and Java Spring Boot.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With hands-on experience in developing CNN-based machine learning models and e-commerce platforms, 
              I bring a unique blend of theoretical knowledge and practical expertise. My work has been recognized 
              through published research papers in reputed journals.
            </p>
            
            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Pune, India</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Calendar className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm text-muted-foreground">Class of 2025</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 glass rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                <CountUp target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-display font-bold mb-8 text-center">Education</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />
            
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className={`relative flex flex-col md:flex-row items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.2 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary hidden md:block"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Card */}
                <motion.div
                  className={`w-full md:w-[calc(50%-2rem)] p-6 glass rounded-2xl ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <span className="text-xs font-medium text-secondary">{edu.period}</span>
                  <h4 className="text-lg font-display font-bold mt-2">{edu.degree}</h4>
                  <p className="text-muted-foreground mt-1">{edu.institution}</p>
                  <div className="flex items-center gap-2 mt-3 justify-center md:justify-start">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {edu.score}
                    </span>
                    <span className="text-xs text-muted-foreground">{edu.location}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
