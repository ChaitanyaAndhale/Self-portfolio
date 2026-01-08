import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-2 md:space-y-4"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-medium leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                Hi! i'm Chaitanya
              </motion.h1>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-medium leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                Full-stack Developer
              </motion.h2>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-medium leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                UI & UX Designer.
              </motion.h2>
            </motion.div>
          </div>

          {/* Right Side - Profile Photo */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative w-full max-w-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative background elements */}
              <div className="absolute inset-0 -z-10">
                {/* Gradient orb 1 */}
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-foreground/5 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Gradient orb 2 */}
                <motion.div
                  className="absolute bottom-0 left-0 w-64 h-64 bg-foreground/3 rounded-full blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Main image container */}
              <div className="relative">
                {/* Animated border effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-foreground/20 via-foreground/5 to-transparent rounded-3xl"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Image wrapper with aesthetic styling */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-background p-1">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src="/profile-photo-full.jpg"
                      alt="Chaitanya Andhale"
                      className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />

                    {/* Overlay gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 hover:opacity-30 transition-opacity duration-500" />

                    {/* Subtle vignette effect */}
                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
                  </div>
                </div>

                {/* Floating accent elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 border border-foreground/10 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div
                  className="absolute -bottom-6 -left-6 w-32 h-32 border border-foreground/10 rounded-full"
                  animate={{
                    y: [0, 20, 0],
                    rotate: [360, 180, 0],
                  }}
                  transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-20 blur-2xl bg-foreground/20 -z-10"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={scrollToAbout}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs md:text-sm font-medium uppercase tracking-wider">scroll down</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};