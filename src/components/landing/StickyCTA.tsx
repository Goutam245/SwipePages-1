import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface StickyCTAProps {
  variant?: "A" | "B" | "C";
}

export function StickyCTA({ variant = "A" }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const ctaText = {
    A: "Book Free Assessment",
    B: "Get a Plan This Week",
    C: "See How It Works",
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show after scrolling past hero (roughly 400px)
      if (currentScrollY > 400) {
        // Show on scroll up or when near top
        if (currentScrollY < lastScrollY || currentScrollY < 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-card/95 backdrop-blur-lg border-t border-border shadow-large p-4">
            <Link to="/contact" className="block">
              <button className="w-full bg-ct-green text-primary-foreground shadow-xl hover:bg-ct-green-hover py-4 text-lg font-semibold rounded-2xl transition-all">
                {ctaText[variant]}
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
