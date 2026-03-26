'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  BookOpen, 
  Home, 
  Settings, 
  ShieldAlert, 
  Sparkles,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', icon: Home, href: '/dashboard' },
  { name: 'Journal', icon: BookOpen, href: '/journal' },
  { name: 'Analytics', icon: BarChart3, href: '/analytics' },
  { name: 'Emergency', icon: ShieldAlert, href: '/struggling', color: 'text-deep-crimson' },
];

export const Navbar = () => {
  const pathname = usePathname();

  // Don't show navbar on landing page or auth pages if needed
  if (pathname === '/') return null;

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-2xl glass border border-white/10 shadow-2xl backdrop-blur-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={cn(
                  'relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300',
                  isActive ? 'bg-white/5 text-white' : 'text-white/40 hover:text-white/60',
                  item.color && isActive ? item.color : ''
                )}
              >
                <Icon size={20} className={cn(isActive && 'drop-shadow-[0_0_8px_currentColor]')} />
                <span className="text-[10px] font-medium uppercase tracking-wider">{item.name}</span>
                
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-emerald"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export const Sidebar = () => {
  const pathname = usePathname();
  if (pathname === '/') return null;

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
      <div className="flex flex-col items-center gap-6 p-4 rounded-3xl glass border border-white/5 shadow-2xl">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-emerald to-emerald-800 flex items-center justify-center p-2 shadow-lg shadow-neon-emerald/20">
          <Sparkles className="text-space-black" />
        </div>
        
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        
        <Link href="/profile">
           <motion.div whileHover={{ scale: 1.1 }} className="p-2 rounded-xl hover:bg-white/5 text-white/40 hover:text-white transition-colors">
             <User size={24} />
           </motion.div>
        </Link>
        <Link href="/settings">
           <motion.div whileHover={{ scale: 1.1 }} className="p-2 rounded-xl hover:bg-white/5 text-white/40 hover:text-white transition-colors">
             <Settings size={24} />
           </motion.div>
        </Link>
      </div>
    </aside>
  );
};
