'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, BarChart2, ShieldAlert, Sparkles } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: Sparkles },
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Reflections', href: '/journal', icon: BookOpen },
  { name: 'Analytics', href: '/analytics', icon: BarChart2 },
  { name: 'Emergency', href: '/struggling', icon: ShieldAlert },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-neon-emerald/20 border border-neon-emerald/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,148,0.2)] group-hover:shadow-[0_0_30px_rgba(0,255,148,0.4)] transition-all">
            <span className="text-neon-emerald font-black text-xl">K</span>
          </div>
          <span className="font-bold text-xl tracking-tight hidden md:block">KLARITY</span>
        </Link>

        <div className="flex bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-1 shadow-2xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 flex items-center gap-2 text-sm font-medium transition-colors"
                title={item.name}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-bg"
                    className="absolute inset-0 bg-white/5 rounded-xl border border-white/10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon
                  size={18}
                  className={`relative z-10 transition-colors ${isActive ? 'text-neon-emerald' : 'text-white/40 hover:text-white/60'}`}
                />
                <span className={`relative z-10 hidden lg:block ${isActive ? 'text-white font-bold' : 'text-white/40 hover:text-white/60'}`}>
                  {item.name}
                </span>
                {item.name === 'Emergency' && (
                   <span className="absolute -top-1 -right-1 flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-deep-crimson opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-deep-crimson"></span>
                   </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
