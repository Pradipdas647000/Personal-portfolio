
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const targetId = id.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12",
        isScrolled ? "bg-background/40 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="font-satisfy text-lg text-white">PD</span>
          </div>
          <span className="font-satisfy text-xl tracking-tight hidden sm:block text-white">Pradip</span>
        </a>

        {/* Desktop Nav with Liquid Glass Effect */}
        <div 
          className="hidden md:flex items-center glass p-1 rounded-full border border-white/10 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(idx)}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={cn(
                "relative px-5 py-2 text-sm font-medium transition-all duration-300 z-10 rounded-full",
                hoveredIndex === idx ? "text-white" : "text-white/60"
              )}
            >
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="navbar-liquid-bg"
                  className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 30,
                    opacity: { duration: 0.2 }
                  }}
                />
              )}
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
            onClick={() => window.print()}
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/20"
            onClick={() => scrollToSection('#contact')}
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-xl z-40 p-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                scrollToSection(link.href);
              }}
              className="text-2xl font-headline font-semibold text-white/70 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
            <Button 
              variant="outline" 
              className="w-full rounded-xl border-white/10 bg-white/5 text-white"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.print();
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <Button 
              className="w-full bg-primary text-white rounded-xl"
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToSection('#contact');
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
