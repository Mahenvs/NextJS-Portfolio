"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // Works in App Router
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 500); // Matches transition duration
  }, [pathname]); // Runs when pathname changes

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={pathname} // Ensures smooth transitions per route change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
