'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassButton } from '@/components/ui/GlassButton';
import { Sparkles, Shield, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center p-6 text-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-emerald/5 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-deep-crimson/5 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-4xl"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5 text-neon-emerald text-sm font-medium mb-8"
        >
          <Sparkles size={14} />
          <span>Shatter the Cycle. Reclaim Clarity.</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
          Overcome <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-emerald to-emerald-400">Addiction</span> <br />
          with Precision.
        </h1>

        <p className="text-xl md:text-2xl text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed">
          Klarity is your private, premium companion for the journey to freedom. 
          Built for those who demand clarity and excellence in their recovery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/dashboard">
             <GlassButton size="lg" className="px-12 py-8 text-xl" rightIcon={<ArrowRight size={20} />}>
               Start Your Journey
             </GlassButton>
          </Link>
          <GlassButton size="lg" variant="secondary" className="px-12 py-8 text-xl">
             Watch Preview
          </GlassButton>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-left"
        >
          {[
            { icon: Shield, title: 'Privacy-First', desc: 'Your data never leaves your device. Total anonymity.' },
            { icon: Lock, title: 'Safe Vault', desc: 'Secure journal for your most vulnerable reflections.' },
            { icon: Sparkles, title: 'AI Insights', desc: 'Pattern detection to identify triggers before they hit.' },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="p-3 rounded-2xl bg-white/5 w-fit text-white/40">
                <feature.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer Branding */}
      <footer className="absolute bottom-12 left-0 right-0 text-center opacity-20 hover:opacity-100 transition-opacity">
        <span className="text-xs tracking-[0.4em] uppercase font-bold">Klarity Internal Build v1.0</span>
      </footer>
    </div>
  );
}
