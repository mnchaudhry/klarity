'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { cn } from '@/lib/utils';

const moods = [
  { emoji: '😔', label: 'Struggling', value: 1 },
  { emoji: '😐', label: 'Neutral', value: 3 },
  { emoji: '😊', label: 'Good', value: 5 },
  { emoji: '🔥', label: 'Empowered', value: 7 },
];

export const MoodCheckIn = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-medium mb-4 text-white/80">Daily Check-in</h3>
      <div className="flex justify-between gap-4">
        {moods.map((mood) => (
          <motion.button
            key={mood.value}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelected(mood.value)}
            className={cn(
              'flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all duration-300',
              selected === mood.value 
                ? 'bg-neon-emerald/10 border-neon-emerald text-white' 
                : 'border-white/5 text-white/40 hover:text-white/60 hover:border-white/10'
            )}
          >
            <span className="text-3xl">{mood.emoji}</span>
            <span className="text-[10px] uppercase tracking-tighter font-bold">{mood.label}</span>
          </motion.button>
        ))}
      </div>
    </GlassCard>
  );
};
