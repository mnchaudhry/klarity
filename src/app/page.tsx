'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassButton } from '@/components/ui/GlassButton';
import { Sparkle, ShieldCheck, LockKey, ArrowRight, Play } from '@phosphor-icons/react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden flex flex-col items-center justify-center px-6 py-24 text-center bg-space-950">
      {/* Background Refraction Pulse */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent-emerald/10 blur-[160px] rounded-full animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-emerald/5 blur-[140px] rounded-full animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-accent-emerald text-[10px] font-bold tracking-[0.3em] uppercase mb-12 shadow-[0_8px_32px_rgba(16,185,129,0.05)]"
        >
          <Sparkle weight="fill" size={14} className="animate-spin-slow" />
          <span>Shatter the Cycle. Reclaim Clarity.</span>
        </motion.div>

        <h1 className="display-title mb-10 text-white drop-shadow-2xl">
          OVERCOME <br />
          <span className="text-accent-emerald drop-shadow-[0_0_30px_rgba(16,185,129,0.2)]">ADDICTION</span> <br />
          WITH PRECISION.
        </h1>

        <p className="text-base md:text-xl text-white/30 mb-16 max-w-2xl mx-auto leading-relaxed font-medium tracking-tight">
          Klarity is your private, premium companion for the journey to freedom. 
          Built for those who demand excellence and clarity in their recovery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
          <Link href="/dashboard" className="w-full sm:w-auto">
             <GlassButton size="lg" className="w-full sm:w-auto px-12 py-6" rightIcon={<ArrowRight size={20} weight="bold" />}>
               START JOURNEY
             </GlassButton>
          </Link>
          <GlassButton variant="secondary" size="lg" className="w-full sm:w-auto px-12 py-6" leftIcon={<Play size={20} weight="fill" />}>
             WATCH RECOVERY
          </GlassButton>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left max-w-4xl mx-auto"
        >
          {[
            { icon: ShieldCheck, title: 'PRIVACY PROTOCOL', desc: 'Secure, local-first architecture. Your data never leaves your device.' },
            { icon: LockKey, title: 'SECURE VAULT', desc: 'Encrypted reflection space for your most vulnerable breakthroughs.' },
            { icon: Sparkle, title: 'PRECISION COGNITION', desc: 'Pattern detection designed to identify triggers before they escalate.' },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/20 group-hover:text-accent-emerald group-hover:border-accent-emerald/30 transition-all duration-500 shadow-xl group-hover:shadow-accent-emerald/5">
                <feature.icon size={28} weight="duotone" />
              </div>
              <div>
                <h3 className="text-xs font-bold mb-3 tracking-[0.2em] text-white/80 group-hover:text-white transition-colors uppercase">{feature.title}</h3>
                <p className="text-white/20 text-xs leading-relaxed group-hover:text-white/40 transition-colors uppercase tracking-widest leading-loose">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer Branding */}
      <footer className="absolute bottom-12 left-0 right-0 flex justify-center opacity-10 hover:opacity-100 transition-all duration-700">
        <div className="flex items-center gap-4 px-6 py-2 rounded-full border border-white/[0.05] hover:border-white/[0.1] bg-white/[0.01]">
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-white/50">BUILD v1.0.4-STABLE</span>
          <div className="w-1 h-1 rounded-full bg-accent-emerald animate-pulse" />
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-white/50">OPERATIONAL</span>
        </div>
      </footer>
    </div>
  );
}
