
"use client";

import { useEffect, useState } from "react";

export function AetherBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background base */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-900/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white opacity-20" />

      {/* Floating Particles Simulation (Subtle CSS particles) */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 blur-[1px] animate-float"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDuration: (Math.random() * 10 + 10) + 's',
              animationDelay: (Math.random() * 5) + 's',
              opacity: Math.random() * 0.5 + 0.1
            }}
          />
        ))}
      </div>
      
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
