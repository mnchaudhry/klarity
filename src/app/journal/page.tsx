'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassButton } from '@/components/ui/GlassButton';
import { 
  BookOpen, 
  ChatTeardropText, 
  Tag, 
  Clock, 
  Sparkle,
  Plus,
  ArrowRight,
  Eye,
  Archive,
  Binoculars,
  PencilCircle
} from '@phosphor-icons/react';
import Link from 'next/link';

const MOCK_ENTRIES = [
  {
    id: 1,
    date: 'OCT 24, 2024',
    time: '22:45 UTC',
    title: 'THE URGE ARCHIVE',
    preview: 'Today the tension was high near the evening. I identified the trigger as isolation. I chose an external anchor and it subsided...',
    tags: ['CRITICAL', 'ANALYSIS'],
    type: 'REFLECTION'
  },
  {
    id: 2,
    date: 'OCT 22, 2024',
    time: '08:12 UTC',
    title: 'NEW DAWN PROTOCOL',
    preview: 'Waking up is different now. The clarity is returning. Morning meditation is 15 minutes now. Focus is rising...',
    tags: ['ROUTINE', 'EVOLUTION'],
    type: 'SUCCESS'
  }
];

export default function JournalPage() {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <div className="container mx-auto px-6 py-16 lg:py-24 max-w-6xl">
       {/* Background Depth */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.02),transparent_50%)] pointer-events-none" />

      <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-white/40">
              <BookOpen size={28} weight="duotone" />
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <span className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase">PERSONAL ARCHIVE</span>
          </div>
          <h1 className="text-6xl font-black tracking-tight mb-4 uppercase drop-shadow-sm">
            THE <span className="text-white/40 italic">DOSSIER.</span>
          </h1>
          <p className="text-sm font-bold tracking-[0.1em] text-white/20 uppercase max-w-xl leading-relaxed">
            Record every thought. Trace every pattern. Every entry is a data point in your liberation.
          </p>
        </motion.div>

        <motion.div
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
        >
          <GlassButton 
            onClick={() => setIsCreating(true)}
            size="lg"
            className="bg-accent-emerald text-space-950 hover:bg-white border-transparent px-10 shadow-[0_20px_40px_rgba(16,185,129,0.2)]"
            leftIcon={<Plus size={20} weight="bold" />}
          >
            NEW ENTRY
          </GlassButton>
        </motion.div>
      </header>

      {/* Entry Feed */}
      <div className="space-y-16 lg:space-y-24">
        {MOCK_ENTRIES.map((entry, i) => (
          <motion.article
            key={entry.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 1 }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-10"
          >
            {/* Meta Info Sidebar */}
            <div className="lg:col-span-3 flex lg:flex-col gap-4 items-start lg:text-right">
               <div className="flex flex-col">
                  <span className="text-white/10 text-[9px] font-black tracking-[0.4em] uppercase mb-2">TIMESTAMP</span>
                  <span className="text-xs font-black text-white/60 tracking-widest">{entry.date}</span>
                  <span className="text-[10px] font-bold text-white/20 tracking-tighter uppercase">{entry.time}</span>
               </div>
               
               <div className="h-[1px] w-full bg-white/[0.05] hidden lg:block my-4" />
               
               <div className="hidden lg:flex flex-wrap lg:justify-end gap-2">
                 {entry.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 text-[8px] font-black tracking-[0.2em] bg-white/[0.03] border border-white/[0.05] text-white/30 uppercase rounded-full group-hover:border-accent-emerald/20 group-hover:text-accent-emerald transition-all">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>

            {/* Entry Content Body */}
            <div className="lg:col-span-9 relative">
               {/* Hover Accent */}
               <div className="absolute -inset-8 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem] pointer-events-none" />
               
               <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                     <span className="px-3 py-1 bg-accent-emerald/10 text-accent-emerald text-[8px] font-black tracking-[0.3em] uppercase rounded-md border border-accent-emerald/20">
                        {entry.type}
                     </span>
                     <div className="h-[1px] flex-1 bg-white/[0.03]" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-white/90 group-hover:text-white transition-all tracking-tight uppercase leading-none">
                    {entry.title}
                  </h2>

                  <p className="text-lg md:text-xl font-medium text-white/30 group-hover:text-white/50 transition-all leading-relaxed max-w-3xl">
                    &quot;{entry.preview}&quot;
                  </p>

                  <div className="flex items-center gap-10 pt-4">
                     <button className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-white/20 hover:text-accent-emerald uppercase transition-all duration-500">
                        <Eye size={16} weight="duotone" /> 
                        <span>EXPAND DATA</span>
                     </button>
                     <button className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-white/20 hover:text-white uppercase transition-all duration-500">
                        <PencilCircle size={18} weight="duotone" /> 
                        <span>MODIFY</span>
                     </button>
                  </div>
               </div>
            </div>
          </motion.article>
        ))}
      </div>

      <footer className="mt-32 pt-20 border-t border-white/[0.05] flex justify-center">
         <div className="flex flex-col items-center gap-4 text-center opacity-10 hover:opacity-40 transition-opacity">
            <Archive size={32} weight="thin" />
            <p className="text-[9px] font-black tracking-[0.5em] uppercase">END OF ARCHIVE TRANSMISSION</p>
         </div>
      </footer>

      {/* Create Modal / Overlay (Simplified for MVP) */}
      <AnimatePresence>
        {isCreating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-space-950/90 backdrop-blur-3xl" onClick={() => setIsCreating(false)} />
            
            <motion.div
              initial={{ scale: 0.9, y: 40, filter: 'blur(20px)' }}
              animate={{ scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ scale: 0.9, y: 40, filter: 'blur(20px)' }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-4xl bg-white/[0.02] border border-white/[0.1] rounded-[3rem] p-12 lg:p-20 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-accent-emerald" />
              
              <div className="flex items-center justify-between mb-12">
                 <div className="flex items-center gap-4">
                    <ChatTeardropText size={24} weight="fill" className="text-accent-emerald" />
                    <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase">NEW MISSION LOG</span>
                 </div>
                 <button onClick={() => setIsCreating(false)} className="text-white/20 hover:text-white transition-colors">
                    <X size={24} weight="bold" />
                 </button>
              </div>

              <div className="space-y-12">
                <input 
                  autoFocus
                  type="text" 
                  placeholder="ENTRY CODENAME"
                  className="w-full bg-transparent border-none text-4xl md:text-5xl font-black text-white placeholder:text-white/10 focus:ring-0 px-0 uppercase tracking-tighter"
                />
                
                <textarea 
                  rows={8}
                  placeholder="BEGIN TRANSMISSION..."
                  className="w-full bg-transparent border-none text-xl md:text-2xl font-medium text-white/60 placeholder:text-white/5 focus:ring-0 px-0 leading-relaxed"
                />

                <div className="flex flex-wrap items-center justify-between gap-10 border-t border-white/[0.05] pt-12">
                   <div className="flex items-center gap-4">
                      <Tag size={20} weight="bold" className="text-white/20" />
                      <span className="text-[10px] font-black tracking-[0.3em] text-white/20 uppercase">SELECT CLASSIFICATIONS</span>
                   </div>
                   
                   <GlassButton 
                     onClick={() => setIsCreating(false)}
                     size="lg"
                     className="bg-accent-emerald text-space-950 hover:bg-white border-transparent px-10 shadow-lg shadow-accent-emerald/10"
                   >
                     COMMIT TO VAULT
                   </GlassButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Internal reusable X for convenience
import { X, CheckCircle } from '@phosphor-icons/react';
