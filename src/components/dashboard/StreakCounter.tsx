'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Sparkle } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface StreakCounterProps {
  days: number;
  className?: string;
}

export const StreakCounter = ({ days, className }: StreakCounterProps) => {
  return (
    <div className={cn('relative flex flex-col items-center justify-center p-12 w-full', className)}>
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-accent-emerald/5 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />
      <div className="absolute inset-0 bg-accent-emerald/2 blur-[80px] rounded-full animate-ping pointer-events-none opacity-20" style={{ animationDuration: '6s' }} />

      {/* Flame Icon with Pulse */}
      <motion.div
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 4, -4, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-0 text-accent-emerald pointer-events-none"
      >
        <Flame size={480} weight="fill" />
      </motion.div>

      {/* Top Floating Badge */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-10 flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-3xl shadow-[0_16px_32px_rgba(0,0,0,0.2)]"
      >
        <Sparkle weight="fill" size={14} className="text-accent-emerald animate-spin-slow" />
        <span className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase italic">LEVEL 12 CLEARANCE</span>
      </motion.div>

      {/* Main Counter */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, filter: 'blur(20px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10rem] md:text-[14rem] font-black tracking-[-0.04em] text-white tabular-nums leading-[0.85] select-none"
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={days}
              initial={{ y: 100, opacity: 0, filter: 'blur(30px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -100, opacity: 0, filter: 'blur(30px)' }}
              transition={{ 
                type: 'spring', 
                stiffness: 150, 
                damping: 25 
              }}
              className="inline-block"
            >
              {days}
            </motion.span>
          </AnimatePresence>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex flex-col items-center gap-6 mt-8"
        >
          <div className="flex items-center gap-4 group">
            <div className="h-[1px] w-12 bg-white/[0.05] group-hover:w-24 group-hover:bg-accent-emerald/30 transition-all duration-700" />
            <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-white/[0.05] bg-white/[0.01]">
               <Flame size={16} weight="fill" className="text-accent-emerald" />
               <span className="text-[11px] font-black tracking-[0.4em] text-white/40 uppercase group-hover:text-accent-emerald transition-colors">DAYS OF FREEDOM</span>
            </div>
            <div className="h-[1px] w-12 bg-white/[0.05] group-hover:w-24 group-hover:bg-accent-emerald/30 transition-all duration-700" />
          </div>

          <div className="px-5 py-2 rounded-xl bg-accent-emerald/[0.03] border border-accent-emerald/[0.1] backdrop-blur-xl">
             <span className="text-[9px] font-bold tracking-[0.2em] text-accent-emerald/60 uppercase">NEXT MILESTONE: 14 DAYS</span>
          </div>
        </motion.div>
      </div>

      {/* Progress Ring (Ultra Subtle) */}
      <div className="absolute inset-0 flex items-center justify-center p-0 md:p-12 opacity-40">
        <svg className="w-full h-full -rotate-90 pointer-events-none Drop-shadow-[0_0_40px_rgba(16,185,129,0.1)]">
          <circle
            cx="50%"
            cy="50%"
            r="49%"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-white/5"
            strokeDasharray="4 8"
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r="49%"
            fill="none"
            stroke="url(#streak-gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="100 100"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: Math.max(0, 100 - (days % 30) * (100 / 30)) }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          />
          <defs>
            <linearGradient id="streak-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
