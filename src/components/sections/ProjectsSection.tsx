import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Smartphone, Building2, Sparkles, Folder, ChevronDown } from 'lucide-react';

/* ── Main Selected Projects ─────────────────────────────────────── */
const mainProjects = [
  {
    title: 'JobFusion Web Platform',
    description: 'Unified Job Discovery Platform aggregating live jobs from multiple sources with semantic search, anti-bot scraper, and advanced resume parsing.',
    images: ['/jobfusion.png'],
    tags: ['React', 'Supabase', 'Tailwind', 'Render', 'Vercel'],
    github: 'https://github.com/ChaitanyaAndhale',
    live: 'https://job-fusion-a-unified-job-discovery.vercel.app',
  },
  {
    title: 'Gram Panchayat Portal',
    description: 'A digital governance platform empowering local communities with digital records, certificate generation, and bilingual support.',
    images: ['/grampanchayat.png'],
    tags: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/ChaitanyaAndhale/grampanchayt_proj.git',
    live: 'https://aplegolegaon.in',
  },
];

/* ── Other Projects (Hidden by default) ───────────────────────── */
const otherProjects = [
  {
    title: 'RideCare Pro',
    description: 'A comprehensive bike rental and service management Android application with booking, service scheduling, expense tracking, and offline sync.',
    tags: ['Java', 'Android SDK', 'Room DB', 'MVVM'],
    github: 'https://github.com/ChaitanyaAndhale',
    live: '#',
    Icon: Smartphone,
  },
  {
    title: 'VSQuarters',
    description: 'An enterprise-grade housing management system designed for scalability with tenant management, automated billing, and maintenance requests.',
    tags: ['NestJS', 'Next.js', 'PostgreSQL'],
    github: 'https://github.com/ChaitanyaAndhale',
    live: '#',
    Icon: Building2,
  },
  {
    title: 'Tomato Crop Doctor',
    description: 'CNN-based disease detection system using 32,000+ images with crop recovery and pesticide recommendations.',
    tags: ['Python', 'TensorFlow', 'CNN', 'Matplotlib'],
    github: 'https://github.com/ChaitanyaAndhale/Tomato-Crop-Doctor',
    live: '#',
    Icon: Sparkles,
  },
  {
    title: 'React E-Commerce',
    description: 'Responsive e-commerce platform with dynamic shopping cart and seamless navigation.',
    tags: ['React.js', 'React Router', 'CSS3'],
    github: 'https://github.com/ChaitanyaAndhale/Ecommerce-Website',
    live: '#',
    Icon: Folder,
  },
  {
    title: 'Car Rental System',
    description: 'OOP-based rental management system with booking, return, and pricing strategies.',
    tags: ['Java', 'OOP', 'Collections'],
    github: 'https://github.com/ChaitanyaAndhale/Car-rental-system',
    live: '#',
    Icon: Folder,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showOtherWorks, setShowOtherWorks] = useState(false);

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wide uppercase">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-white">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white/70">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A showcase of my premium projects featuring scalable architectures, intelligent algorithms, and beautiful interfaces.
          </p>
        </motion.div>

        {/* ── Main Selected Projects Grid ───────────────────────── */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 lg:gap-14 mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {mainProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <div className="premium-card rounded-3xl p-4 h-full flex flex-col bg-white/[0.02]">
                <div className="relative aspect-[16/10] bg-muted/30 rounded-2xl overflow-hidden mb-6">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.images[0]})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                     {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white text-black py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-black/50 backdrop-blur-md text-white py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-black/70 transition-colors border border-white/10">
                      <Github size={16} /> Source
                    </a>
                  </div>
                </div>

                <div className="px-3 pb-3 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Toggle Button for Other Works ─────────────────────── */}
        <div className="flex justify-center mb-12">
          <motion.button
            onClick={() => setShowOtherWorks(!showOtherWorks)}
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span>{showOtherWorks ? 'Hide Other Work' : 'View Other Work'}</span>
            <motion.div
              animate={{ rotate: showOtherWorks ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </motion.button>
        </div>

        {/* ── Other Works Grid (Collapsible) ────────────────────── */}
        <AnimatePresence>
          {showOtherWorks && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 pb-12">
                {otherProjects.map((project, index) => {
                  const Icon = project.Icon;
                  return (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      whileHover={{ scale: 1.03, y: -5, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                      className="premium-card p-6 rounded-2xl flex flex-col bg-white/[0.01] border border-white/5 cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-primary">
                          <Icon size={20} />
                        </div>
                        <div className="flex gap-3">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                            <Github size={18} />
                          </a>
                          {project.live !== '#' && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                      <p className="text-sm text-muted-foreground mb-6 flex-1 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] uppercase tracking-wider text-muted-foreground/80">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};