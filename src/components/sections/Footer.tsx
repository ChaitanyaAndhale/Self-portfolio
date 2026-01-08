import { motion } from 'framer-motion';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      {/* Wave Divider */}
      <div className="absolute -top-1 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-2xl font-display font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              Chaitanya Andhale
            </motion.a>
            <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using React & Framer Motion
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: 'https://github.com/ChaitanyaAndhale' },
              { icon: Linkedin, href: 'https://linkedin.com/in/chaitanya-andhale' },
              { icon: Mail, href: 'mailto:chaitanyaandhale6@gmail.com' },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Chaitanya Andhale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
