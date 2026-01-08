import { motion } from 'framer-motion';

const FloatingOrb = ({ delay, size, x, y, color }: { delay: number; size: number; x: string; y: string; color: string }) => (
  <motion.div
    className="absolute rounded-full blur-3xl opacity-30"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: color,
    }}
    animate={{
      x: [0, 30, -20, 0],
      y: [0, -40, 20, 0],
      scale: [1, 1.2, 0.9, 1],
    }}
    transition={{
      duration: 15,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const GeometricShape = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-primary/20"
    style={{ left: x, top: y }}
    animate={{
      opacity: [0.2, 0.8, 0.2],
      scale: [1, 1.5, 1],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-mesh opacity-60" />
      
      {/* Animated Orbs */}
      <FloatingOrb delay={0} size={600} x="10%" y="20%" color="hsl(250, 89%, 67%)" />
      <FloatingOrb delay={2} size={500} x="70%" y="60%" color="hsl(186, 94%, 45%)" />
      <FloatingOrb delay={4} size={400} x="40%" y="80%" color="hsl(280, 87%, 65%)" />
      <FloatingOrb delay={1} size={300} x="80%" y="10%" color="hsl(320, 85%, 65%)" />
      
      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <GeometricShape
          key={i}
          delay={i * 0.2}
          x={`${Math.random() * 100}%`}
          y={`${Math.random() * 100}%`}
        />
      ))}
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
};
