import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Code2, Cpu, ShoppingCart, Car } from 'lucide-react';
import tomatoProject from '@/assets/tomato-project.jpg';
import ecommerceProject from '@/assets/ecommerce-project.jpg';
import carRentalProject from '@/assets/car-rental-project.jpg';

const projects = [
  {
    id: 1,
    title: 'Tomato Crop Doctor',
    subtitle: 'Disease Detection System',
    description: 'CNN-based tomato leaf disease detection system using a dataset of 32,000+ images to accurately classify multiple tomato crop diseases. Includes crop recovery and pesticide recommendation module.',
    technologies: ['Python', 'TensorFlow', 'CNN', 'Matplotlib'],
    icon: Cpu,
    color: 'from-emerald-500 to-cyan-500',
    category: 'Machine Learning',
    image: tomatoProject,
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    subtitle: 'React-Based Shopping Website',
    description: 'Responsive e-commerce website with product listings, dynamic shopping cart, and smooth page navigation. Built with modern React patterns and mobile-friendly UI design.',
    technologies: ['React.js', 'React Router', 'JavaScript', 'CSS3'],
    icon: ShoppingCart,
    color: 'from-primary to-secondary',
    category: 'Full Stack',
    image: ecommerceProject,
  },
  {
    id: 3,
    title: 'Car Rental System',
    subtitle: 'Java OOP Application',
    description: 'Comprehensive car rental management system with booking, return, and rental management features. Implements multiple pricing strategies using OOP principles and polymorphism.',
    technologies: ['Java', 'OOP', 'Collection Framework'],
    icon: Car,
    color: 'from-violet-500 to-fuchsia-500',
    category: 'Backend',
    image: carRentalProject,
  },
];

const categories = ['All', 'Machine Learning', 'Full Stack', 'Backend'];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in building innovative solutions
            across different domains.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground'
                  : 'glass text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="group"
            >
              <motion.div
                className="h-full glass rounded-2xl overflow-hidden relative"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40`} />
                  
                  {/* Icon */}
                  <motion.div
                    className="absolute bottom-4 right-4 p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-primary/30"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <project.icon className="w-6 h-6 text-primary" />
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs font-medium text-primary border border-primary/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-1 text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <motion.button
                      className="flex-1 py-2 px-4 glass rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary/10 hover:border-primary/50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Code2 size={16} />
                      Details
                    </motion.button>
                    <motion.a
                      href="https://github.com/ChaitanyaAndhale"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.button
                      className="p-2 glass rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={18} />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: `0 0 40px hsl(var(--primary) / 0.3), 0 0 80px hsl(var(--primary) / 0.1)`,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/ChaitanyaAndhale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-medium hover:bg-primary/10 hover:border-primary/50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};