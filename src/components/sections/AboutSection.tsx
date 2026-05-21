import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Layers, Cpu, Server, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Server className="w-6 h-6" />,
    title: 'Full Stack Architecture',
    description: 'Building scalable, high-performance web applications with Next.js, Node.js, and robust RESTful/GraphQL APIs.',
    color: 'text-primary'
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'UI/UX Engineering',
    description: 'Translating complex designs into pixel-perfect, responsive interfaces using Tailwind, Framer Motion, and React.',
    color: 'text-secondary'
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'System Optimization',
    description: 'Database design with PostgreSQL & MongoDB. Implementing caching strategies and performance tuning.',
    color: 'text-accent'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Cross-Platform Solutions',
    description: 'Developing seamless mobile experiences alongside progressive web applications for all devices.',
    color: 'text-green-400'
  },
];

const highlights = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '15+', label: 'Happy Clients' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/5 text-secondary mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wide uppercase">Discover</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <p className="text-xl text-muted-foreground leading-relaxed">
              I am a passionate <span className="text-white font-semibold">Full Stack Software Engineer</span> dedicated to crafting cinematic, high-performance digital products. With deep expertise in backend architecture and a sharp eye for premium frontend aesthetics, I bridge the gap between design and robust engineering.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
              {highlights.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-2"
                >
                  <span className="text-4xl md:text-5xl font-display font-bold text-white">{stat.value}</span>
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6 relative">
            
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="premium-card p-8 rounded-3xl group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 transition-transform duration-300 border border-white/10 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
