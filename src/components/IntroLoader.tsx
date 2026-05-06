
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const languages = [
  "Hello",      // English
  "नमस्ते",     // Hindi
  "Hola",       // Spanish
  "こんにちは",  // Japanese
  "Bonjour",    // French
  "مرحبا",      // Arabic
  "Hallo",      // German
  "Ciao",       // Italian
  "Olá",        // Portuguese
  "Привет",     // Russian
  "안녕하세요",   // Korean
  "你好",       // Chinese
  "Merhaba",    // Turkish
  "Γεια σας"    // Greek
];

interface IntroLoaderProps {
  onComplete: () => void;
}

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Total duration target: 3 seconds (3000ms)
    // 14 languages = 13 transitions
    // 13 transitions * 150ms = 1950ms
    // Final pause = 1050ms
    // Total = 3000ms
    
    if (index < languages.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 150); 
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 1050); 
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
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
        
        <div className="overflow-hidden h-[60px] md:h-[100px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={languages[index]}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-4xl md:text-7xl font-headline font-bold text-white block text-center min-w-[200px]"
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
