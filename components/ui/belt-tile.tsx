"use client";

export function CoverTile({
  title,
  subtitle,
  coverUrl,
}: {
  title: string;
  subtitle: string;
  coverUrl: string | null;
}) {
  return (
    <div className="group relative h-64 w-44 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 hover:border-white/30">
      {coverUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={coverUrl}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition group-hover:scale-[1.04]"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-4">
          <p className="font-display text-center text-xl font-bold uppercase leading-tight tracking-[-0.02em] text-white">
            {title}
          </p>
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-3">
        <p className="font-display text-sm font-bold uppercase leading-tight tracking-[-0.01em] text-white line-clamp-2">
          {title}
        </p>
        <p className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white/60">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export function TextTile({
  label,
  accent = "white",
  kind = "item",
}: {
  label: string;
  accent?: string;
  kind?: string;
}) {
  return (
    <div
      className="group flex h-56 w-56 shrink-0 flex-col justify-between rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 hover:border-white/30"
      style={{ borderLeftColor: accent, borderLeftWidth: "3px" }}
    >
      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white/40">
        {kind}
      </span>
      <p className="font-display text-2xl font-bold uppercase leading-[0.95] tracking-[-0.02em] text-white">
        {label}
      </p>
    </div>
  );
}

export function LogoTile({
  name,
  logoUrl,
  accent,
}: {
  name: string;
  logoUrl: string;
  accent: string;
}) {
  return (
    <div className="group relative flex h-56 w-56 shrink-0 flex-col items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-black/40 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 hover:border-white/30">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50 blur-2xl transition group-hover:opacity-80"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accent} 0%, transparent 65%)`,
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoUrl}
        alt={name}
        className="relative h-28 w-28 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
      />
      <p className="relative mt-4 font-display text-center text-sm font-bold uppercase tracking-[-0.01em] text-white">
        {name}
      </p>
    </div>
  );
}
