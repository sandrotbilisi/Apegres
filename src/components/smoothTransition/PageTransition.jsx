// PageTransition.js
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.90 // Start slightly smaller
  },
  in: {
    opacity: 1,
    scale: 1 // Scale to normal size
  },
  out: {
    opacity: 0,
    scale: 1.05 // Scale a bit larger before exiting
  }
};

const pageTransition = {
    type: "tween",
    ease: "easeOut", // This creates a smoother start and a quicker transition into the animation
    duration: 0.6,
  };
  

const PageTransition = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className="flex justify-center items-center h-full"
  >
    {children}
  </motion.div>
);

export default PageTransition;
