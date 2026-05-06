
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
      }, 400); // Slightly adjusted timing for better readability
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000); // Hold the last greeting briefly before transition
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div className="relative flex items-center gap-6">
        {/* Subtle glowing dot that pulses */}
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1], 
            opacity: [0.3, 1, 0.3],
            boxShadow: [
              "0 0 10px rgba(100,219,255,0.4)",
              "0 0 25px rgba(100,219,255,0.8)",
              "0 0 10px rgba(100,219,255,0.4)"
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-2.5 h-2.5 rounded-full bg-accent"
        />
        
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={languages[index]}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-4xl md:text-7xl font-headline font-bold text-white block"
            >
              {languages[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Cinematic decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        
        {/* Subtle corner flares */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 blur-[80px]" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 blur-[80px]" />
      </div>
    </motion.div>
  );
}
