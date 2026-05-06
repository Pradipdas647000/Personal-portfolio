"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "TechNova Solutions",
    location: "Remote",
    period: "2023 - Present",
    description: [
      "Leading the development of a high-performance SaaS dashboard using Next.js 15 and Genkit AI.",
      "Optimized database queries in MongoDB resulting in a 40% reduction in API response times.",
      "Mentoring a team of 5 junior developers and implementing modern CI/CD workflows."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Firebase", "Genkit"]
  },
  {
    role: "Web Developer Intern",
    company: "Digital Horizon Studio",
    location: "Indore, India",
    period: "2022 - 2023",
    description: [
      "Developed responsive UI components using React and ShadCN UI.",
      "Integrated third-party APIs for real-time data visualization features.",
      "Collaborated with UX designers to improve mobile accessibility and performance."
    ],
    tech: ["React", "JavaScript", "Node.js", "Express", "CSS"]
  },
  {
    role: "Open Source Contributor",
    company: "GitHub / Community Projects",
    location: "Global",
    period: "2021 - 2022",
    description: [
      "Contributed to several widely-used libraries in the React ecosystem.",
      "Authored documentation and fixed critical security vulnerabilities in community modules.",
      "Built and maintained a niche UI utility library with over 500+ monthly downloads."
    ],
    tech: ["TypeScript", "Git", "Markdown", "Vitest"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-sm font-headline font-bold text-accent tracking-[0.3em] uppercase mb-4">Professional</h2>
        <h3 className="text-4xl md:text-5xl font-headline font-bold text-white">Work <span className="text-primary">Experience</span></h3>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group hover:border-primary/30 transition-all"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-primary/10 transition-all" />
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-accent font-bold tracking-widest uppercase text-xs">
                  <Briefcase className="w-4 h-4" />
                  {exp.company}
                </div>
                <h4 className="text-2xl md:text-3xl font-headline font-bold text-white">{exp.role}</h4>
              </div>
              
              <div className="flex flex-wrap gap-4 text-white/50 text-sm">
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border-white/5">
                  <Calendar className="w-4 h-4 text-primary" />
                  {exp.period}
                </div>
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border-white/5">
                  <MapPin className="w-4 h-4 text-primary" />
                  {exp.location}
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8 relative z-10">
              <ul className="space-y-3">
                {exp.description.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-white/70 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
              {exp.tech.map((t) => (
                <Badge 
                  key={t} 
                  variant="secondary" 
                  className="bg-white/5 text-white/80 border-white/10 px-4 py-1.5 rounded-xl hover:bg-primary/20 hover:text-white transition-colors"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
