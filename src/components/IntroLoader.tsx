
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const languages = [
  "Hello",      // English
  "नमस्ते",     // Hindi
  "Hola",       // Spanish
  "こんにちは",  // Japanese
  "Bonjour",    // French
  "مرحبا"       // Arabic
];

interface IntroLoaderProps {
  onComplete: () => void;
}

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < languages.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 350);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#18151D]"
    >
      <div className="relative flex items-center gap-4">
        {/* Subtle glowing dot */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_rgba(100,219,255,0.8)]"
        />
        
        <AnimatePresence mode="wait">
          <motion.span
            key={languages[index]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-6xl font-headline font-bold text-white"
          >
            {languages[index]}
          </motion.span>
        </AnimatePresence>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>
    </motion.div>
  );
}
