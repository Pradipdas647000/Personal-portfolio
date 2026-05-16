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
  const avatarImage = PlaceHolderImages.find(img => img.id === "avatar")?.imageUrl;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isMobile) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 40;
    const y = (e.clientY - top - height / 2) / 40;
    setMousePos({ x, y });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0 px-4 md:px-6 overflow-hidden"
    >
      {!isMobile && (
        <div 
          className="absolute w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none transition-transform duration-500 ease-out"
          style={{
            transform: `translate(${mousePos.x * 2.5}px, ${mousePos.y * 2.5}px)`,
            left: 'calc(50% - 300px)',
            top: 'calc(50% - 300px)',
          }}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-4xl"
      >
        <div 
          className="glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col items-center text-center space-y-8 md:space-y-10 transition-transform duration-500 ease-out shadow-2xl"
          style={{
            transform: isMobile ? 'none' : `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`
          }}
        >
          <div className="relative group">
            <div className="absolute inset-[-4px] bg-gradient-to-tr from-primary via-accent to-primary rounded-[1.8rem] md:rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 animate-pulse" />
            <div className="relative w-24 h-36 md:w-32 md:h-48 rounded-[1.6rem] md:rounded-[2.2rem] border-2 border-white/20 p-1 overflow-hidden glass shadow-2xl">
              {avatarImage ? (
                <Image 
                  src={avatarImage}
                  alt="Pradip"
                  width={180}
                  height={260}
                  priority
                  className="rounded-[1.2rem] md:rounded-[1.8rem] object-cover h-full w-full"
                  data-ai-hint="man portrait"
                />
              ) : (
                <div className="w-full h-full bg-primary/10 flex items-center justify-center rounded-[1.2rem] md:rounded-[1.8rem]">
                  <span className="text-primary font-satisfy text-4xl md:text-5xl">P</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-satisfy text-2xl md:text-3xl"
            >
              Hi, I'm <span className="text-glow-cyan text-accent">Pradip</span>
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", damping: 15 }}
              className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter text-white leading-[0.9] md:leading-[1.1]"
            >
              Full Stack <span className="text-glow-cyan text-accent">Developer</span>
            </motion.h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/60 font-medium min-h-[1.5em] px-4">
              <span className="typing-cursor">{displayText}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-12 md:h-14 text-base shadow-2xl shadow-primary/30 group"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex gap-3 w-full sm:w-auto">
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="flex-1 sm:w-auto rounded-full glass glass-hover border-white/10 text-white px-6 h-12 md:h-14"
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="flex-1 sm:w-auto rounded-full text-white/70 hover:text-white hover:bg-white/5 px-6 h-12 md:h-14"
                onClick={() => scrollToSection('contact')}
              >
                <Send className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
