import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollButton() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show the scroll button after scrolling down a bit (e.g. 100px)
      setIsVisible(window.scrollY > 100);

      // Check if we are near the bottom of the page
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
      setIsAtBottom(atBottom);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger check on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const sections = ['about', 'expertise', 'skills', 'projects', 'experience', 'github', 'contact'];
    let nextSection = null;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        // If the top of the section is more than 120px below the viewport top,
        // it means we haven't scrolled fully past/into it yet, making it the next target.
        if (rect.top > 120) {
          nextSection = el;
          break;
        }
      }
    }

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: if we are past the last section, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToNextSection}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 rounded-full bg-brand-primary text-white border border-brand-primary/20 hover:border-brand-primary/50 shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all duration-300 cursor-pointer active:scale-95 group no-print"
          title={isAtBottom ? "Scroll to Top" : "Scroll to Next Section"}
        >
          {isAtBottom ? (
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          ) : (
            <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform animate-pulse" />
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
