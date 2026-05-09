
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Terminal, Code, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projectsData = [
  {
    id: "syntax-checker",
    title: "Syntax Checker",
    desc: "Advanced real-time static analysis engine for TypeScript and JavaScript with deep AST inspection and architectural linting.",
    tech: ["React", "Node.js", "Monaco Editor", "AST"],
    size: "lg",
  },
  {
    id: "fitness-app",
    title: "Fitness App",
    desc: "Mobile health tracker with personalized workout routines and calorie counters.",
    tech: ["Flutter", "Firebase"],
    size: "md",
  },
  {
    id: "weather-app",
    title: "Weather App",
    desc: "Minimalist weather dashboard with precise local data and forecast visuals.",
    tech: ["Next.js", "Tailwind"],
    size: "md",
  },
  {
    id: "ai-drone",
    title: "AI Drone Project",
    desc: "Autonomous drone flight controller powered by computer vision algorithms.",
    tech: ["Python", "OpenCV", "C++"],
    size: "lg",
  },
  {
    id: "snake-game",
    title: "Snake Game",
    desc: "A retro-themed neon snake game with procedural level generation.",
    tech: ["Java", "Swing"],
    size: "sm",
  },
  {
    id: "chess-game",
    title: "Chess Game",
    desc: "A multiplayer strategic chess game with real-time move validation.",
    tech: ["React", "Socket.io"],
    size: "sm",
  },
];

export function Projects() {
  const projects = projectsData.map(p => ({
    ...p,
    image: PlaceHolderImages.find(img => img.id === p.id)?.imageUrl,
  }));

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-sm font-headline font-bold text-accent tracking-[0.3em] uppercase mb-4">Showcase</h2>
        <h3 className="text-4xl md:text-5xl font-headline font-bold text-white">Featured <span className="text-primary">Creations</span></h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group relative glass rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 shadow-2xl ${
              project.size === 'lg' ? 'md:col-span-2' : ''
            }`}
          >
            {/* Image layer */}
            <div className="absolute inset-0 z-0">
              {project.image && (
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-40"
                  data-ai-hint={project.id.replace('-', ' ')}
                />
              )}
              
              {/* Specialized Background Decorator for Syntax Checker */}
              {project.id === "syntax-checker" && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="absolute top-10 left-10 font-code text-[10px] text-accent space-y-1">
                    <p>const analyze = (node) =&gt; &#123;</p>
                    <p className="pl-4">if (node.type === "Identifier") &#123;</p>
                    <p className="pl-8 text-primary">return validate(node.name);</p>
                    <p className="pl-4">&#125;</p>
                    <p>&#125;</p>
                  </div>
                  <div className="absolute bottom-10 right-10 flex gap-2">
                    <Terminal className="w-12 h-12 text-primary/40" />
                    <Code className="w-12 h-12 text-accent/40" />
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>

            {/* Content layer */}
            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
              <div className="space-y-3 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <Badge key={t} variant="secondary" className="bg-white/5 backdrop-blur-md text-[10px] text-white/80 border-white/10 uppercase tracking-tighter">
                      {t}
                    </Badge>
                  ))}
                  {project.id === "syntax-checker" && (
                    <Badge variant="outline" className="border-accent/30 text-accent text-[9px] animate-pulse">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Live Analysis
                    </Badge>
                  )}
                </div>
                <h4 className="text-2xl md:text-3xl font-headline font-bold text-white flex items-center gap-2">
                  {project.title}
                  {project.id === "syntax-checker" && <Terminal className="w-6 h-6 text-primary" />}
                </h4>
                <p className="text-white/60 text-sm line-clamp-2 max-w-md">
                  {project.desc}
                </p>
                
                <div className="flex items-center gap-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full glass border-white/10 text-white hover:bg-white/10">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
