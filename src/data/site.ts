// All copy lives here so editing the site never means editing layout.

export const profile = {
  name: "Sam Ng",
  role: "Full-Stack Engineer",
  tagline:
    "I build platforms end to end — transactional backends, admin dashboards, and the mobile apps that talk to them.",
  email: "sam@cultcreative.asia",
  socials: [
    { label: "GitHub", href: "https://github.com/shenqjye93", icon: "github" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Email", href: "mailto:sam@cultcreative.asia", icon: "mail" },
  ],
} as const;

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "spirit", label: "Spirit of the Game" },
] as const;

export const experience = [
  {
    date: "Oct 2025 — Present",
    title: "Full-Stack Engineer",
    org: "Cult Creative",
    orgHref: "https://cultcreative.asia",
    summary:
      "Shipping across four production repositories — a TypeScript/Express backend, a React admin dashboard, a React Native app, and the marketing site — in a ticket-driven PR workflow alongside ~20 engineers.",
    bullets: [
      "Designed the gamification engine (XP, ranks, achievements, leaderboards) to be **idempotent by construction** — database unique constraints and event-sourced aggregation mean retried requests and concurrent approvals collide safely instead of double-awarding.",
      "Built mobile JWT authentication with refresh-token rotation, hashed at-rest storage, and **revocation of an entire token family on reuse detection** — the OAuth 2.0 best practice for public clients.",
      "Delivered the logistics system across three clients: a 2,300-line backend service layer, 20+ dashboard components, and the mobile module, on one shared data model.",
      "Built real-time infrastructure on Socket.IO with a Redis adapter for horizontal scaling, plus Expo Push with chunked delivery, receipt error handling, and stale-token cleanup.",
    ],
    tech: ["TypeScript", "Node.js", "Prisma", "PostgreSQL", "React", "React Native", "Redis", "Socket.IO"],
  },
] as const;

export const work = [
  {
    date: "2026",
    title: "Gamification Engine",
    org: null,
    orgHref: null,
    summary:
      "XP, ranks, achievements, and leaderboards for a creator platform. The hard part was not the scoring — it was making every write safe under retries and concurrent approvals.",
    bullets: [
      "Unique constraints as the concurrency primitive: catch the constraint violation rather than check-then-write, so two routes reaching the same approval collide in the database instead of double-counting.",
      "Achievement progress is event-sourced — rows are the source of truth and totals are derived, never cached and never drifting.",
      "Awards are fire-and-forget from the submission path, so gamification can never fail or block a creator's actual work.",
    ],
    tech: ["TypeScript", "Prisma", "PostgreSQL", "Transactions"],
  },
  {
    date: "2026",
    title: "Mobile Authentication",
    org: null,
    orgHref: null,
    summary:
      "The full token lifecycle for a React Native client — Google OAuth, Apple Sign-In, OTP, and a refresh flow built to survive a stolen token.",
    bullets: [
      "Refresh tokens are stored hashed and rotated on every use; detecting a reused token revokes the whole family.",
      "Implemented Apple's client-secret JWT generation and identity-token verification end to end.",
    ],
    tech: ["JWT", "OAuth 2.0", "Apple Sign-In", "Expo"],
  },
] as const;
