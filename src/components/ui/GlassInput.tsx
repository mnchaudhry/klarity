'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const GlassInput = ({
  label,
  error,
  icon,
  className,
  ...props
}: GlassInputProps) => {
  return (
    <div className="w-full flex flex-col gap-2 text-left group/field">
      {label && (
        <label className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase ml-1 transition-colors group-focus-within/field:text-accent-emerald">
          {label}
        </label>
      )}
      <div className="relative overflow-hidden rounded-2xl transition-all duration-500">
        {/* Refraction layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none opacity-0 group-hover/field:opacity-100 transition-opacity" />
        
        <input
          className={cn(
            'w-full px-5 py-4 bg-white/[0.02] border border-white/[0.06] rounded-2xl outline-none transition-all duration-300',
            'text-white text-base placeholder:text-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]',
            'focus:border-accent-emerald/40 focus:bg-white/[0.04] focus:shadow-[0_0_20px_rgba(16,185,129,0.03)]',
            'group-hover/field:border-white/10 hover:bg-white/[0.03]',
            error && 'border-accent-crimson/50 focus:border-accent-crimson/80',
            icon && 'pl-12',
            className
          )}
          {...props}
        />
        
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within/field:text-accent-emerald transition-colors">
            {icon}
          </div>
        )}

        {/* Focus border animation */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-0 bg-accent-emerald shadow-[0_0_10px_#10B981] transition-all duration-500 group-focus-within/field:w-1/2 opacity-50" />
      </div>
      
      {error && (
        <p className="text-accent-crimson text-[10px] font-bold tracking-tight mt-1 ml-1 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
          {error}
        </p>
      )}
    </div>
  );
};
