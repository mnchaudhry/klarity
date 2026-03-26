'use client';

import React from 'react';
// import { motion } from 'framer-motion'; // Removed unused import
import { MoodChart } from '@/components/analytics/MoodChart';
import { GlassCard } from '@/components/ui/GlassCard';
import { Zap, TrendingUp, AlertTriangle } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto px-6 py-20 min-h-screen">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Precision Analytics</h1>
        <p className="text-white/40">Data-driven insights into your recovery journey.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <GlassCard className="p-6 md:col-span-2">
            <MoodChart />
        </GlassCard>

        <div className="space-y-8">
          <GlassCard className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-neon-emerald/10 text-neon-emerald">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-bold">Strength Index</h4>
                <p className="text-xs text-white/30">Resistance to triggers</p>
              </div>
            </div>
            <div className="text-4xl font-bold text-neon-emerald mb-2">94%</div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
               <div className="h-full bg-neon-emerald w-[94%]" />
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-deep-crimson/10 text-deep-crimson">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h4 className="font-bold">Risk Window</h4>
                <p className="text-xs text-white/30">Next high-risk period</p>
              </div>
            </div>
            <div className="text-2xl font-bold">18:00 - 21:00</div>
            <p className="text-sm text-white/20 mt-2">Based on historical trigger data.</p>
          </GlassCard>
          
          <GlassCard className="p-6">
             <div className="flex items-center gap-4 mb-4">
               <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                 <TrendingUp size={24} />
               </div>
               <div>
                 <h4 className="font-bold">Recovery Growth</h4>
                 <p className="text-xs text-white/30">Monthly progress</p>
               </div>
             </div>
             <div className="text-4xl font-bold text-white mb-2">+12%</div>
             <p className="text-sm text-white/20">Compared to last month.</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
