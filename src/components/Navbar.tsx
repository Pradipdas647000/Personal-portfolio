
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 md:px-12",
        isScrolled ? "bg-background/60 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="font-satisfy text-lg text-white">PD</span>
          </div>
          <span className="font-satisfy text-xl tracking-tight hidden xs:block text-white">Pradip</span>
        </a>

        {/* Desktop Nav */}
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
                  className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
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
          className="md:hidden text-white p-2 glass rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-2xl z-40 p-6 flex flex-col space-y-6 overflow-y-auto"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  scrollToSection(link.href);
                }}
                className="text-2xl font-headline font-semibold text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
              <Button 
                variant="outline" 
                className="w-full h-12 rounded-xl border-white/10 bg-white/5 text-white"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.print();
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <Button 
                className="w-full h-12 bg-primary text-white rounded-xl"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection('#contact');
                }}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
