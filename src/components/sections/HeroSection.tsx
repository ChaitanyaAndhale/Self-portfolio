import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // 3D Perspective Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Smooth Apple-like easing
      },
    }),
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Image in Animated Circle with 3D Tilt */}
          <motion.div 
            className="order-1 flex flex-col items-center lg:items-center xl:items-start relative w-full perspective-[1000px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[550px] lg:h-[550px] mx-auto lg:mx-0"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
              {/* Outer rotating gradient ring - Gold */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/20 bg-gradient-to-tr from-primary/10 to-transparent shadow-[0_0_40px_rgba(250,204,21,0.1)]"
                animate={{ rotate: 360, scale: [1, 1.02, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ translateZ: 20 }}
              />
              
              {/* Inner dashed rotating ring - Silver */}
              <motion.div
                className="absolute inset-6 rounded-full border border-white/20 border-dashed"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ translateZ: 40 }}
              />

              {/* Glowing orb behind the image */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-white/10 blur-[60px] mix-blend-screen"
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ translateZ: -20 }}
              />

              {/* The Image Container */}
              <motion.div 
                className="absolute inset-5 md:inset-8 rounded-full overflow-hidden border border-white/10 bg-[#050505]/50 backdrop-blur-md p-1.5 md:p-2 shadow-2xl flex items-center justify-center ring-1 ring-white/5"
                style={{ translateZ: 60 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-[#151515] relative group">
                  <motion.div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                  <img 
                    src="/hero-profile.jpg" 
                    alt="Chaitanya" 
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1] relative z-0"
                    loading="eager"
                  />
                </div>
              </motion.div>

              {/* Small floating accents */}
              <motion.div 
                className="absolute top-10 right-10 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#FACC15]"
                animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ translateZ: 80 }}
              />
              <motion.div 
                className="absolute bottom-16 left-12 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"
                animate={{ y: [0, 15, 0], opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ translateZ: 100 }}
              />
            </motion.div>
            
            {/* Animated Name below picture */}
            <motion.div
              className="mt-8 md:mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-serif italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-primary tracking-wide pb-2"
                style={{ filter: 'drop-shadow(0 4px 15px rgba(250,204,21,0.3))' }}
                animate={{ scale: [1, 1.02, 1], opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                Mr. Chaitanya Andhale
              </motion.h2>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Text Content */}
          <div className="order-2 flex flex-col items-center lg:items-start text-center lg:text-left relative z-20">
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground mb-8 backdrop-blur-xl shadow-[0_0_15px_rgba(255,255,255,0.02)]"
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium tracking-wide uppercase">Software Engineer</span>
            </motion.div>

            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-8"
            >
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Digital</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white/70">Excellence.</span>
            </motion.h1>

            <motion.h2
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 font-medium leading-relaxed"
            >
              Hi, I'm Chaitanya. I build scalable, high-performance web applications with clean architecture and premium aesthetics.
            </motion.h2>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)", boxShadow: "0 0 30px rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Work <ArrowRight size={18} />
              </motion.a>
              
              <motion.a 
                href="https://github.com/ChaitanyaAndhale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 bg-white/5 font-semibold rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                GitHub Profile
              </motion.a>
            </motion.div>
          </div>
          
        </div>
      </div>

      {/* Simplified Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToAbout}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/20 to-white/50 overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
              animate={{ top: ['-50%', '150%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
        </div>
      </motion.div>
    </section>
  );
};