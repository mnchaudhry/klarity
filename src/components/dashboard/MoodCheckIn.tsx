'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  CloudRain, 
  Sun, 
  Lightning, 
  Moon, 
  CheckCircle 
} from '@phosphor-icons/react';

const MOODS = [
  { icon: CloudRain, label: 'STRUGGLING', value: 'struggling', color: 'text-accent-crimson', bg: 'bg-accent-crimson/10' },
  { icon: Moon, label: 'NEUTRAL', value: 'neutral', color: 'text-white/40', bg: 'bg-white/5' },
  { icon: Sun, label: 'BALANCED', value: 'balanced', color: 'text-accent-emerald', bg: 'bg-accent-emerald/10' },
  { icon: Lightning, label: 'EMPOWERED', value: 'empowered', color: 'text-amber-400', bg: 'bg-amber-400/10' },
];

export const MoodCheckIn = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <header className="flex items-center justify-between mb-8">
          <h3 className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase">
            STATE ANALYSIS
          </h3>
          {selected && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-3 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 flex items-center gap-2"
            >
              <CheckCircle size={12} weight="fill" className="text-accent-emerald" />
              <span className="text-[9px] font-bold text-accent-emerald tracking-widest uppercase">LOGGED</span>
            </motion.div>
          )}
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MOODS.map((mood) => {
            const isSelected = selected === mood.value;
            return (
              <motion.button
                key={mood.value}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelected(mood.value)}
                className={cn(
                  'flex flex-col items-center justify-center gap-4 p-5 rounded-2xl border transition-all duration-500 relative overflow-hidden',
                  isSelected 
                    ? 'border-white/20 bg-white/[0.05] shadow-[0_16px_32px_rgba(0,0,0,0.2)]' 
                    : 'border-white/[0.03] bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03]'
                )}
              >
                {/* Active Highlight */}
                {isSelected && (
                  <motion.div 
                    layoutId="mood-glow"
                    className="absolute inset-0 bg-gradient-to-t from-white/[0.05] to-transparent pointer-events-none" 
                  />
                )}

                <div className={cn(
                  'p-4 rounded-xl transition-all duration-500 relative',
                  isSelected ? mood.bg : 'bg-white/[0.02] group-hover:bg-white/[0.04]'
                )}>
                  <mood.icon 
                    size={28} 
                    weight={isSelected ? "fill" : "duotone"} 
                    className={cn('transition-all duration-500', isSelected ? mood.color : 'text-white/20')} 
                  />
                </div>
                
                <span className={cn(
                  'text-[9px] font-bold tracking-[0.15em] transition-colors',
                  isSelected ? 'text-white/80' : 'text-white/20'
                )}>
                  {mood.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
