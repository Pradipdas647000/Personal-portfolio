
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Send, MapPin, Phone, Loader2, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const socials = [
  { icon: <Github className="w-5 h-5 md:w-6 md:h-6" />, label: "GitHub", href: "https://github.com/Pradipdas647000", color: "hover:text-white" },
  { icon: <Linkedin className="w-5 h-5 md:w-6 md:h-6" />, label: "LinkedIn", href: "https://www.linkedin.com/in/pradip-das-80262a2a9", color: "hover:text-blue-400" },
  { icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />, label: "Email", href: "mailto:pradipdas647000@gmail.com", color: "hover:text-red-400" },
];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessCard, setShowSuccessCard] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const serviceId = 'service_7d0jia9';
  const templateId = 'template_fpmdurp';
  const publicKey = 'cppoNUZkSq1FrNiJn';

  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, [publicKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    
    try {
      const templateParams = {
        user_name: formRef.current.user_name.value,
        user_email: formRef.current.user_email.value,
        message: formRef.current.message.value,
        to_email: 'pradipdas647000@gmail.com'
      };

      const result = await emailjs.send(
        serviceId, 
        templateId, 
        templateParams,
        publicKey
      );

      if (result.status === 200) {
        setShowSuccessCard(true);
        formRef.current.reset();
      }
    } catch (error: any) {
      const errorMessage = error?.text || error?.message || "Unknown error";
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: `Error: ${errorMessage}. Please check your credentials.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-sm font-headline font-bold text-accent tracking-[0.3em] uppercase mb-4">Connect</h2>
            <h3 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6 leading-[1.1]">Let's Create <span className="text-primary">Together</span></h3>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-md">
              Have a project in mind or just want to say hi? I'm available for freelance work and collaboration.
            </p>
          </div>

          <div className="space-y-8">
            <a href="mailto:pradipdas647000@gmail.com" className="flex items-center space-x-5 group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl glass flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-xl">
                <Mail className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-1">Email</p>
                <p className="text-white text-lg font-medium group-hover:text-primary transition-colors truncate">pradipdas647000@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center space-x-5">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl glass flex items-center justify-center text-primary shadow-xl">
                <MapPin className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-1">Location</p>
                <p className="text-white text-lg font-medium">Kolkata, India</p>
              </div>
            </div>
            <a href="tel:8371074580" className="flex items-center space-x-5 group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl glass flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-xl">
                <Phone className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-1">Phone</p>
                <p className="text-white text-lg font-medium group-hover:text-primary transition-colors">8371074580</p>
              </div>
            </a>
          </div>

          <div className="flex space-x-5 pt-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl glass flex items-center justify-center transition-all duration-300 text-white/50 ${social.color} hover:scale-110 hover:border-primary/50 shadow-lg`}
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
          className="glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden shadow-2xl"
        >
          <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-white/60 ml-1 uppercase tracking-widest">Name</label>
                <Input 
                  name="user_name" 
                  required 
                  placeholder="Your Name" 
                  className="h-14 rounded-2xl bg-white/5 border-white/10 focus:ring-primary focus:border-primary text-white placeholder:text-white/20 px-6 text-lg" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-white/60 ml-1 uppercase tracking-widest">Email</label>
                <Input 
                  name="user_email" 
                  required 
                  placeholder="Your Email" 
                  type="email" 
                  className="h-14 rounded-2xl bg-white/5 border-white/10 focus:ring-primary focus:border-primary text-white placeholder:text-white/20 px-6 text-lg" 
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-sm font-bold text-white/60 ml-1 uppercase tracking-widest">Message</label>
              <Textarea 
                name="message" 
                required 
                placeholder="How can I help you?" 
                className="min-h-[180px] rounded-3xl bg-white/5 border-white/10 focus:ring-primary focus:border-primary text-white placeholder:text-white/20 px-6 py-4 text-lg" 
              />
            </div>
            <Button 
              type="submit"
              disabled={isSubmitting} 
              className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-headline font-bold text-xl shadow-2xl shadow-primary/30 group"
            >
              {isSubmitting ? (
                <>
                  Sending...
                  <Loader2 className="w-6 h-6 ml-3 animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-6 h-6 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {showSuccessCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="glass max-w-md w-full p-10 md:p-14 rounded-[3rem] text-center relative overflow-hidden shadow-2xl border-white/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16" />
              
              <button 
                onClick={() => setShowSuccessCard(false)}
                className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-primary/20 flex items-center justify-center text-primary mx-auto mb-8 shadow-inner">
                <CheckCircle2 className="w-12 h-12 md:w-14 md:h-14" />
              </div>

              <h3 className="font-satisfy text-4xl md:text-5xl text-white mb-6 text-glow-cyan">Thank You!</h3>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10">
                Your message has been received successfully. I will get back to you soon.
              </p>

              <Button 
                onClick={() => setShowSuccessCard(false)}
                className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-headline font-bold text-xl shadow-2xl shadow-primary/30"
              >
                Awesome
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
