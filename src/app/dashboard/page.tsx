'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StreakCounter } from '@/components/dashboard/StreakCounter';
import { MoodCheckIn } from '@/components/dashboard/MoodCheckIn';
import { GlassButton } from '@/components/ui/GlassButton';
import { ShieldAlert, TrendingUp, Sparkles, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  // Mock data for now
  const currentStreak = 12;

  return (
    <div className="container mx-auto px-6 pt-12 pb-32">
      <header className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome Back</h1>
            <p className="text-white/40">You&apos;re doing better than you think.</p>
          </div>
          <Link href="/struggling">
            <GlassButton 
              className="bg-deep-crimson/10 border-deep-crimson/20 text-deep-crimson hover:bg-deep-crimson/20"
              leftIcon={<ShieldAlert size={18} />}
            >
              I&apos;m Struggling
            </GlassButton>
          </Link>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Column: Streak & Mood */}
        <div className="lg:col-span-2 space-y-8">
          <section className="relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-12 flex items-center justify-center min-h-[400px]">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_70%)]" />
             <StreakCounter days={currentStreak} />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MoodCheckIn />
            <motion.div
              whileHover={{ y: -5 }}
              className="group p-8 rounded-[2rem] bg-gradient-to-br from-neon-emerald/5 to-transparent border border-neon-emerald/10 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="p-3 rounded-2xl bg-neon-emerald/10 w-fit mb-4 text-neon-emerald group-hover:scale-110 transition-transform">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Daily Insight</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  &quot;The secret of change is to focus all of your energy not on fighting the old, but on building the new.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sidebar: Stats & Quick Actions */}
        <div className="space-y-8">
          <section className="p-6 rounded-3xl glass border border-white/5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-6 flex items-center gap-2">
              <TrendingUp size={14} /> Quick Stats
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Longest Streak', value: '24 Days' },
                { label: 'Total Wins', value: '156' },
                { label: 'Journal Posts', value: '42' },
              ].map((stat) => (
                <div key={stat.label} className="flex justify-between items-end border-b border-white/5 pb-2">
                  <span className="text-white/40 text-sm">{stat.label}</span>
                  <span className="text-lg font-medium">{stat.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="p-6 rounded-3xl bg-white/[0.03] border border-white/5">
             <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-6 flex items-center gap-2">
               <MessageSquare size={14} /> Recent Reflections
             </h3>
             <div className="space-y-4">
                <p className="text-xs text-white/20 italic">Your recent journal entries will appear here...</p>
                <GlassButton className="w-full justify-center group" rightIcon={<Sparkles size={16} className="group-hover:rotate-12 transition-transform" />}>
                  Write Today&apos;s Entry
                </GlassButton>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}
