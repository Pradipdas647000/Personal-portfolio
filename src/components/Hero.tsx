
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, FileText, Send } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Building modern digital experiences";
  const avatar = PlaceHolderImages.find(img => img.id === "avatar")?.imageUrl;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    setMousePos({ x, y });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden"
    >
      {/* Background glow that follows mouse */}
      <div 
        className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
          left: 'calc(50% - 250px)',
          top: 'calc(50% - 250px)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div 
          className="glass p-8 md:p-16 rounded-[2rem] max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`
          }}
        >
          {/* Avatar Area */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-2xl animate-pulse" />
            <div className="relative w-32 h-44 md:w-40 md:h-56 rounded-3xl border-2 border-white/20 p-1.5 overflow-hidden glass">
              {avatar ? (
                <Image 
                  src={avatar}
                  alt="Pradip"
                  width={160}
                  height={224}
                  className="rounded-2xl object-cover h-full w-full"
                  data-ai-hint="man portrait"
                />
              ) : (
                <div className="w-full h-full bg-primary/10 flex items-center justify-center rounded-2xl">
                  <span className="text-primary font-satisfy text-4xl">P</span>
                </div>
              )}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground px-4 py-1 rounded-xl text-xs font-bold shadow-lg">
              Full Stack
            </div>
          </div>

          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-satisfy text-2xl"
            >
              Hi, I'm Pradip
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-white"
            >
              Full Stack <span className="text-glow-cyan text-accent">Developer</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-white/60 font-medium h-8">
              <span className="typing-cursor">{displayText}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-12 shadow-xl shadow-primary/20 group">
              View Projects
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full glass glass-hover border-white/10 text-white px-8 h-12">
              <FileText className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full text-white/70 hover:text-white hover:bg-white/5 px-8 h-12">
              <Send className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
