'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StreakCounter } from '@/components/dashboard/StreakCounter';
import { MoodCheckIn } from '@/components/dashboard/MoodCheckIn';
import { GlassButton } from '@/components/ui/GlassButton';
import { 
  ShieldWarning, 
  TrendUp, 
  Sparkle, 
  ChatTeardropDots, 
  ArrowRight,
  ClockCounterClockwise,
  Heart,
  CheckCircle,
} from '@phosphor-icons/react';
import Link from 'next/link';

export default function DashboardPage() {
  // Mock data for now (In production these would come from a server component or store)
  const currentStreak = 12;

  return (
    <div className="container mx-auto px-6 py-16 lg:py-24 max-w-7xl">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.03),transparent_60%)] pointer-events-none" />

      <header className="mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-accent-emerald uppercase italic">SYSTEM OPERATIONAL</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-sm">
              WELCOME, <span className="text-white/60">OPERATIVE.</span>
            </h1>
            <p className="text-white/20 text-xs font-bold tracking-[0.2em] uppercase max-w-[40ch] leading-relaxed">
              Precision is the antidote to impulse. You are currently in total control.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/journal">
              <GlassButton 
                variant="secondary"
                size="md"
                className="bg-white/[0.02] border-white/[0.05]"
                leftIcon={<ChatTeardropDots size={20} weight="duotone" />}
              >
                LOG REFLECTION
              </GlassButton>
            </Link>
            <Link href="/struggling">
              <GlassButton 
                className="bg-accent-crimson/10 border-accent-crimson/20 text-accent-crimson hover:bg-accent-crimson/20 shadow-lg shadow-accent-crimson/5 group"
                leftIcon={<ShieldWarning size={20} weight="fill" className="group-hover:animate-pulse" />}
              >
                EMERGENCY PULSE
              </GlassButton>
            </Link>
          </div>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Main Content (Spans 8 cols) */}
        <div className="lg:col-span-8 space-y-10">
          {/* Main Streak Display */}
          <section className="relative overflow-hidden rounded-[3rem] bg-white/[0.01] border border-white/[0.03] p-12 lg:p-20 flex items-center justify-center min-h-[500px] shadow-[0_48px_128px_-16px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.08),transparent_70%)]" />
            <StreakCounter days={currentStreak} />
          </section>

          {/* Mood Analysis Row */}
          <section className="space-y-6">
            <header className="flex items-center gap-3 px-4">
              <Heart size={20} weight="duotone" className="text-accent-emerald" />
              <h2 className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">VITAL SIGNS</h2>
            </header>
            <MoodCheckIn />
          </section>
        </div>

        {/* Sidebar Info (Spans 4 cols) */}
        <div className="lg:col-span-4 space-y-10">
          {/* Daily Intel */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group p-10 rounded-[2.5rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-accent-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="p-4 rounded-2xl bg-accent-emerald/10 border border-accent-emerald/20 w-fit mb-8 text-accent-emerald group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Sparkle size={28} weight="duotone" />
              </div>
              <h3 className="text-sm font-black tracking-[0.1em] mb-4 text-white/80 uppercase">Daily Protocol</h3>
              <p className="text-lg text-white/40 leading-relaxed font-medium mb-8">
                &quot;The secret of change is to focus all of your energy not on fighting the old, but on building the new.&quot;
              </p>
              <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] text-accent-emerald uppercase opacity-60">
                <span>SOCRATES</span>
                <div className="w-1 h-1 rounded-full bg-accent-emerald/40" />
                <span>RECOVERY ADVISORY</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Summary */}
          <section className="p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.04] backdrop-blur-3xl">
            <h3 className="text-[10px] font-black tracking-[0.3em] text-white/20 mb-10 flex items-center gap-3 uppercase">
              <TrendUp size={16} weight="bold" /> PERFORMANCE DATA
            </h3>
            <div className="grid grid-cols-1 gap-12">
              {[
                { label: 'RECORD STREAK', value: '24 DAYS', icon: Sparkle },
                { label: 'TOTAL VICTORIES', value: '156 UNITS', icon: CheckCircle },
                { label: 'INTEL REPORTS', value: '42 ENTRIES', icon: ClockCounterClockwise },
              ].map((stat) => (
                <div key={stat.label} className="group flex flex-col gap-2">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-white/10 uppercase group-hover:text-white/20 transition-colors">
                    {stat.label}
                  </span>
                  <div className="flex items-end justify-between">
                    <span className="text-3xl font-black text-white/80 group-hover:text-white transition-colors tracking-tight">
                      {stat.value}
                    </span>
                    <stat.icon size={24} weight="duotone" className="text-white/5 group-hover:text-accent-emerald/20 transition-all duration-500" />
                  </div>
                  <div className="h-[2px] w-full bg-white/[0.02] mt-2 relative overflow-hidden">
                    <motion.div 
                      initial={{ x: '-100%' }}
                      animate={{ x: '0%' }}
                      transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                      className="absolute inset-0 bg-accent-emerald/20" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent History Prompt */}
          <section className="p-8 rounded-[2.5rem] border border-white/[0.05] bg-white/[0.01] flex flex-col items-center justify-center text-center gap-6 group hover:border-white/10 transition-all duration-500">
             <div className="w-12 h-12 rounded-full border border-white/[0.05] flex items-center justify-center text-white/10 group-hover:text-white/40 group-hover:border-white/20 transition-all duration-500">
                <ClockCounterClockwise size={24} weight="regular" />
             </div>
             <p className="text-[9px] font-bold tracking-[0.15em] text-white/20 uppercase max-w-[20ch]">
               VIEW ARCHIVED RECORDS FOR DEEPER ANALYSIS
             </p>
             <Link href="/history" className="w-full">
               <button className="w-full py-4 text-[9px] font-black tracking-[0.3em] uppercase border-y border-white/[0.05] hover:border-accent-emerald/20 hover:text-accent-emerald transition-all duration-500">
                 ACCESS LOGS
               </button>
             </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
