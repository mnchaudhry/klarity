'use client';

import React from 'react';
import { Sidebar } from './Sidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  
  // Public/Landing logic
  const isAuthPage = pathname?.startsWith('/auth');
  const isLandingPage = pathname === '/';
  const isStrugglingPage = pathname === '/struggling';
  const showSidebar = !isAuthPage && !isLandingPage;

  return (
    <div className="relative min-h-screen bg-space-950 text-white overflow-x-hidden selection:bg-accent-emerald selection:text-space-900">
      
      {/* GLOBAL HUD GRID - Extremely Subtle */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#10B981_1px,transparent_1px),linear-gradient(to_bottom,#10B981_1px,transparent_1px)] bg-[size:100px_100px]" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,#10B981_1px,transparent_1px)] bg-[size:25px_25px]" />

      {/* GLOBAL HUD GRADIENTS */}
      <div className="fixed top-0 left-0 w-full h-96 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-full h-96 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none" />
      
      {showSidebar && <Sidebar />}

      <motion.main 
        initial={{ opacity: 0, scale: 0.99, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 0.99, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "transition-[padding] duration-700 ease-in-out relative z-10",
          showSidebar && "lg:pl-24"
        )}
      >
        {/* Secondary Inner HUD Grid (Only for dashboard-like pages) */}
        {!isLandingPage && !isAuthPage && (
          <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay z-[0]">
             <svg className="h-full w-full">
               <defs>
                 <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                   <circle cx="2" cy="2" r="1" fill="white" opacity="0.3" />
                 </pattern>
               </defs>
               <rect width="100%" height="100%" fill="url(#dotPattern)" />
             </svg>
          </div>
        )}

        <div className="relative z-10">
          {children}
        </div>
      </motion.main>

      {/* Global Toast / Overlay Container Placeholder */}
      <div id="portal-root" className="fixed inset-0 pointer-events-none z-[999]" />
    </div>
  );
};
