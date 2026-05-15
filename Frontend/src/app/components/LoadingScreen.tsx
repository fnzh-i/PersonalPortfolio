import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 min-h-screen flex flex-col font-body-md bg-[#faf9fe] text-on-background overflow-hidden z-50">
      {/* Ambience Lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-500/5 blur-[120px] rounded-full"></div>

      <main className="flex-grow flex items-center justify-center relative p-8 md:p-16">
        <div className="relative w-full max-w-2xl aspect-video flex items-center justify-center">
          
          {/* Background UI Elements with Floating Animation */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            
            {/* macOS Window Snippet */}
            <motion.div 
              initial={{ opacity: 0, y: -20, rotate: 0 }}
              animate={{ opacity: 0.6, y: -144, x: 80, rotate: 6 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute macos-window-frame w-40 h-28 p-3 shadow-lg bg-white border border-black/10 rounded-xl"
            >
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-slate-100 rounded"></div>
                <div className="h-1.5 w-3/4 bg-slate-100 rounded"></div>
              </div>
            </motion.div>

            {/* macOS App Icon Shape */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.5, y: 144, x: 128, rotate: 12, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-[1.25rem] shadow-lg flex items-center justify-center"
            >
              <span className="text-white text-2xl">⚡️</span>
            </motion.div>
          </div>

          {/* Central macOS Folder */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-72 h-56"
            >
              {/* Folder Back */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#60afff] to-[#007aff] rounded-t-[12px] rounded-br-[32px] rounded-bl-[12px] shadow-lg">
                <div className="absolute -top-3 left-0 w-20 h-6 bg-[#60afff] rounded-t-xl"></div>
              </div>

              {/* Peeking Content */}
              <motion.div 
                initial={{ y: 20 }}
                animate={{ y: -10 }}
                transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-40 bg-white/90 rounded-xl z-10 shadow-md border border-white/40 -rotate-1 overflow-hidden"
              >
                <div className="w-full h-full bg-slate-50 flex items-center justify-center text-xs text-slate-400 font-mono">
                  &lt;VERT /&gt;
                </div>
              </motion.div>

              {/* Folder Front */}
              <div className="absolute bottom-0 left-0 w-full h-[85%] bg-gradient-to-b from-[#7dc0ff] to-[#1a8bff] rounded-xl z-20 flex flex-col justify-end p-8 shadow-2xl">
                <p className="text-[10px] text-white/60 mb-1 tracking-[0.2em] font-bold">BOOTING SYSTEM</p>
                <h2 className="text-3xl text-white font-bold tracking-tight font-display-lg">FN.SH</h2>
              </div>
            </motion.div>

            {/* Loading Progress Bar */}
            <div className="absolute bottom-[-100px] w-64 flex flex-col items-center gap-4">
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                  className="h-full bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                ></motion.div>
              </div>
              <div className="flex items-center gap-3">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"
                />
                <span className="font-mono text-[12px] text-slate-500 uppercase tracking-[0.2em] font-medium">
                  Mounting FileSystem...
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full max-w-7xl mx-auto px-16 py-8 flex justify-between items-center opacity-30">
        <div className="text-[11px] text-slate-600 uppercase tracking-[0.2em] font-bold">
          FNSH Shell v4.0
        </div>
      </footer>
    </div>
  );
};

export default LoadingScreen;