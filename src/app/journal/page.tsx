'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { JournalList } from '@/components/journal/JournalList';
import { GlassButton } from '@/components/ui/GlassButton';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function JournalPage() {
  return (
    <div className="container mx-auto px-6 py-20 min-h-screen">
      <header className="flex justify-between items-end mb-12">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-bold tracking-tight">Reflections</h1>
          <p className="text-white/40">The path to freedom is paved with honest words.</p>
        </motion.div>
        
        <Link href="/journal/new">
          <GlassButton leftIcon={<Plus size={18} />} className="px-6 py-4">
            New Reflection
          </GlassButton>
        </Link>
      </header>

      <div className="max-w-4xl mx-auto">
        <JournalList />
      </div>
    </div>
  );
}
