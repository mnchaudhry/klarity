'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, BarChart2, ShieldAlert, Sparkles, User } from 'lucide-react';

const mainLinks = [
  { name: 'Home', href: '/', icon: Sparkles },
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Reflections', href: '/journal', icon: BookOpen },
  { name: 'Analytics', href: '/analytics', icon: BarChart2 },
  { name: 'Emergency', href: '/struggling', icon: ShieldAlert },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-24 bg-white/5 border-r border-white/5 flex flex-col items-center py-8 z-50 transition-all hover:w-32 group hidden lg:flex">
      <Link href="/" className="mb-12">
        <div className="w-12 h-12 rounded-2xl bg-neon-emerald/20 border border-neon-emerald/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,148,0.2)]">
          <span className="text-neon-emerald font-black text-2xl">K</span>
        </div>
      </Link>

      <div className="flex-1 flex flex-col gap-6 w-full px-4">
        {mainLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl transition-all ${
                isActive ? 'text-neon-emerald' : 'text-white/40 hover:text-white/80'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl"
                  transition={{ type: 'spring', bounce: 0.2 }}
                />
              )}
              <link.icon size={24} className="relative z-10" />
              <span className="text-[10px] font-bold tracking-widest relative z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                {link.name.toUpperCase()}
              </span>
            </Link>
          );
        })}
      </div>

      <button className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center transition-all">
        <User size={20} className="text-white/40" />
      </button>
    </aside>
  );
};
