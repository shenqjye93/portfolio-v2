import { profile, experience, projects } from "@/lib/site";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="relative z-[1] mx-auto max-w-[1280px] px-6 lg:grid lg:grid-cols-[minmax(0,40%)_minmax(0,56%)] lg:gap-14 lg:px-12">
      <header className="pb-8 pt-16 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-22">
        <div>
          <h1 className="text-[clamp(2.4rem,6vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em] text-text">
            {profile.name}
          </h1>
          <p className="mt-2.5 text-lg font-medium text-text">{profile.role}</p>
          <p className="mt-4 max-w-[34ch] text-subtext0">{profile.tagline}</p>

          <Nav />
        </div>

        <ul className="mt-8 flex list-none gap-5 p-0">
          {profile.socials.map((s) => {
            const external = s.href.startsWith("http");
            return (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="inline-block text-overlay0 transition-[color,transform] duration-200 ease-disc hover:-translate-y-0.5 hover:text-accent"
                >
                  <Icon name={s.icon} />
                </a>
              </li>
            );
          })}
        </ul>
      </header>

      <main id="main" className="pb-16 lg:py-22">
        <section id="about" className="mb-22 scroll-mt-12" aria-label="About">
          <h2 className="sticky top-0 z-[2] -mx-6 mb-7 bg-base/90 px-6 py-4 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-text backdrop-blur-lg lg:hidden">
            About
          </h2>
          <div className="prose-block">
            <p>
              I&apos;m an engineer who loves to explore and experiment. 
            </p>
            <p>
              Currently, I'm a Software Developer at{" "}
              <a
                className="inline-link font-bold !no-underline"
                href="https://cultcreative.asia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cult Creative
              </a>
              , a creator platform where I&apos;ve contributed in building our mobile app and several other key features. 
              I work closely with product manager, designers and developers to constantly improve our platform.
            </p>
            <p>
              Away from the keyboard I play ultimate frisbee — a sport with no
              referees, where players call their own fouls. It&apos;s a strange amount
              of trust to build a competitive game on, and it turns out to be good
              practice for code review.
            </p>
          </div>
        </section>

        <section id="experience" className="mb-22 scroll-mt-12" aria-label="Experience">
          <h2 className="sticky top-0 z-[2] -mx-6 mb-7 bg-base/90 px-6 py-4 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-text backdrop-blur-lg lg:hidden">
            Experience
          </h2>
          <ol className="cards flex list-none flex-col gap-8 p-0" role="list">
            {experience.map((e) => (
              <Card key={e.title} {...e} />
            ))}
          </ol>
        </section>

        <section id="projects" className="mb-16 scroll-mt-12" aria-label="Projects">
          <h2 className="sticky top-0 z-[2] -mx-6 mb-7 bg-base/90 px-6 py-4 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-text backdrop-blur-lg lg:hidden">
            Projects
          </h2>
          <ol className="cards flex list-none flex-col gap-8 p-0" role="list">
            {projects.map((p) => (
              <Card key={p.title} {...p} />
            ))}
          </ol>
        </section>

        <footer className="max-w-[var(--measure)] mt-10 text-sm text-overlay0">
          <p>
            Built with{" "}
            <a
              className="text-subtext0 hover:text-accent"
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              className="text-subtext0 hover:text-accent"
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind
            </a>
            , typeset in system fonts, coloured with{" "}
            <a
              className="text-subtext0 hover:text-accent"
              href="https://catppuccin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Catppuccin Macchiato
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}
