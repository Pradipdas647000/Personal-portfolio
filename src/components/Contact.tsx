
"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, MapPin, Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const socials = [
  { icon: <Github className="w-6 h-6" />, label: "GitHub", href: "https://github.com/Pradipdas647000", color: "hover:text-white" },
  { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "https://www.linkedin.com/in/pradip-das-80262a2a9?utm_source=share_via&utm_content=profile&utm_medium=member_android", color: "hover:text-blue-400" },
  { icon: <Mail className="w-6 h-6" />, label: "Email", href: "mailto:daspradip1157@gmail.com", color: "hover:text-red-400" },
];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    
    // To make this fully functional, replace these placeholders with your actual EmailJS credentials:
    // Service ID, Template ID, and Public Key.
    // The email will be sent to the address configured in your EmailJS template.
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      formRef.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      formRef.current?.reset();
    })
    .catch((error) => {
      setIsSubmitting(false);
      console.error('EmailJS Error:', error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Could not send the message. Please try again later.",
      });
    });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-sm font-headline font-bold text-accent tracking-[0.3em] uppercase mb-4">Connect</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">Let's Create <span className="text-primary">Together</span></h3>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>
          </div>

          <div className="space-y-6">
            <a href="mailto:daspradip1157@gmail.com" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Email</p>
                <p className="text-white font-medium group-hover:text-primary transition-colors">daspradip1157@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Location</p>
                <p className="text-white font-medium">Kolkata, India</p>
              </div>
            </div>
            <a href="tel:8371074580" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Phone</p>
                <p className="text-white font-medium group-hover:text-primary transition-colors">8371074580</p>
              </div>
            </a>
          </div>

          <div className="flex space-x-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`w-14 h-14 rounded-2xl glass flex items-center justify-center transition-all duration-300 text-white/50 ${social.color} hover:scale-110 hover:border-primary/50`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
        >
          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Name</label>
                <Input name="user_name" required placeholder="John Doe" className="h-12 rounded-xl bg-white/5 border-white/10 focus:ring-primary focus:border-primary text-white placeholder:text-white/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Email</label>
                <Input name="user_email" required placeholder="john@example.com" type="email" className="h-12 rounded-xl bg-white/5 border-white/10 focus:ring-primary focus:border-primary text-white placeholder:text-white/20" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-1">Message</label>
              <Textarea name="message" required placeholder="How can I help you?" className="min-h-[150px] rounded-2xl bg-white/5 border-white/10 focus:ring-primary focus:border-primary text-white placeholder:text-white/20" />
            </div>
            <Button disabled={isSubmitting} className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-headline font-bold text-lg shadow-xl shadow-primary/20 group">
              {isSubmitting ? (
                <>
                  Sending...
                  <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
