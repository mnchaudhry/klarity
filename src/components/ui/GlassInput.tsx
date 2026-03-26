'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const GlassInput = ({
  label,
  error,
  className,
  ...props
}: GlassInputProps) => {
  return (
    <div className="w-full flex flex-col gap-1.5 text-left">
      {label && (
        <label className="text-white/40 text-xs font-mono tracking-widest uppercase ml-1">
          {label}
        </label>
      )}
      <div className="relative group">
        <input
          className={cn(
            'w-full px-5 py-3.5 rounded-xl glass border border-white/10 outline-none transition-all duration-300',
            'text-white placeholder:text-white/20',
            'focus:border-neon-emerald/50 focus:bg-white/[0.03] focus:ring-1 focus:ring-neon-emerald/20',
            'group-hover:border-white/20',
            error && 'border-deep-crimson/50 focus:border-deep-crimson/80 focus:ring-deep-crimson/20',
            className
          )}
          {...props}
        />
        {/* Animated underlines/glows could go here */}
      </div>
      {error && (
        <span className="text-deep-crimson text-[10px] font-medium ml-1 flex items-center gap-1">
          {error}
        </span>
      )}
    </div>
  );
};
