import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function AnimateIn({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: -200 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
