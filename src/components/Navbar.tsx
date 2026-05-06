
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <span className="font-headline font-bold text-lg">A</span>
          </div>
          <span className="font-headline font-bold text-xl tracking-tight hidden sm:block">Aetherfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 glass px-6 py-2.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 rounded-full">
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/20">
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
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-headline font-semibold text-white/70 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
            <Button variant="outline" className="w-full rounded-xl border-white/10 bg-white/5">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <Button className="w-full bg-primary text-white rounded-xl">
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
