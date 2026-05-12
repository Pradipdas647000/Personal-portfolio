
"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Software Tester Intern",
    company: "Excite Foundry Ltd",
    location: "Remote",
    period: "July 2025",
    description: [
      "Worked on the Superchargeme project, testing AI-generated outputs and contributing to quality assurance processes.",
      "Analyzed system outputs and contributed to real-world software workflows while collaborating with a professional development team.",
      "Gained hands-on experience in software testing, analytical problem-solving, and real-world industry workflows."
    ],
    tech: ["Software Testing", "AI QA", "Superchargeme", "QA Workflow"]
  },
  {
    role: "Full Stack Developer",
    company: "Professional Freelance / Projects",
    location: "Indore, India",
    period: "2023 - Present",
    description: [
      "Built modern web and mobile applications using React, Next.js, Node.js, Flutter, MongoDB, and Firebase.",
      "Focused on creating responsive UIs, seamless backend integrations, and interactive user experiences.",
      "Developed high-performance digital experiences tailored to complex project requirements."
    ],
    tech: ["React", "Next.js", "Node.js", "Flutter", "MongoDB", "Firebase"]
  },
  {
    role: "AI & Research Projects",
    company: "Academic / Research Lab",
    location: "Research Domain",
    period: "2024 - 2025",
    description: [
      "Worked on deep learning and UAV-based research projects involving drone image analysis and land area estimation.",
      "Developed AI-powered solutions for real-world applications including computer vision models for image recognition.",
      "Implemented advanced algorithms for UAV-based land assessment and automated monitoring systems."
    ],
    tech: ["Python", "Deep Learning", "UAV", "Drone Analysis", "OpenCV"]
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
