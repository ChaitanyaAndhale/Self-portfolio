import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Smartphone, Building2, Globe } from 'lucide-react';

/* ── Existing projects ─────────────────────────────────────── */
const projects = [
  {
    title: 'Tomato Crop Doctor',
    description: 'CNN-based disease detection system using 32,000+ images with crop recovery and pesticide recommendations',
    image: '/project2.png',
    tags: ['Python', 'TensorFlow', 'CNN', 'Matplotlib'],
    github: 'https://github.com/ChaitanyaAndhale/Tomato-Crop-Doctor',
    live: '#',
  },
  {
    title: 'React E-Commerce Website',
    description: 'Responsive e-commerce platform with dynamic shopping cart and seamless navigation',
    image: '/project1.png',
    tags: ['React.js', 'React Router', 'HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/ChaitanyaAndhale/Ecommerce-Website',
    live: '#',
  },
  {
    title: 'Car Rental System',
    description: 'OOP-based rental management system with booking, return, and pricing strategies',
    image: '/project3.png',
    tags: ['Java', 'OOP', 'Collection Framework'],
    github: 'https://github.com/ChaitanyaAndhale/Car-rental-system',
    live: '#',
  },
  {
    title: 'Full-Stack Web Applications',
    description: 'Enterprise applications using Spring Boot, Hibernate, and React with REST APIs',
    image: '/project4.png',
    tags: ['Java', 'Spring Boot', 'React', 'Hibernate', 'SQL Server'],
    github: 'https://github.com/ChaitanyaAndhale',
    live: '#',
  },
  {
    title: 'Grampanchayat Website',
    description: 'Official digital platform for Golegaon village with admin dashboard, bilingual support, and real-time statistics.',
    image: '/grampanchayat.png',
    tags: ['React', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/ChaitanyaAndhale/grampanchayt_proj.git',
    live: 'https://aplegolegaon.in',
  },
];

/* ── Featured from GitHub README ──────────────────────────── */
const featuredProjects = [
  {
    Icon: Smartphone,
    badge: 'Android / Java',
    badgeClass: 'bg-green-500/15 text-green-400 border-green-500/30',
    glow: 'group-hover:shadow-green-500/10',
    title: 'RideCare Pro',
    description:
      'A comprehensive bike rental and service management Android application with booking, service scheduling, expense tracking, and offline sync.',
    tags: ['Java', 'Android SDK', 'Room Database', 'MVVM'],
    github: 'https://github.com/ChaitanyaAndhale',
    live: '#',
  },
  {
    Icon: Building2,
    badge: 'Full Stack',
    badgeClass: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    glow: 'group-hover:shadow-blue-500/10',
    title: 'VSQuarters',
    description:
      'An enterprise-grade housing management system designed for scalability with tenant management, automated billing, and maintenance requests.',
    tags: ['NestJS', 'Next.js', 'PostgreSQL', 'Playwright'],
    github: 'https://github.com/ChaitanyaAndhale',
    live: '#',
  },
  {
    Icon: Globe,
    badge: 'Web',
    badgeClass: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    glow: 'group-hover:shadow-purple-500/10',
    title: 'Gram Panchayat Portal',
    description:
      'A digital governance platform empowering local communities with digital records, certificate generation, and bilingual support.',
    tags: ['React', 'Node.js', 'MySQL'],
    github: 'https://github.com/ChaitanyaAndhale/grampanchayt_proj.git',
    live: 'https://aplegolegaon.in',
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const featRef = useRef(null);
  const featInView = useInView(featRef, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="mb-14 md:mb-18"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A selection of projects showcasing my skills in full-stack development, machine learning, and software engineering.
          </p>
        </motion.div>

        {/* ── 3 Featured Cards ───────────────────────────────── */}
        <motion.div
          ref={featRef}
          className="grid md:grid-cols-3 gap-5 mb-20"
          initial={{ opacity: 0 }}
          animate={featInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {featuredProjects.map(({ Icon, badge, badgeClass, glow, title, description, tags, github, live }, i) => (
            <motion.div
              key={title}
              className={`relative flex flex-col p-6 rounded-2xl border border-border bg-muted/20 hover:bg-muted/40 shadow-xl ${glow} transition-all duration-300 group overflow-hidden`}
              initial={{ opacity: 0, y: 40 }}
              animate={featInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.14, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              {/* top glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05),_transparent_65%)]" />

              {/* Badge + Icon row */}
              <div className="flex items-center justify-between mb-5">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${badgeClass}`}>
                  {badge}
                </span>
                <motion.div
                  className="p-2 rounded-xl bg-muted/60"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </div>

              {/* Title */}
              <motion.h3
                className="text-xl md:text-2xl font-display font-semibold mb-3 group-hover:text-muted-foreground transition-colors"
                whileHover={{ x: 4 }}
              >
                {title}
              </motion.h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                  whileHover={{ x: 4 }}
                >
                  <Github size={14} /> Code
                </motion.a>
                {live !== '#' && (
                  <motion.a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                    whileHover={{ x: 4 }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Divider ──────────────────────────────────────── */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground">All Projects</span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        {/* ── Original Projects Grid ───────────────────────── */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.15, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="block space-y-4">
                {/* Image */}
                <motion.div
                  className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>

                {/* Info */}
                <div className="space-y-2">
                  <motion.h3
                    className="text-xl md:text-2xl font-display font-medium group-hover:text-muted-foreground transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2 + index * 0.15 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    {project.live !== '#' && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink size={16} />
                        Live
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};