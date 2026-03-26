'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

export interface GlassButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const GlassButton = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  isLoading,
  ...props
}: GlassButtonProps) => {
  const baseClasses = 'relative inline-flex items-center justify-center rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden active-tactile active:scale-[0.98] active:-translate-y-[1px]';
  
  const variants = {
    primary: 'bg-accent-emerald/[0.05] text-accent-emerald border border-accent-emerald/20 hover:bg-accent-emerald/[0.08] hover:border-accent-emerald/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]',
    secondary: 'bg-white/[0.02] text-white/80 border border-white/[0.08] hover:bg-white/[0.04] hover:border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]',
    outline: 'bg-transparent text-white/40 border border-white/5 hover:text-white/80 hover:border-white/20',
    ghost: 'bg-transparent text-white/30 hover:text-white hover:bg-white/[0.03]',
    danger: 'bg-accent-crimson/[0.05] text-accent-crimson border border-accent-crimson/20 hover:bg-accent-crimson/[0.08] hover:border-accent-crimson/40 hover:shadow-[0_0_20px_rgba(207,20,43,0.15)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs font-bold tracking-wider',
    md: 'px-6 py-4 text-sm font-bold tracking-[0.1em]',
    lg: 'px-8 py-5 text-base font-bold tracking-[0.1em]',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      className={cn(
        baseClasses,
        variants[variant as keyof typeof variants],
        sizes[size as keyof typeof sizes],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {/* Refraction effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-3">
        {isLoading ? (
          <div className="w-5 h-5 border-[2px] border-current border-t-transparent rounded-full animate-spin transition-all" />
        ) : (
          <>
            {leftIcon && <span className="opacity-80 transition-transform group-hover:scale-110">{leftIcon}</span>}
            <span className="uppercase">{children}</span>
            {rightIcon && <span className="opacity-80 transition-transform group-hover:translate-x-1">{rightIcon}</span>}
          </>
        )}
      </div>

      {/* Gloss effect overlay */}
      <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -rotate-45 -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
    </motion.button>
  );
};
