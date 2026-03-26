import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-neon-emerald/10 border border-neon-emerald/30 flex items-center justify-center">
            <span className="text-neon-emerald font-bold text-sm">K</span>
          </div>
          <span className="font-bold tracking-tight text-white/60">KLARITY</span>
        </div>
        
        <div className="flex gap-8 text-sm text-white/30">
          <Link href="#" className="hover:text-neon-emerald transition-colors">Privacy Protocol</Link>
          <Link href="#" className="hover:text-neon-emerald transition-colors">Safety Terms</Link>
          <Link href="#" className="hover:text-neon-emerald transition-colors">Our Philosophy</Link>
        </div>
        
        <div className="text-sm text-white/20">
          © 2025 Klarity. Precision Driven Recovery.
        </div>
      </div>
    </footer>
  );
};
