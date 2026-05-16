
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projectsData = [
  {
    id: "syntax-checker",
    title: "Syntax Checker",
    desc: "Advanced real-time static analysis engine for TypeScript and JavaScript with deep AST inspection.",
    tech: ["React", "Node.js", "Monaco Editor", "AST"],
    demoUrl: "https://syntax-iq-one.vercel.app/",
    repoUrl: "https://github.com/Pradipdas647000/SyntaxIQ",
  },
  {
    id: "exam-focus",
    title: "Exam Focus",
    desc: "A comprehensive educational platform designed to help students prepare for competitive exams with curated resources.",
    tech: ["Next.js", "Firebase", "Tailwind"],
    demoUrl: "https://exam-focus.vercel.app",
    repoUrl: "#",
  },
  {
    id: "fitness-app",
    title: "Fitness App",
    desc: "Mobile health tracker with personalized workout routines and calorie counters.",
    tech: ["Flutter", "Firebase"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "weather-app",
    title: "Weather App",
    desc: "Minimalist weather dashboard with precise local data and forecast visuals.",
    tech: ["Next.js", "Tailwind"],
    demoUrl: "https://sky-cast-weather-webapp.vercel.app",
    repoUrl: "https://github.com/Pradipdas647000/SkyCast-weather-webapp",
  },
  {
    id: "ai-drone",
    title: "AI Drone Project",
    desc: "Autonomous drone flight controller powered by computer vision algorithms.",
    tech: ["Python", "OpenCV", "C++"],
    status: "ongoing",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    desc: "A premium, futuristic personal portfolio built with Next.js, Framer Motion, and Tailwind CSS.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    demoUrl: "https://personal-portfolio-beta-eight-48.vercel.app",
    repoUrl: "https://github.com/Pradipdas647000/Personal-portfolio",
  },
  {
    id: "chess-game",
    title: "Chess Game",
    desc: "A multiplayer strategic chess game with real-time move validation.",
    tech: ["React", "Socket.io"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

export function Projects() {
  const projects = projectsData.map(p => ({
    ...p,
    image: PlaceHolderImages.find(img => img.id === p.id)?.imageUrl,
    imageHint: PlaceHolderImages.find(img => img.id === p.id)?.imageHint,
  }));

  return (
    <section id="projects" className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="mb-12 md:mb-16">
        <h2 className="text-sm font-headline font-bold text-accent tracking-[0.3em] uppercase mb-4">Showcase</h2>
        <h3 className="text-3xl md:text-5xl font-headline font-bold text-white leading-tight">Featured <span className="text-primary">Creations</span></h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative glass rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 shadow-2xl flex flex-col min-h-[400px]"
          >
            <div className="absolute inset-0 z-0">
              {project.image && (
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-40"
                  data-ai-hint={project.imageHint || project.id.replace('-', ' ')}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>

            <div className="relative z-10 p-8 flex flex-col flex-1 justify-end h-full">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <Badge key={t} variant="secondary" className="bg-white/5 backdrop-blur-md text-[10px] text-white/80 border-white/10 uppercase tracking-tighter">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div>
                  <h4 className="text-2xl font-headline font-bold text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-white/60 text-sm line-clamp-3 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-y-2 md:group-hover:translate-y-0">
                  <Button 
                    asChild
                    size="sm" 
                    className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 h-10 px-6"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button 
                    asChild
                    size="sm" 
                    variant="outline" 
                    className="rounded-full glass border-white/10 text-white hover:bg-white/10 h-10 px-6"
                  >
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
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
