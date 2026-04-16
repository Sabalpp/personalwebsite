"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AuroraSplash() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        className="absolute -left-[20%] top-[10%] h-[60vw] w-[60vw] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(220,30,40,0.55), rgba(220,30,40,0) 70%)",
        }}
        initial={{ opacity: 0.7 }}
        animate={
          reduce
            ? undefined
            : { x: [0, 40, -20, 0], y: [0, -30, 20, 0], opacity: [0.55, 0.75, 0.55] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[15%] top-[30%] h-[55vw] w-[55vw] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,195,60,0.55), rgba(255,195,60,0) 70%)",
        }}
        initial={{ opacity: 0.7 }}
        animate={
          reduce
            ? undefined
            : { x: [0, -40, 30, 0], y: [0, 30, -20, 0], opacity: [0.55, 0.8, 0.55] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[30%] h-[40vw] w-[40vw] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,120,40,0.35), rgba(255,120,40,0) 70%)",
        }}
        initial={{ opacity: 0.4 }}
        animate={
          reduce
            ? undefined
            : { x: [0, 60, -30, 0], y: [0, -20, 30, 0], opacity: [0.3, 0.5, 0.3] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
