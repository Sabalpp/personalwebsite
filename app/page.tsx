const contactLinks = [
  {
    href: "mailto:Sabalp@vt.edu?subject=Hello%20Sabal",
    label: "Sabalp@vt.edu",
  },
  {
    href: "https://github.com/Sabalpp",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/sabal-poudel-87b894329",
    label: "LinkedIn",
  },
  {
    href: "https://devpost.com/sabalp-np",
    label: "Devpost",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed inset-x-0 bottom-5 z-20 flex justify-center gap-3 px-4">
        <a
          className="rounded-full border border-white/15 bg-black/70 px-5 py-3 text-xs font-bold tracking-[0.2em] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/30"
          href="#about"
        >
          ABOUT
        </a>
        <a
          className="rounded-full border border-white/15 bg-black/70 px-5 py-3 text-xs font-bold tracking-[0.2em] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/30"
          href="#connect"
        >
          CONNECT
        </a>
      </nav>

      <section className="flex min-h-screen items-center justify-center bg-[#101114] px-1 md:px-2">
        <div className="mx-auto flex w-full max-w-[1640px] items-center justify-center">
          <h1 className="font-hero-loud w-full text-center text-[clamp(8rem,35vw,28rem)] leading-[0.88] tracking-[-0.03em] text-white">
            SABAL
          </h1>
        </div>
      </section>

      <section className="px-4 pb-6" id="about">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--panel-border)] bg-[var(--panel)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/70">
            ABOUT SABAL
          </p>
          <h2 className="font-display mt-4 max-w-4xl text-5xl uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
            Software-minded. Startup-pulled. More interested in things that compound.
          </h2>
          <div className="mt-8 grid gap-6 text-base leading-8 text-white/70 md:grid-cols-2 md:text-lg">
            <p>
              I&apos;m a Virginia Tech student pursuing CS + CMDA. I graduated high
              school at 16, I&apos;m first-gen, and I&apos;m trying to turn code into
              leverage instead of just assignments.
            </p>
            <p>
              The site is meant to feel personal before it feels polished.
              Hackathons, ideas, weird internet taste, and long-term builder energy
              matter more to me than sounding corporate.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-6" id="connect">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--panel-border)] bg-[var(--panel)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/70">
            CONNECT
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-4xl uppercase leading-[0.9] tracking-[-0.06em] md:text-6xl">
            Reach out if you build, think, or move fast.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                className="rounded-full border border-white/15 bg-black/60 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-4 pb-28 text-center text-sm text-white/50">
        Inspired by{" "}
        <a
          className="text-white/80 transition hover:text-white"
          href="https://www.abu.fyi/"
          target="_blank"
          rel="noreferrer"
        >
          Abu
        </a>
        . Fellow Hokie. Met at Cursor Hackathon.
      </footer>
    </main>
  );
}
