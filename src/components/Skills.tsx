
"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Terminal, 
  Database, 
  Smartphone, 
  Coffee, 
  Palette, 
  Flame, 
  Cpu 
} from "lucide-react";

const skills = [
  { name: "JavaScript", icon: <Code2 className="w-8 h-8" />, color: "text-yellow-400" },
  { name: "Python", icon: <Terminal className="w-8 h-8" />, color: "text-blue-500" },
  { name: "C / C++", icon: <Cpu className="w-8 h-8" />, color: "text-blue-300" },
  { name: "Java", icon: <Coffee className="w-8 h-8" />, color: "text-red-400" },
  { name: "React", icon: <Code2 className="w-8 h-8" />, color: "text-blue-400" },
  { name: "Next.js", icon: <Layers className="w-8 h-8" />, color: "text-white" },
  { name: "Node.js", icon: <Terminal className="w-8 h-8" />, color: "text-green-400" },
  { name: "Express.js", icon: <Cpu className="w-8 h-8" />, color: "text-gray-300" },
  { name: "MongoDB", icon: <Database className="w-8 h-8" />, color: "text-green-500" },
  { name: "Firebase", icon: <Flame className="w-8 h-8" />, color: "text-orange-400" },
  { name: "Flutter", icon: <Smartphone className="w-8 h-8" />, color: "text-cyan-400" },
  { name: "Tailwind", icon: <Palette className="w-8 h-8" />, color: "text-sky-400" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-headline font-bold text-accent tracking-[0.3em] uppercase mb-4">Capabilities</h2>
        <h3 className="text-4xl md:text-5xl font-headline font-bold text-white">Technical <span className="text-primary">Arsenal</span></h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            className="glass group p-8 rounded-3xl flex flex-col items-center justify-center space-y-4 text-center cursor-default border border-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(102,64,255,0.2)] transition-all duration-300"
          >
            <div className={`${skill.color} transition-transform group-hover:scale-110 duration-300 drop-shadow-[0_0_8px_currentColor]`}>
              {skill.icon}
            </div>
            <span className="text-white font-medium tracking-wide">{skill.name}</span>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ delay: 0.5 + index * 0.05, duration: 1 }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-primary to-accent" 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
