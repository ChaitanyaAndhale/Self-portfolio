import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BookPageTransitionProps {
  children: ReactNode;
  pageKey: string;
  direction: number; // 1 for next page, -1 for previous page
}

const variants = {
  enter: (direction: number) => {
    return {
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      zIndex: 0,
    };
  },
  center: {
    zIndex: 1,
    rotateY: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
    };
  },
};

export const BookPageTransition = ({ children, pageKey, direction }: BookPageTransitionProps) => {
  return (
    <div className="absolute inset-0 w-full h-full perspective-[2000px] preserve-3d">
      <motion.div
        key={pageKey}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          rotateY: { type: "spring", stiffness: 100, damping: 20 },
          opacity: { duration: 0.3 },
        }}
        className="absolute inset-0 w-full h-full origin-center overflow-y-auto overflow-x-hidden"
        style={{ backfaceVisibility: 'hidden' }}
      >
        {children}
      </motion.div>
    </div>
  );
};
