'use client';

import React from 'react';
// import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area 
} from 'recharts';

const mockData = [
  { name: 'Mon', score: 4000, mood: 2400 },
  { name: 'Tue', score: 3000, mood: 1398 },
  { name: 'Wed', score: 2000, mood: 9800 },
  { name: 'Thu', score: 2780, mood: 3908 },
  { name: 'Fri', score: 1890, mood: 4800 },
  { name: 'Sat', score: 2390, mood: 3800 },
  { name: 'Sun', score: 3490, mood: 4300 },
];

export const MoodChart = () => {
  return (
    <GlassCard className="p-8 h-[400px]">
      <header className="mb-8">
        <h3 className="text-lg font-bold">Mental Clarity Score</h3>
        <p className="text-sm text-white/30">Visualizing your internal state over time.</p>
      </header>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockData}>
            <defs>
              <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00FF94" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#00FF94" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0,0,0,0.8)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '12px'
              }}
              itemStyle={{ color: '#00FF94' }}
            />
            <Area 
              type="monotone" 
              dataKey="mood" 
              stroke="#00FF94" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorMood)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
};
