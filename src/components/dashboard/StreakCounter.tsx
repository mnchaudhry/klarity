'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StreakCounterProps {
  days: number;
  className?: string;
}

export const StreakCounter = ({ days, className }: StreakCounterProps) => {
  return (
    <div className={cn('relative flex flex-col items-center justify-center p-8', className)}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-neon-emerald/5 blur-[100px] rounded-full" />
      
      {/* Flame Icon with Pulse */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-0 text-neon-emerald/20"
      >
        <Flame size={240} strokeWidth={1} />
      </motion.div>

      {/* Main Counter */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-8xl md:text-9xl font-bold tracking-tighter text-white tabular-nums"
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={days}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30 
              }}
              className="inline-block"
            >
              {days}
            </motion.span>
          </AnimatePresence>
        </motion.div>
        
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-neon-emerald font-medium tracking-widest uppercase text-sm mt-2"
        >
          <Flame size={16} className="fill-current" />
          <span>Day Streak</span>
        </motion.div>
      </div>

      {/* Progress Ring (Subtle) */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
        <circle
          cx="50%"
          cy="50%"
          r="48%"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-white/5"
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r="48%"
          fill="none"
          stroke="url(#emerald-gradient)"
          strokeWidth="2"
          strokeDasharray="100 100"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: Math.max(0, 100 - (days % 30) * (100 / 30)) }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="emerald-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
