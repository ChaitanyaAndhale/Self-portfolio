import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'Full Stack Development',
    description: 'Building scalable and high-performance web applications using Next.js, React, Node.js, and TypeScript, with robust backend architectures, secure RESTful APIs, and clean code practices.',
  },
  {
    title: 'UI/UX Design & Frontend',
    description: 'Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion. Creating intuitive experiences with clean design systems and pixel-perfect implementations.',
  },
  {
    title: 'SaaS Platform Development',
    description: 'Developing end-to-end SaaS solutions with subscription systems, Stripe billing, and multi-tenant management. Ensuring scalability and secure user management.',
  },
  {
    title: 'API & System Architecture',
    description: 'Designing maintainable APIs with PostgreSQL, Prisma, and MongoDB. Focusing on performance optimization, security best practices, and reliable data flow.',
  },
];

const highlights = [
  { icon: '✔', label: 'Backend Expert', desc: 'Java (Spring Boot) & Node.js (NestJS, Express)' },
  { icon: '✔', label: 'Frontend Developer', desc: 'React, Next.js & responsive UIs' },
  { icon: '✔', label: 'Mobile Dev', desc: 'Functional Android applications' },
];

const learning = [
  { emoji: '🏗️', label: 'Microservices with NestJS & Kafka' },
  { emoji: '⚡', label: 'Next.js 14+ & Server Actions' },
  { emoji: '☁️', label: 'Docker, Kubernetes & CI/CD' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6">
            About Me
          </h2>

          {/* Bio */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            I am a passionate{' '}
            <span className="text-foreground font-semibold">Full Stack Software Engineer</span>{' '}
            with a strong foundation in Backend Architecture and extensive experience in modern Web
            and Android development. I specialize in building{' '}
            <span className="text-foreground font-semibold">production-ready, scalable applications</span>{' '}
            using industry-standard technologies.
          </motion.p>

          {/* Highlight Cards */}
          <motion.div
            className="grid sm:grid-cols-3 gap-4 mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex flex-col gap-1.5 p-5 rounded-2xl border border-border bg-muted/30 hover:bg-muted/60 transition-all cursor-default group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="text-base font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                  {item.icon} {item.label}
                </span>
                <span className="text-sm text-muted-foreground">{item.desc}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              🌱 Currently Learning & Exploring
            </p>
            <div className="flex flex-wrap gap-3">
              {learning.map((item, i) => (
                <motion.span
                  key={item.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:border-foreground hover:text-foreground transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.55 + i * 0.1 }}
                  whileHover={{ scale: 1.07, y: -2 }}
                >
                  <span>{item.emoji}</span>
                  {item.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-border mb-14"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.6 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="space-y-4 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              <motion.h3
                className="text-xl md:text-2xl font-display font-medium group-hover:text-muted-foreground transition-colors"
                whileHover={{ x: 5 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-sm md:text-base text-muted-foreground leading-relaxed"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
