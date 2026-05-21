import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#030303]">
      
      {/* ── 1. Base Layer: Subtle Grid ────────────────────────────── */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />

      {/* ── 2. Ambient Glows (Yellow/Charcoal) ────────────────────── */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[150px] animate-pulse-slow mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-secondary/10 blur-[150px] animate-pulse-slower mix-blend-screen" />
        <div className="absolute top-[40%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-accent/5 blur-[120px] animate-pulse-slow mix-blend-screen" />
      </div>

      {/* ── 3. Light Beams ────────────────────────────────────────── */}
      <motion.div
        className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
        animate={{ x: [-50, 50, -50], opacity: [0, 0.8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent"
        animate={{ x: [50, -50, 50], opacity: [0, 0.5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />

      {/* ── 4. Cinematic Depth Gradient ───────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at center, transparent 40%, rgba(3,3,3,0.9) 100%)'
      }} />
    </div>
  );
};
