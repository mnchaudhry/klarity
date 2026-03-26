'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassInput } from '@/components/ui/GlassInput';
import { GlassButton } from '@/components/ui/GlassButton';
import { 
  LockOpen, 
  EnvelopeSimple, 
  ArrowRight, 
  UserPlus, 
  Fingerprint 
} from '@phosphor-icons/react';
import { login, signup } from '@/actions/auth/authActions';

type AuthMode = 'login' | 'signup';

export const AuthForm = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleMode = () => {
    setMode(prev => (prev === 'login' ? 'signup' : 'login'));
    setError(null);
  };

  const currentAction = mode === 'login' ? login : signup;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const result = await currentAction(formData);
      
      if (result?.error) {
        setError(result.error);
        setLoading(false);
      }
    } catch (_err) {
      setError('An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto py-12 px-6 backdrop-blur-3xl rounded-3xl border border-white/[0.03] bg-white/[0.01] shadow-[0_32px_128px_-16px_rgba(0,0,0,0.5)]">
      <div className="text-center mb-12">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="w-20 h-20 bg-accent-emerald/[0.05] border border-accent-emerald/20 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-accent-emerald/10 relative"
        >
          <div className="absolute inset-0 bg-accent-emerald/10 blur-2xl rounded-full opacity-20" />
          <Fingerprint size={42} weight="duotone" className="text-accent-emerald relative z-10" />
        </motion.div>
        
        <h1 className="display-title mb-4">
          {mode === 'login' ? 'RECLAIM' : 'BEGIN'}
        </h1>
        <p className="text-white/30 text-xs font-bold tracking-[0.2em] uppercase max-w-[20ch] mx-auto leading-relaxed">
          {mode === 'login' ? "Return to clarity and focus." : "Take the first step towards freedom."}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.form
          key={mode}
          initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="space-y-5">
            <GlassInput
              label="ACCESS KEY"
              placeholder="name@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
              icon={<EnvelopeSimple size={20} weight="regular" />}
            />
            
            <GlassInput
              label="SECURE SHIELD"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              icon={<LockOpen size={20} weight="regular" />}
            />
          </div>

          <GlassButton
            type="submit"
            fullWidth
            size="lg"
            isLoading={loading}
            rightIcon={mode === 'login' ? <ArrowRight size={20} /> : <UserPlus size={20} />}
            className={mode === 'login' ? '' : 'bg-white/[0.05] text-white border-white/20'}
          >
            {mode === 'login' ? 'AUTHORIZE ACCESS' : 'INITIALIZE PROTOCOL'}
          </GlassButton>

          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-2xl glass-crimson flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-accent-crimson animate-pulse" />
              <p className="text-accent-crimson text-xs font-bold uppercase tracking-wide leading-none">
                {error}
              </p>
            </motion.div>
          )}

          <div className="pt-8 border-t border-white/[0.05] text-center">
            <button
              type="button"
              onClick={toggleMode}
              className="text-[10px] font-bold tracking-[0.15em] text-white/20 hover:text-accent-emerald transition-all uppercase group"
            >
              <span className="group-hover:mr-2 transition-all">
                {mode === 'login' ? "Need a clearance?" : "Existing operative?"}
              </span>
              <span className="text-white/40 group-hover:text-accent-emerald underline underline-offset-8 decoration-white/5 group-hover:decoration-accent-emerald/40">
                {mode === 'login' ? 'JOIN THE PROGRAM' : 'ENTER HEADQUARTERS'}
              </span>
            </button>
          </div>
        </motion.form>
      </AnimatePresence>

      <div className="mt-12 flex items-center justify-center gap-2 text-white/10 text-[9px] uppercase font-bold tracking-[0.25em]">
        <div className="w-4 h-[1px] bg-white/5" />
        <span>ENCRYPTED END-TO-END</span>
        <div className="w-4 h-[1px] bg-white/5" />
      </div>
    </div>
  );
};
