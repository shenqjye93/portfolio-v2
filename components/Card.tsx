interface Props {
	date: string;
	title: string;
	org?: string | null;
	orgHref?: string | null;
	summary: string;
	bullets?: readonly string[];
	tech?: readonly string[];
}

const bold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

export default function Card({
	date,
	title,
	org,
	orgHref,
	summary,
	bullets = [],
	tech = [],
}: Props) {
	return (
		<li className="card transition-opacity duration-[260ms] ease-disc">
			<div className="card-inner group -m-[1.1rem] grid gap-x-6 gap-y-1.5 rounded-lg border border-transparent p-[1.1rem] transition-[background-color,border-color,transform] duration-[260ms] ease-disc md:grid-cols-[max-content_minmax(0,1fr)] hover:border-surface1 hover:bg-surface0/55 hover:-translate-y-0.5 focus-within:border-surface1 focus-within:bg-surface0/55 focus-within:-translate-y-0.5">
				<div className="whitespace-nowrap pt-1.5 font-mono text-[0.7rem] uppercase tracking-[0.09em] text-overlay0">
					{date}
				</div>
				<div>
					<h3 className="text-base font-semibold leading-snug text-text transition-colors group-hover:text-accent group-focus-within:text-accent">
						{orgHref ? (
							<a
								className="inline-link"
								href={orgHref}
								target="_blank"
								rel="noopener noreferrer"
							>
								{title}
								<span className="font-normal text-subtext0"> · {org}</span>
							</a>
						) : (
							<>
								{title}
								{org && (
									<span className="font-normal text-subtext0"> · {org}</span>
								)}
							</>
						)}
					</h3>
					<div className="mt-2 text-[0.94rem]">
						<p dangerouslySetInnerHTML={{ __html: bold(summary) }} />
						{bullets.length > 0 && (
							<ul className="card-bullets">
								{bullets.map((b, i) => (
									<li key={i} dangerouslySetInnerHTML={{ __html: bold(b) }} />
								))}
							</ul>
						)}
						{tech.length > 0 && (
							<ul className="mt-3.5 flex list-none flex-wrap gap-1.5 p-0">
								{tech.map((t) => (
									<li
										key={t}
										className="whitespace-nowrap rounded-full bg-accent-2/15 px-2.5 py-0.5 font-mono text-[0.7rem] text-accent-2"
									>
										{t}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</li>
	);
}
