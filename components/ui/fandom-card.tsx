"use client";

import { motion } from "framer-motion";

export function FandomCard({
  name,
  tagline,
  logoUrl,
  accent,
}: {
  name: string;
  tagline: string;
  logoUrl: string;
  accent: string;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md transition hover:border-white/20"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        aria-hidden
        className="absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full opacity-40 blur-3xl transition group-hover:opacity-70"
        style={{ background: accent }}
      />
      <div className="relative flex h-40 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl}
          alt={`${name} logo`}
          className="h-full w-auto object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        />
      </div>
      <div className="relative mt-6 border-t border-white/10 pt-5">
        <p className="font-display text-xl font-bold uppercase tracking-[-0.02em] text-white md:text-2xl">
          {name}
        </p>
        <p className="mt-2 text-sm text-white/60">{tagline}</p>
      </div>
    </motion.div>
  );
}
