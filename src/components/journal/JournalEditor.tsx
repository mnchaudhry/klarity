'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { useJournalStore } from '@/store/useJournalStore';
import { Sparkles, Save, ArrowLeft, Smile } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const JournalEditor = () => {
  const [content, setContent] = useState('');
  const [mood, setMood] = useState(3);
  const { addEntry } = useJournalStore();
  const router = useRouter();

  const handleSave = () => {
    if (!content.trim()) return;
    addEntry({ content, mood, tags: [] });
    router.push('/dashboard');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-3xl mx-auto w-full px-6 py-12"
    >
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Today&apos;s Reflection</h1>
          <p className="text-white/40">Transfer your thoughts to the page.</p>
        </div>
        <button onClick={() => router.back()} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
          <ArrowLeft size={18} className="text-white/40" />
          <span className="text-sm text-white/40 font-medium">Cancel</span>
        </button>
      </header>

      <GlassCard className="p-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-white/30 font-bold">How are you feeling?</span>
          <div className="flex gap-2">
             {[1, 3, 5, 7].map((m) => (
                <button
                  key={m}
                  onClick={() => setMood(m)}
                  className={`p-2 rounded-lg transition-all ${mood === m ? 'bg-neon-emerald/20 text-neon-emerald' : 'bg-white/5 text-white/20'}`}
                >
                  <Smile size={18} />
                </button>
             ))}
          </div>
        </div>

        <textarea
          autoFocus
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What&apos;s on your mind? Be honest. This is for you..."
          className="w-full h-80 bg-transparent border-none outline-none text-xl leading-relaxed text-white/80 placeholder:text-white/10 resize-none"
        />

        <div className="flex justify-end mt-8">
          <GlassButton
            onClick={handleSave}
            disabled={!content.trim()}
            leftIcon={<Save size={18} />}
            className="px-8 py-6"
          >
            Save Reflection
          </GlassButton>
        </div>
      </GlassCard>

      <div className="mt-8 flex items-center gap-2 text-white/20 text-sm justify-center">
        <Sparkles size={14} />
        <span>Your reflections are stored locally and encrypted.</span>
      </div>
    </motion.div>
  );
};
