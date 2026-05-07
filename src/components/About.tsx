
"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Zap } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "Learning Journey",
    desc: "Mastering Next.js 15, AI integrations, and advanced cloud architectures.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    year: "2023",
    title: "Internship Experience",
    desc: "Worked on real-world web applications and collaborative agile environments.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: "2024",
    title: "Frontend Development Journey",
    desc: "Entered the world of frontend development and started building projects while exploring modern UI design, responsive websites, and interactive user experiences.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    year: "2023",
    title: "Started the Journey",
    desc: "Joined university and started learning programming and web development, building a strong foundation in software development and problem-solving.",
    icon: <Award className="w-5 h-5" />,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
          
          <h2 className="text-sm font-headline font-bold text-accent tracking-[0.3em] uppercase mb-4">Discovery</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold text-white mb-8">About <span className="text-primary">Journey</span></h3>
          
          <div className="space-y-6 text-white/70 leading-relaxed text-lg">
            <p>
              Hi, I’m Pradip — a passionate Full Stack Developer focused on building modern, interactive, and user-friendly digital experiences. I enjoy turning ideas into real-world projects through clean design, efficient code, and creative problem-solving.
            </p>
            <p>
              I work with technologies like <span className="text-white font-semibold">React, Node.js, Flutter, Python, C/C++, and SQL</span> to create responsive web and mobile applications. I’m also deeply interested in <span className="text-white font-semibold">Artificial Intelligence, Drone Technology</span>, and modern UI/UX experiences.
            </p>
            <p>
              Currently, I’m exploring innovative ways to combine software with real-world technology while continuously learning and building impactful projects.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-headline font-bold text-white pl-4 border-l-4 border-primary">Timeline</h3>
          
          <div className="relative space-y-12 before:absolute before:inset-0 before:left-8 before:w-px before:bg-white/10">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-16 group"
              >
                <div className="absolute left-4 top-0 -translate-x-1/2 w-8 h-8 rounded-full glass border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all z-10 shadow-lg">
                  {item.icon}
                </div>
                <div className="glass p-6 rounded-2xl glass-hover">
                  <span className="text-accent font-bold text-sm mb-1 block">{item.year}</span>
                  <h4 className="text-xl font-headline font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
