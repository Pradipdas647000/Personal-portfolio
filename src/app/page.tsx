
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AetherBackground } from "@/components/AetherBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { IntroLoader } from "@/components/IntroLoader";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="relative bg-background text-foreground min-h-screen">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroLoader key="loader" onComplete={() => setShowIntro(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <AetherBackground />
            <Navbar />
            
            <div className="relative z-10 space-y-24">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
