"use client";

import type { ReactNode } from "react";

export function Marquee({
  children,
  reverse = false,
  speed = 40,
  className = "",
}: {
  children: ReactNode;
  reverse?: boolean;
  speed?: number;
  className?: string;
}) {
  return (
    <div
      className={`group relative flex overflow-hidden [--gap:3rem] [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] ${className}`}
    >
      <div
        className="flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] pr-[var(--gap)]"
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] pr-[var(--gap)]"
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
