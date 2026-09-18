// All copy lives here so editing the site never means editing layout.

export const profile = {
	name: "Samuel Ng",
	role: "Full-Stack Engineer",
	tagline: "I build platforms end to end.",
	email: "shenqjye93@gmail.com",
	socials: [
		{ label: "GitHub", href: "https://github.com/shenqjye93", icon: "github" },
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/samnsj/",
			icon: "linkedin",
		},
		{ label: "Email", href: "mailto:shenqjye93@gmail.com", icon: "mail" },
	],
} as const;

export const sections = [
	{ id: "about", label: "About" },
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
] as const;

export const experience = [
	{
		date: "2025 - Present",
		title: "Software Developer",
		org: "Cult Creative",
		orgHref: "https://cultcreative.asia",
		summary:
			"Shipping across four production repositories - a TypeScript/Express backend, a React admin dashboard, a React Native app, and the marketing site - in a ticket-driven PR workflow alongside ~20 engineers.",
		bullets: [
			"Designed the gamification engine (XP, ranks, achievements, leaderboards) to be **idempotent by construction** - database unique constraints and event-sourced aggregation mean retried requests and concurrent approvals collide safely instead of double-awarding.",
			"Built mobile JWT authentication with refresh-token rotation, hashed at-rest storage, and **revocation of an entire token family on reuse detection** - the OAuth 2.0 best practice for public clients.",
			"Own the credit ledger: FIFO allocation across subscriptions, LIFO refunds on campaign close, and a **scheduled drift detector** that reconciles every wallet against its campaign allocations.",
			"Delivered the logistics system across three clients: a 2,300-line backend service layer, 20+ dashboard components, and the mobile module, on one shared data model.",
		],
		tech: [
			"TypeScript",
			"Node.js",
			"Prisma",
			"PostgreSQL",
			"React",
			"React Native",
			"Git",
		],
	},
	{
		date: "1.5 YEARS",
		title: "Tutor",
		org: "Build a Genius Sdn. Bhd.",
		orgHref: null,
		summary:
			"Taught Scratch and Python to 7-15 year olds by building games with them. Teaching people to program is the best way for me to learn and sharpen my programming skills",
		bullets: [],
		tech: [],
		devExperience: false,
	},
	{
		date: "5 YEARS",
		title: "Secondary School Teacher",
		org: "Axcel International School",
		orgHref: null,
		summary:
			"IGCSE Physics, and subject leader for the Physics team. Five years of explaining why and how something works, had to also be creative in finding ways to deliver syllabus in easily digestible manner.",
		bullets: [],
		tech: [],
		devExperience: false,
	},
] as const;

export const projects = [
	{
		image: "/projects/mobile-app.jpg",
		imageAlt:
			"Cult Creative app: campaign discovery, creator media kit, and campaign management screens",
		title: "Cult Creative App",
		org: "iOS",
		orgHref: null,
		href: null,
		hrefLabel: null,
		summary:
			"A React Native app for creators to pitch, submit work, and track campaigns. Built the gamification, authentication, and notification systems.",
		bullets: [
			"**Gamification engine** - XP, ranks, achievements, and leaderboards, made idempotent by construction. Unique constraints catch concurrent writes rather than check-then-write, and achievement progress is event-sourced so totals derive from rows and never drift.",
			"**Authentication** - Google OAuth and Apple Sign-In, with refresh tokens stored hashed, rotated on every use, and revoked family-wide when a reused token is detected.",
			"**Push notifications** - Expo Push with chunked delivery, ticket-receipt error handling, and automatic cleanup of unregistered devices, plus deep links that route a tap to the right screen.",
		],
		tech: [
			"React Native",
			"Expo",
			"TypeScript",
		],
	},
	{
		image: "/projects/web-app.jpg",
		imageAlt: "Cult Creative web app login screen",
		title: "Cult Creative Web App",
		org: null,
		orgHref: null,
		href: "https://app.cultcreativeasia.com",
		hrefLabel: "app.cultcreativeasia.com",
		summary:
			"The admin and client dashboard - campaign management, creator submissions, finance, and analytics. Built logistics system and improved existing credit ledger system.",
		bullets: [
			"**Credit ledger** - FIFO allocation charges the oldest subscription first; refunds reverse LIFO so credits return to whichever subscription expires soonest. A scheduled detector reconciles every wallet against its campaign allocations and reports drift without writing.",
			"**Logistics system** - product delivery and reservations across admin, client, and creator platform: scheduling calendar, multi-step workflows,and bulk assignment.",
			"**Finance** - bulk invoice approval processed through a background worker, wired into Xero.",
		],
		tech: [
			"React",
			"TypeScript",
			"Next.js",
			"Express",
			"Prisma",
			"PostgreSQL",
		],
	},
	{
		image: "/projects/waitlist.jpg",
		imageAlt: "Cult Creative app waitlist landing page",
		title: "Marketing Site & App Waitlist",
		org: null,
		orgHref: null,
		href: "https://cultcreativeasia.com",
		hrefLabel: "cultcreative.asia",
		summary:
			"The public creator-facing site, and a standalone waitlist app for the mobile launch that I built and deployed solo.",
		bullets: [
			"Built the creator landing experience - hero, testimonials, and an interactive card deck.",
			"**App waitlist** - the signup flow, Google Sheets integration for the ops team, and deployment to Cloud Run through a Cloud Build pipeline.",
		],
		tech: [
			"React",
			"Next.js",
			"Tailwind",
			"Google Sheets API",
			"Google Cloud Platform",
		],
	},
	{
		image: "/projects/pet-project.jpg",
		imageAlt: "Health Metrics dashboard showing exercise, blood pressure, and blood glucose charts",
		title: "Health Metrics",
		org: null,
		orgHref: null,
		href: "https://github.com/shenqjye93/fitness-tracker",
		hrefLabel: "github.com/shenqjye93/fitness-tracker",
		summary:
			"The project I taught myself web development on, before any of the above. A tracker for my own training and for my parents' blood pressure and glucose readings - two people who needed the same CRUD app for different reasons.",
		bullets: [
			"Built the backend in FastAPI and the frontend in vanilla HTML, CSS, and JavaScript - **no framework on either side**, so that the parts I did not understand stayed visible instead of being hidden behind one.",
			"Started on a JSON file and **migrated to SQLite** once the data model stopped fitting, writing a migration script rather than starting the data over.",
			"Broke the app on master, could not find where, and recovered it with Git. That is why I have worked on feature branches ever since - the habit predates the job that formalised it.",
		],
		tech: ["Python", "FastAPI", "SQLite", "JavaScript", "Chart.js", "Render"],
	},
] as const;
