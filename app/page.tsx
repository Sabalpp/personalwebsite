import { AuroraSplash } from "@/components/ui/aurora-splash";
import { CoverTile } from "@/components/ui/belt-tile";
import ExpandOnHover from "@/components/ui/expand-cards";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ParallaxHero } from "@/components/ui/parallax-scrolling";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#interests", label: "Interests" },
  { href: "#projects", label: "Projects" },
  { href: "#connect", label: "Connect" },
];

// Amazon ISBN10-based cover URLs (stable, no auth required)
const amazonCover = (isbn10: string) =>
  `https://images-na.ssl-images-amazon.com/images/P/${isbn10}.jpg`;

const books = [
  { title: "Can't Hurt Me", author: "Goggins", url: amazonCover("1544512287") },
  {
    title: "Never Finished",
    author: "Goggins",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kTAlYqB9ehuDLhL0AoKDzJpjg6YZElcWKpDCK6hwvKfuFo65GMhk1Bq71FSadNSL5fSaZtGc4rAqxIe6Tj7ZtrwnKOV1OX57gxpH1Co&s=10",
  },
  { title: "The Subtle Art", author: "Manson", url: amazonCover("0062457713") },
  { title: "48 Laws of Power", author: "Greene", url: amazonCover("0140280197") },
  { title: "Art of Seduction", author: "Greene", url: amazonCover("0142001198") },
  { title: "Deep Work", author: "Newport", url: amazonCover("1455586692") },
  { title: "So Good They Can't Ignore You", author: "Newport", url: amazonCover("1455509124") },
  { title: "Atomic Habits", author: "Clear", url: amazonCover("0735211299") },
  { title: "Book of Five Rings", author: "Musashi", url: amazonCover("1590302486") },
  { title: "Relentless", author: "Grover", url: amazonCover("1476714207") },
  { title: "Extreme Ownership", author: "Willink", url: amazonCover("1250067057") },
  { title: "Shoe Dog", author: "Knight", url: amazonCover("1501135910") },
  { title: "Elon Musk", author: "Isaacson", url: amazonCover("1982181281") },
  { title: "The Alchemist", author: "Coelho", url: amazonCover("0062315005") },
  { title: "12 Rules for Life", author: "Peterson", url: amazonCover("0345816021") },
  { title: "Ultralearning", author: "Young", url: "https://covers.openlibrary.org/b/isbn/9780062852687-L.jpg" },
  { title: "Models", author: "Manson", url: amazonCover("1463750358") },
  { title: "Millionaire Fastlane", author: "DeMarco", url: amazonCover("0984358102") },
  { title: "Endurance", author: "Lansing", url: amazonCover("0465062881") },
  { title: "Born a Crime", author: "Noah", url: amazonCover("0399588175") },
];

// Manga covers verified live from AniList GraphQL
const manga = [
  {
    title: "Blue Lock",
    url: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx106130-yPNeuSu75ey1.jpg",
  },
  {
    title: "Vagabond",
    url: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30656-9mW113O7rDnA.png",
  },
  {
    title: "Solo Leveling",
    url: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105398-b673Vt5ZSuz3.jpg",
  },
  {
    title: "Vinland Saga",
    url: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30642-0mjRDkf4THpo.jpg",
  },
  {
    title: "One Punch Man",
    url: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx85364-O28PUKbABg8y.jpg",
  },
  {
    title: "Slam Dunk",
    url: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30051-5KJyPlO7z5F4.png",
  },
  {
    title: "Ao Ashi",
    url: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx107279-R2vxyPQRqV0X.jpg",
  },
  {
    title: "Oshi no Ko",
    url: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx117195-r3kf8eF0xkDJ.png",
  },
  {
    title: "Jujutsu Kaisen",
    url: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101517-H3TdM3g5ZUe9.jpg",
  },
  {
    title: "Sakamoto Days",
    url: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx125828-p78Z8SflkfmO.jpg",
  },
  {
    title: "The Climber",
    url: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx37375-wkgev4kXhamw.png",
  },
  {
    title: "Mob Psycho 100",
    url: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx85189-06aXUBq5jwce.jpg",
  },
  {
    title: "Dr. Stone",
    url: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/b98416-L44f4idEGMAX.jpg",
  },
  {
    title: "Omniscient Reader",
    url: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx119257-Pi21aq3ey9GG.jpg",
  },
];

const sportCards = [
  {
    src: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    label: "Liverpool FC",
  },
  {
    src: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Kansas_City_Chiefs_logo.svg",
    label: "KC Chiefs",
  },
  {
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg",
    label: "Warriors",
  },
  {
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
    label: "Nepal Football",
  },
];

const projects = [
  {
    year: "2026",
    title: "RemitSafe",
    desc: "Kiro hackathon. Safer remittance rails for diaspora families.",
    href: "https://devpost.com/sabalp-np",
  },
  {
    year: "2026",
    title: "Web-CAT CLI",
    desc: "Terminal submitter for Virginia Tech's CS grader. Ships from the shell.",
    href: "https://github.com/Sabalpp",
  },
  {
    year: "2025",
    title: "MIT Hardware Hackathon",
    desc: "Third place. Built hardware under pressure with people I'd just met.",
    href: "https://devpost.com/sabalp-np",
  },
  {
    year: "2025",
    title: "Cursor × Minimax",
    desc: "Finalist. Agent-driven workflow with AI orchestration.",
    href: "https://devpost.com/sabalp-np",
  },
];

const facts: { k: string; v: string; num?: number; suffix?: string }[] = [
  { k: "Based", v: "Blacksburg, VA" },
  { k: "From", v: "Nepal" },
  { k: "School", v: "Virginia Tech" },
  { k: "Studying", v: "CS + CMDA" },
  { k: "Started college", v: "Age 16", num: 16 },
  { k: "Hackathons", v: "6+", num: 6, suffix: "+" },
];

const connectLinks = [
  { href: "mailto:Sabalp@vt.edu?subject=Hello%20Sabal", label: "Email" },
  { href: "https://github.com/Sabalpp", label: "GitHub" },
  { href: "https://www.linkedin.com/in/sabal-poudel-87b894329", label: "LinkedIn" },
  { href: "https://devpost.com/sabalp-np", label: "Devpost" },
];

export default function Home() {
  return (
    <main className="grain relative min-h-screen bg-[var(--background)]">
      <ScrollProgress />

      <nav className="fixed inset-x-0 bottom-6 z-40 flex flex-wrap justify-center gap-2 px-4">
        {navLinks.map((l) => (
          <a
            key={l.href}
            className="rounded-full border border-white/10 bg-black/60 px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-md transition hover:border-white/25 hover:text-white"
            href={l.href}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <ParallaxHero />

      <section className="border-t border-white/5 px-6 py-24 md:px-12 md:py-32" id="about">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white/40">
              About
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="font-display mt-8 max-w-4xl text-5xl font-bold uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-7xl">
              Hey, I&apos;m Sabal. Aspiring founder in waiting.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-14 grid gap-10 text-base leading-[1.7] text-white/60 md:grid-cols-2 md:text-lg">
              <p>
                I love tech, soccer, and reading philosophy books. Virginia Tech
                student. First-gen. Nepali roots. Graduated high school at 16.
              </p>
              <p>
                Waiting to be a founder means building now — hackathons, side
                projects, code as leverage. Long-term games with long-term
                people. Everything else is noise.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/5 pt-12 md:grid-cols-3">
              {facts.map((f) => (
                <div key={f.k}>
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/40">
                    {f.k}
                  </dt>
                  <dd className="mt-3 font-display text-2xl font-bold uppercase tracking-[-0.02em] text-white md:text-3xl">
                    {f.num !== undefined ? (
                      <>
                        <NumberTicker value={f.num} suffix={f.suffix ?? ""} />
                      </>
                    ) : (
                      f.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="relative overflow-hidden border-t border-white/5 py-24 md:py-32"
        id="interests"
      >
        <AuroraSplash />

        <div className="relative mx-auto max-w-5xl px-6 md:px-12">
          <ScrollReveal>
            <h2 className="font-display max-w-3xl text-5xl font-bold uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-7xl">
              Interests
            </h2>
          </ScrollReveal>
        </div>

        {/* Books + manga together on top */}
        <div className="relative mt-14 space-y-6">
          <Marquee speed={110}>
            {books.map((b) => (
              <CoverTile
                key={b.title}
                title={b.title}
                subtitle={b.author}
                coverUrl={b.url}
              />
            ))}
          </Marquee>

          <Marquee speed={95} reverse>
            {manga.map((m) => (
              <CoverTile
                key={m.title}
                title={m.title}
                subtitle="Manga"
                coverUrl={m.url}
              />
            ))}
          </Marquee>
        </div>

        {/* Sports — expand on hover cards */}
        <div className="relative mx-auto mt-20 max-w-5xl px-6 md:px-12">
          <ScrollReveal>
            <h3 className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white md:text-5xl">
              Sport
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10">
              <ExpandOnHover cards={sportCards} defaultExpanded={1} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-white/5 px-6 py-24 md:px-12 md:py-32" id="projects">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white/40">
              Projects
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="font-display mt-8 max-w-3xl text-5xl font-bold uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-7xl">
              Things I shipped instead of sleeping.
            </h2>
          </ScrollReveal>

          <ul className="mt-14 divide-y divide-white/5 border-y border-white/5">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={0.05 + i * 0.04}>
                <li>
                  <a
                    className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 py-7 transition hover:bg-white/[0.02]"
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/40">
                      {p.year}
                    </span>
                    <div>
                      <p className="font-display text-2xl font-bold uppercase tracking-[-0.02em] text-white md:text-3xl">
                        {p.title}
                      </p>
                      <p className="mt-2 text-sm text-white/50 md:text-base">
                        {p.desc}
                      </p>
                    </div>
                    <span className="text-white/30 transition group-hover:translate-x-1 group-hover:text-white/80">
                      →
                    </span>
                  </a>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/5 px-6 py-24 md:px-12 md:py-32" id="connect">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white/40">
              Connect
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="font-display mt-8 max-w-3xl text-5xl font-bold uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-7xl">
              Reach out if you build, think, or move fast.
            </h2>
          </ScrollReveal>
          <ul className="mt-14 divide-y divide-white/5 border-y border-white/5">
            {connectLinks.map((link, i) => (
              <ScrollReveal key={link.href} delay={0.05 + i * 0.04}>
                <li>
                  <a
                    className="group flex items-center justify-between py-5 text-base text-white/70 transition hover:text-white md:text-lg"
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span className="font-medium">{link.label}</span>
                    <span className="text-white/30 transition group-hover:translate-x-1 group-hover:text-white/80">
                      →
                    </span>
                  </a>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-10 pb-28 text-center text-xs uppercase tracking-[0.24em] text-white/40">
        Inspired by{" "}
        <a
          className="text-white/70 transition hover:text-white"
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
