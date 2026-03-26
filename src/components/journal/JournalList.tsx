'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useJournalStore, JournalEntry } from '@/store/useJournalStore';
import { GlassCard } from '@/components/ui/GlassCard';
import { Calendar, Trash2, Smile } from 'lucide-react';

export const JournalList = () => {
  const { entries, deleteEntry } = useJournalStore();

  if (entries.length === 0) {
    return (
      <div className="text-center py-20 opacity-20">
        <p className="text-xl">Your story starts here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {entries.map((entry: JournalEntry, i: number) => (
        <motion.div
          key={entry.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <GlassCard className="p-6 group relative">
            <header className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3 text-white/30 text-xs">
                <Calendar size={14} />
                <span>{new Date(entry.date).toLocaleDateString(undefined, { dateStyle: 'long' })}</span>
                <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded">
                   <Smile size={10} /> Mood: {entry.mood}
                </span>
              </div>
              <button
                onClick={() => deleteEntry(entry.id)}
                className="opacity-0 group-hover:opacity-100 p-2 text-white/10 hover:text-deep-crimson transition-all"
              >
                <Trash2 size={16} />
              </button>
            </header>
            <p className="text-white/60 leading-relaxed line-clamp-3">
              {entry.content}
            </p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
};
