'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SquaresFour, 
  BookOpen, 
  TrendUp, 
  ShieldWarning, 
  UserCircle,
  Gear,
  ChartPolar,
  Sparkle
} from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

const sidebarItems = [
  { name: 'DASHBOARD', href: '/dashboard', icon: SquaresFour },
  { name: 'DOSSIER', href: '/journal', icon: BookOpen },
  { name: 'ANALYTICS', href: '/analytics', icon: ChartPolar },
  { name: 'PULSE', href: '/struggling', icon: ShieldWarning, color: 'text-accent-crimson' },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  // Don't show sidebar on public/auth pages
  const isAuthPage = pathname?.startsWith('/auth');
  const isLandingPage = pathname === '/';
  if (isAuthPage || isLandingPage) return null;

  return (
    <motion.aside
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "fixed left-0 top-0 bottom-0 z-50 flex flex-col items-center py-10 transition-all duration-700 hidden lg:flex bg-space-950/80 backdrop-blur-3xl border-r border-white/5",
        isHovered ? "w-72" : "w-24"
      )}
    >
      {/* Brand Icon */}
      <Link href="/dashboard" className="mb-16 flex flex-col items-center group">
        <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:bg-accent-emerald/10 group-hover:border-accent-emerald/40 transition-all duration-500 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#10b981_0%,transparent_100%)] opacity-0 group-hover:opacity-20 animate-spin-slow" />
          <span className="text-white font-black text-xl italic group-hover:text-accent-emerald group-hover:scale-110 transition-all z-10">K</span>
        </div>
        <AnimatePresence>
          {isHovered && (
            <motion.span
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9 }}
               className="text-[10px] font-black tracking-[0.6em] text-white/20 mt-4 italic"
            >
              KLARITY
            </motion.span>
          )}
        </AnimatePresence>
      </Link>

      {/* Nav List */}
      <nav className="flex-1 flex flex-col gap-8 w-full px-6">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative group w-full"
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-white/[0.02] border border-white/[0.05] rounded-[1.5rem] shadow-2xl shadow-accent-emerald/5"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <div className={cn(
                "relative z-10 flex items-center gap-6 p-4 rounded-[1.5rem] transition-all duration-500",
                isActive ? "text-white" : "text-white/20 group-hover:text-white group-hover:bg-white/[0.01]"
              )}>
                <item.icon
                  size={isActive ? 28 : 24}
                  weight={isActive ? "fill" : "duotone"}
                  className={cn("transition-all duration-500", item.color || "group-hover:text-accent-emerald")}
                />
                
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[10px] font-black tracking-[0.35em] uppercase"
                  >
                    {item.name}
                  </motion.span>
                )}

                {isActive && (
                   <motion.div 
                     layoutId="indicator"
                     className="absolute right-4 w-1.5 h-1.5 rounded-full bg-accent-emerald shadow-[0_0_10px_#10b981]" 
                   />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-6 w-full px-6">
        <Link href="/settings" className="group">
           <div className={cn(
             "p-4 flex items-center gap-6 rounded-[1.5rem] transition-all text-white/20 hover:text-white hover:bg-white/[0.02]",
             isHovered ? "justify-start" : "justify-center"
           )}>
              <Gear size={24} weight="duotone" className="group-hover:rotate-90 transition-transform duration-700" />
              {isHovered && <span className="text-[9px] font-black tracking-[0.3em] uppercase">SYSTEM CFG</span>}
           </div>
        </Link>
        <Link href="/profile" className="group">
          <div className={cn(
             "p-4 flex items-center gap-6 rounded-[1.5rem] bg-white/[0.02] border border-white/[0.05] shadow-2xl transition-all group-hover:border-accent-emerald/20",
             isHovered ? "justify-start" : "justify-center"
           )}>
             <UserCircle size={28} weight="fill" className={cn("transition-colors", isHovered ? "text-accent-emerald" : "text-white/40")} />
             {isHovered && (
               <div className="flex flex-col">
                 <span className="text-[10px] font-black text-white/80">CHAUDRY</span>
                 <span className="text-[8px] font-bold text-white/20 tracking-[0.2em] uppercase">OPERATIVE #24</span>
               </div>
             )}
          </div>
        </Link>
      </div>

    </motion.aside>
  );
};
