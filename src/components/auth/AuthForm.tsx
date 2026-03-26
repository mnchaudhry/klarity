'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassInput } from '@/components/ui/GlassInput';
import { GlassButton } from '@/components/ui/GlassButton';
import { Shield, Lock, ArrowRight } from 'lucide-react';
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
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-16 h-16 bg-neon-emerald/10 border border-neon-emerald/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-neon-emerald/10"
        >
          <Shield size={32} className="text-neon-emerald" />
        </motion.div>
        
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          {mode === 'login' ? 'Welcome Back' : 'Join Klarity'}
        </h1>
        <p className="text-white/40 text-sm">
          {mode === 'login' ? "You're stronger than your history." : "Start your journey to clarity today."}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.form
          key={mode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="space-y-4">
            <GlassInput
              label="Email Address"
              placeholder="name@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
            
            <GlassInput
              label="Password"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <GlassButton
            type="submit"
            className="w-full py-4 justify-center bg-neon-emerald/10 border-neon-emerald/20 text-neon-emerald hover:bg-neon-emerald/20 transition-all duration-300 active:scale-[0.98]"
            isLoading={loading}
            rightIcon={<ArrowRight size={18} />}
          >
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </GlassButton>

          {error && (
            <motion.p 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-deep-crimson text-center text-sm font-medium mt-4 p-3 rounded-lg glass-crimson"
            >
              {error}
            </motion.p>
          )}

          <div className="pt-6 border-t border-white/5 text-center">
            <button
              type="button"
              onClick={toggleMode}
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              {mode === 'login' ? (
                <>Don&apos;t have an account? <span className="text-neon-emerald font-medium underline decoration-neon-emerald/30 underline-offset-4">Sign up</span></>
              ) : (
                <>Already have an account? <span className="text-neon-emerald font-medium underline decoration-neon-emerald/30 underline-offset-4">Log in</span></>
              )}
            </button>
          </div>
        </motion.form>
      </AnimatePresence>

      <div className="mt-12 flex items-center justify-center gap-2 text-white/20 text-[10px] uppercase font-mono tracking-widest">
        <Lock size={12} />
        <span>Your data is private and encrypted. We never share it.</span>
      </div>
    </div>
  );
};
