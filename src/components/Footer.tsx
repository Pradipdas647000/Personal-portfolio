
"use client";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="font-satisfy text-primary">PD</span>
          </div>
          <span className="font-satisfy tracking-tight text-white/60">Pradip</span>
        </div>
        
        <p>© {new Date().getFullYear()} Pradip. All rights reserved.</p>
        
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#contact" className="hover:text-primary transition-colors">Say Hello</a>
        </div>
      </div>
    </footer>
  );
}
