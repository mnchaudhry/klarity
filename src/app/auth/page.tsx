import React from 'react';
import { AuthForm } from '@/components/auth/AuthForm';
import { Shield } from 'lucide-react';
import Link from 'next/link';

export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-emerald/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <header className="absolute top-12 left-0 right-0 px-12 flex justify-between items-center z-10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2.5 rounded-xl bg-neon-emerald/10 border border-neon-emerald/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-neon-emerald/20">
            <Shield size={24} className="text-neon-emerald" />
          </div>
          <span className="text-xl font-bold tracking-tighter">Klarity</span>
        </Link>
        <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">v1.0.0</span>
      </header>
      
      <main className="w-full max-w-md relative z-10 pt-20">
        <AuthForm />
      </main>
      
      <footer className="absolute bottom-12 left-0 right-0 text-center z-10">
        <p className="text-xs text-white/10 font-mono tracking-widest uppercase italic">
          &quot;The secret of change is building the new.&quot;
        </p>
      </footer>
    </div>
  );
}
