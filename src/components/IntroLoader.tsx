
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
    if (index < languages.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 200); 
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 400); 
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
          <AnimatePresence mode="popLayout">
            <motion.span
              key={languages[index]}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="text-4xl md:text-7xl font-headline font-bold text-white block text-center min-w-[200px]"
            >
              {languages[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
