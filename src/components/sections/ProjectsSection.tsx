import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Tomato Crop Doctor',
    description: 'CNN-based disease detection system using 32,000+ images with crop recovery and pesticide recommendations',
    image: '/project2.png',
    tags: ['Python', 'TensorFlow', 'CNN', 'Matplotlib'],
    github: 'https://github.com/ChaitanyaAndhale',
    live: '#',
  },
  {
    title: 'React E-Commerce Website',
    description: 'Responsive e-commerce platform with dynamic shopping cart and seamless navigation',
    image: '/project1.png',
    tags: ['React.js', 'React Router', 'HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/ChaitanyaAndhale',
    live: '#',
  },
  {
    title: 'Car Rental System',
    description: 'OOP-based rental management system with booking, return, and pricing strategies',
    image: '/project3.png',
    tags: ['Java', 'OOP', 'Collection Framework'],
    github: 'https://github.com/ChaitanyaAndhale',
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
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
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

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="block space-y-4">
                {/* Project Image */}
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

                {/* Project Info */}
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