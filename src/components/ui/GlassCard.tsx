'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'emerald' | 'crimson';
  interactive?: boolean;
}

export const GlassCard = ({
  children,
  className,
  variant = 'default',
  interactive = false,
}: GlassCardProps) => {
  const variants = {
    default: 'glass border-white/5',
    emerald: 'glass-emerald border-neon-emerald/10',
    crimson: 'glass border-deep-crimson/10',
  };

  return (
    <motion.div
      whileHover={interactive ? { y: -5, borderColor: 'rgba(255,255,255,0.1)' } : undefined}
      className={cn(
        'relative p-6 rounded-2xl overflow-hidden border',
        variants[variant as keyof typeof variants],
        className
      )}
    >
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
