'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Shield, Target, Zap, ArrowRight, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

const steps = [
  {
    title: "Welcome to Klarity",
    description: "Recovery isn't just about stopping. It's about starting a new life based on precision and awareness.",
    icon: <Shield size={42} className="text-neon-emerald" />,
  },
  {
    title: "Precision Tracking",
    description: "We use data to help you understand your triggers and celebrate every single day of freedom.",
    icon: <Target size={42} className="text-blue-400" />,
  },
  {
    title: "Instant Support",
    description: "When the urges hit, Klarity provides immediate cognitive tools to de-escalate and refocus.",
    icon: <Zap size={42} className="text-deep-crimson" />,
  },
];

export const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-xl p-6">
      <GlassCard className="max-w-xl w-full p-12 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col items-center text-center py-8"
          >
            <div className="p-6 rounded-3xl bg-white/5 mb-8 shadow-2xl shadow-neon-emerald/5 ring-1 ring-white/10">
              {steps[currentStep].icon}
            </div>
            
            <h2 className="text-4xl font-bold mb-6 tracking-tight">
              {steps[currentStep].title}
            </h2>
            
            <p className="text-lg text-white/40 leading-relaxed max-w-sm mb-12">
              {steps[currentStep].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center mt-8">
          <div className="flex gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentStep ? 'w-8 bg-neon-emerald' : 'w-2 bg-white/10'
                }`}
              />
            ))}
          </div>

          <GlassButton
            onClick={handleNext}
            rightIcon={currentStep === steps.length - 1 ? <Check size={18} /> : <ArrowRight size={18} />}
            className="px-8 py-4"
          >
            {currentStep === steps.length - 1 ? "Get Started" : "Continue"}
          </GlassButton>
        </div>
      </GlassCard>
    </div>
  );
};
