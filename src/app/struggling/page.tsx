'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { ShieldAlert, Phone, MessageSquare, Heart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function StrugglingPage() {
  return (
    <div className="container mx-auto px-6 py-20 min-h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full text-center"
      >
        <div className="mb-8 flex justify-center">
          <div className="p-4 rounded-full bg-deep-crimson/10 text-deep-crimson animate-pulse">
            <ShieldAlert size={64} />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Take a Breath</h1>
        <p className="text-white/60 mb-12 text-lg">
          You&apos;re in a high-pressure moment. This feeling is temporary. You&apos;ve walked this path before, and you can walk through this now.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <GlassCard className="p-6 border-deep-crimson/20">
             <div className="p-3 rounded-xl bg-deep-crimson/10 text-deep-crimson w-fit mb-4">
                <Phone size={24} />
             </div>
             <h3 className="text-xl font-bold mb-2">Call for Help</h3>
             <p className="text-white/40 text-sm mb-4">Sometimes hearing a voice is all you need to break the cycle.</p>
             <GlassButton className="w-full justify-center">Call Emergency Contact</GlassButton>
          </GlassCard>

          <GlassCard className="p-6">
             <div className="p-3 rounded-xl bg-neon-emerald/10 text-neon-emerald w-fit mb-4">
                <MessageSquare size={24} />
             </div>
             <h3 className="text-xl font-bold mb-2">Write it Out</h3>
             <p className="text-white/40 text-sm mb-4">Transfer the pressure from your mind to the page. It helps.</p>
             <Link href="/journal/new">
                <GlassButton className="w-full justify-center">Start a Quick Journal</GlassButton>
             </Link>
          </GlassCard>
          
          <GlassCard className="p-6 md:col-span-2 flex items-center gap-6">
             <div className="p-4 rounded-full bg-white/5 text-white/40">
                <Heart size={32} />
             </div>
             <div>
                <h3 className="text-lg font-bold">Remember Your &apos;Why&apos;</h3>
                <p className="text-white/40 text-sm">You are doing this for your health, your family, and your future self.</p>
             </div>
          </GlassCard>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <Link href="/dashboard">
            <button className="flex items-center gap-2 text-white/20 hover:text-white transition-colors mx-auto">
              <ArrowLeft size={16} /> Back to Dashboard
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
