import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { name: 'Email', href: 'mailto:chaitanyaandhale6@gmail.com', icon: Mail },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/chaitanya-andhale', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/ChaitanyaAndhale', icon: Github },
];

export const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-12">
          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6 text-muted-foreground">
              LINKS
            </h3>
            <div className="space-y-3">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.a
                    href={link.href}
                    className="block text-2xl md:text-3xl font-display font-medium hover:text-muted-foreground transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6 text-muted-foreground">
              SOCIALS
            </h3>
            <div className="space-y-3">
              {socials.map(({ name, href, icon: Icon }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-2xl md:text-3xl font-display font-medium hover:text-muted-foreground transition-colors group"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={24} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                    </motion.div>
                    {name}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Local Time & Version */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-3 text-muted-foreground">
                LOCAL TIME
              </h3>
              <motion.div
                className="text-2xl md:text-3xl font-display font-medium"
                key={currentTime}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {currentTime}
              </motion.div>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-3 text-muted-foreground">
                VERSION
              </h3>
              <div className="text-base font-medium">
                2025 © Edition
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          className="border-t border-border pt-8 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <motion.a
              href="tel:+919209591382"
              className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ x: 5 }}
            >
              +91 92095 91382
            </motion.a>
            <motion.a
              href="mailto:chaitanyaandhale6@gmail.com"
              className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ x: 5 }}
            >
              chaitanyaandhale6@gmail.com
            </motion.a>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.h2
            className="text-6xl md:text-8xl lg:text-9xl font-display font-medium"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            CHAITANYA
          </motion.h2>
        </motion.div>

        {/* Bottom Links */}
        <motion.div
          className="mt-8 flex gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="https://linkedin.com/in/chaitanya-andhale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/ChaitanyaAndhale"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};
