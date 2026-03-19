// components/LiveEventModal.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Radio, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LiveEventModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);
  
  // ⚠️ THE SECRET WEAPON: මේකෙන් තමයි Video එක Load වෙන එක පාලනය කරන්නේ
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Website load වෙලා තත්පර 1කින් Modal එක Auto-open වෙනවා
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Animation එක ඉවර වුණාට පස්සේ විතරක් Video එක Load කරනවා (Zero Lag)
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowVideo(true), 500); // 500ms delay for animation
      return () => clearTimeout(timer);
    } else {
      setShowVideo(false); // Close කරපු ගමන් Video එක අයින් කරනවා
    }
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    setHasClosed(true);
  };

  const openModal = () => {
    setIsOpen(true);
    setHasClosed(false);
  };

  return (
    <>
      {/* 1. LIVE EVENT MODAL (POPUP) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }} // GPU Acceleration! (Super Smooth)
              className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[95vh]"
            >
              {/* --- Header Area --- */}
              <div className="flex items-center justify-between px-3 md:px-5 py-3 md:py-4 bg-gradient-to-r from-[#800000] to-red-900 shrink-0">
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="flex h-2.5 w-2.5 md:h-3 md:w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-red-500"></span>
                  </span>
                  <h2 className="text-white font-bold text-xs sm:text-sm md:text-lg tracking-wide uppercase line-clamp-1">
                    LIVE: St. Joseph's 84th Anniversary
                  </h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 hover:text-white rounded-full h-8 w-8 shrink-0 ml-2"
                  onClick={closeModal}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* --- YouTube Video Embed --- */}
              <div className="relative w-full aspect-video bg-black flex items-center justify-center flex-grow">
                {/* Video එක එනකම් Loading Spinner එකක් පෙන්නනවා */}
                {!showVideo && (
                  <div className="absolute flex flex-col items-center justify-center text-white/50">
                    <Loader2 className="w-8 h-8 animate-spin mb-2" />
                    <span className="text-sm font-medium tracking-widest uppercase">Connecting to Live Stream...</span>
                  </div>
                )}
                
                {/* Modal Animation එක ඉවර වුණාට පස්සේ මේක ලෝඩ් වෙනවා */}
                {showVideo && (
                  <motion.iframe
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/kArJrqb_Z2I?autoplay=1&mute=0&rel=0&vq=hd1080"
                    title="St. Joseph's 84th Anniversary Live"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></motion.iframe>
                )}
              </div>
              
              {/* --- Bottom Bar --- */}
              <div className="p-3 md:p-5 bg-gray-950 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 shrink-0 border-t border-white/5">
                <p className="text-gray-400 text-xs md:text-sm max-w-2xl">
                  Join us in celebrating 84 years of excellence. Share this moment with the community!
                </p>
                <Button 
                  onClick={closeModal}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full px-6 text-sm w-full md:w-auto transition-colors"
                >
                  Continue to Website
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. FLOATING "WATCH LIVE" BUTTON */}
      <AnimatePresence>
        {!isOpen && hasClosed && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ willChange: "transform, opacity" }} // GPU Acceleration
            className="fixed bottom-6 right-6 z-[90]"
          >
            <button
              onClick={openModal}
              className="group relative flex items-center gap-3 bg-[#800000] hover:bg-red-800 text-white px-5 py-3 rounded-full shadow-2xl border border-red-400/30 transition-all hover:scale-105 hover:pr-6"
            >
              <span className="absolute -inset-1 rounded-full bg-red-600/30 animate-pulse blur-sm -z-10 group-hover:bg-red-500/40"></span>
              <Radio className="w-5 h-5 animate-pulse" />
              <span className="font-bold tracking-wider text-sm">WATCH LIVE</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}