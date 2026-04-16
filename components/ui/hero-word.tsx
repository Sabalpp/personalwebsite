"use client";

import { motion, useReducedMotion } from "framer-motion";

const letters = ["S", "A", "B", "A", "L"];

export function HeroWord() {
  const reduce = useReducedMotion();

  return (
    <h1 className="font-display flex w-full items-baseline justify-center text-center text-[clamp(8rem,34vw,28rem)] font-bold uppercase leading-[0.9] tracking-[-0.045em] text-white">
      {letters.map((l, i) => (
        <motion.span
          key={`${l}-${i}`}
          className="inline-block"
          initial={reduce ? false : { y: "110%", opacity: 0 }}
          animate={reduce ? undefined : { y: "0%", opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.08 + i * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {l}
        </motion.span>
      ))}
    </h1>
  );
}
