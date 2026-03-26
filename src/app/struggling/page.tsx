'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassButton } from '@/components/ui/GlassButton';
import { 
  ShieldWarning, 
  Wind, 
  Heartbeat, 
  ChatTeardropText, 
  ArrowRight,
  WarningOctagon,
  Lifebuoy,
  X
} from '@phosphor-icons/react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const STEPS = [
  {
    id: 'breathe',
    title: 'STALIZE BREATHING',
    icon: Wind,
    description: 'Inhale for 4. Hold for 4. Exhale for 4. Repeat until the internal noise subsides.',
    action: 'START BREATHING PROTOCOL'
  },
  {
    id: 'identify',
    title: 'IDENTIFY THE VOID',
    icon: WarningOctagon,
    description: 'What is the immediate source of the tension? Name it to disarm it.',
    action: 'LOG INTERNAL STATE'
  },
  {
    id: 'connect',
    title: 'EXTERNAL ANCHOR',
    icon: Lifebuoy,
    description: 'Contact a verified emergency ally or a professional support line immediately.',
    action: 'TRIGGER EXTERNAL CALL'
  }
];

export default function StrugglingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [pulseIntensity, setPulseIntensity] = useState(1);

  // Dynamic pulse intensity based on step
  useEffect(() => {
    setPulseIntensity(1 - (activeStep * 0.3));
  }, [activeStep]);

  return (
    <div className="relative min-h-[100dvh] overflow-hidden flex flex-col bg-space-950 px-6 py-24 lg:py-32 items-center justify-center">
      {/* Intense Crimson Pulse Background */}
      <motion.div 
        animate={{ 
          opacity: [0.1 * pulseIntensity, 0.4 * pulseIntensity, 0.1 * pulseIntensity],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 4 / pulseIntensity, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.3),transparent_70%)] pointer-events-none" 
      />
      
      <div className="absolute inset-0 bg-space-950/40 backdrop-blur-[100px] pointer-events-none" />

      {/* Close/Abort Button */}
      <Link href="/dashboard" className="fixed top-12 right-12 z-[100]">
        <GlassButton variant="secondary" size="md" className="p-4 rounded-full border-white/10 hover:border-white/20">
          <X size={20} weight="bold" className="text-white/40 group-hover:text-white" />
        </GlassButton>
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-4 px-6 py-2.5 rounded-full bg-accent-crimson/10 border border-accent-crimson/30 shadow-[0_0_50px_rgba(244,63,94,0.2)] mb-12"
        >
          <ShieldWarning size={16} weight="fill" className="text-accent-crimson animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.5em] text-accent-crimson uppercase animate-pulse">EMERGENCY PROTOCOL ACTIVE</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-white drop-shadow-2xl uppercase">
          STAY <span className="text-white/30 italic">LUCID.</span>
        </h1>

        <p className="text-base md:text-xl text-white/40 mb-20 max-w-2xl mx-auto leading-relaxed tracking-tight font-medium uppercase">
          URGE ESCALATION DETECTED. DO NOT SURRENDER. FOLLOW THE SEQUENCE.
        </p>

        {/* Protocol Sequence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16 relative">
           {/* Visual Progress Line */}
           <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/[0.05] hidden md:block" />
           
           {STEPS.map((step, i) => {
             const isPast = i < activeStep;
             const isCurrent = i === activeStep;
             const isFuture = i > activeStep;
             
             return (
               <motion.div
                 key={step.id}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ 
                    opacity: isFuture ? 0.3 : 1, 
                    y: 0,
                    scale: isCurrent ? 1.05 : 1
                 }}
                 className={cn(
                   "relative p-8 rounded-[2.5rem] border transition-all duration-700 h-full flex flex-col",
                   isCurrent 
                    ? "bg-white/[0.05] border-accent-crimson/40 shadow-[0_32px_128px_-16px_rgba(244,63,94,0.3)]" 
                    : "bg-white/[0.02] border-white/[0.05]"
                 )}
               >
                 <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10 mx-auto transition-colors duration-700",
                    isCurrent ? "bg-accent-crimson/20 text-accent-crimson shadow-lg shadow-accent-crimson/10" : "bg-white/[0.03] text-white/10"
                 )}>
                   <step.icon size={32} weight={isCurrent ? "fill" : "duotone"} />
                 </div>

                 <h3 className={cn(
                    "text-[10px] font-black tracking-[0.25em] mb-4 uppercase text-center",
                    isCurrent ? "text-white" : "text-white/20"
                 )}>
                   {step.title}
                 </h3>

                 <p className={cn(
                    "text-xs leading-relaxed mb-10 text-center uppercase tracking-widest leading-loose",
                    isCurrent ? "text-white/60" : "text-white/10"
                 )}>
                   {step.description}
                 </p>

                 <div className="mt-auto flex justify-center">
                   {isCurrent && (
                     <motion.div
                       initial={{ opacity: 0, scale: 0.9 }}
                       animate={{ opacity: 1, scale: 1 }}
                     >
                       <GlassButton 
                         onClick={() => setActiveStep(i + 1)}
                         className="bg-accent-crimson/20 text-accent-crimson hover:bg-accent-crimson/30 border-accent-crimson/30 w-full py-4 text-[9px] font-black tracking-[0.3em]"
                       >
                         {step.action}
                       </GlassButton>
                     </motion.div>
                   )}
                   {isPast && (
                     <div className="flex items-center gap-2 text-accent-emerald bg-accent-emerald/10 px-4 py-2 rounded-full border border-accent-emerald/20">
                        <CheckCircle size={14} weight="fill" />
                        <span className="text-[9px] font-black tracking-[0.2em] uppercase">VERIFIED</span>
                     </div>
                   )}
                 </div>
               </motion.div>
             );
           })}
        </div>
        
        {activeStep >= STEPS.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-12"
          >
            <div className="p-8 rounded-[3rem] bg-accent-emerald/5 border border-accent-emerald/20 flex flex-col items-center gap-6 shadow-[0_0_100px_rgba(16,185,129,0.1)]">
               <div className="w-20 h-20 rounded-full bg-accent-emerald/20 text-accent-emerald flex items-center justify-center">
                  <CheckCircle size={48} weight="fill" />
               </div>
               <div>
                  <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">PROTOCOLS EFFECTIVE.</h3>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-bold">THE URGE HAS BEEN CONTAINED. RETURN TO BASE.</p>
               </div>
               <Link href="/dashboard" className="w-full">
                  <GlassButton className="w-full py-5 text-[10px] font-black tracking-[0.4em]">RESUME MISSION Dashboard</GlassButton>
               </Link>
            </div>
          </motion.div>
        )}

      </motion.div>

      {/* Background Micro Details */}
      <footer className="fixed bottom-12 flex items-center gap-8 opacity-20 hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2">
          <Heartbeat size={16} weight="fill" className="text-accent-crimson animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.2em] text-white">LIVESTREAM ENCRYPTED</span>
        </div>
        <div className="w-[1px] h-4 bg-white/10" />
        <span className="text-[10px] font-black tracking-[0.2em] text-white/40">ANONYMITY ENSURED</span>
      </footer>
    </div>
  );
}

// Internal reusable CheckCircle for convenience if needed, but imported from phosphor for consistency
import { CheckCircle } from '@phosphor-icons/react';
