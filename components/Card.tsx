// One entry in Experience or Projects. `bullets` accept **bold** spans, which
// is the only markup the copy needs — anything more belongs in a real content
// collection rather than a string.
//
// Two shapes, chosen by the data rather than a prop:
//   · `image` set     → Projects: a fixed-width thumbnail leads the card.
//   · no bullets/tech → a single compact line, which is how pre-engineering
//                       roles appear: on the timeline, but not competing with
//                       the engineering work for attention.

import Icon from "./Icon";
import CardLink from "./CardLink";

interface Props {
	date?: string | null;
	image?: string | null;
	imageAlt?: string | null;
	title: string;
	org?: string | null;
	orgHref?: string | null;
	href?: string | null;
	hrefLabel?: string | null;
	summary: string;
	devExperience?: boolean;
	bullets?: readonly string[];
	tech?: readonly string[];
}

const bold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

export default function Card({
	date,
	image,
	imageAlt,
	title,
	org,
	orgHref,
	href,
	hrefLabel,
	summary,
	devExperience = true,
	bullets = [],
	tech = [],
}: Props) {
	const cardHref = href ?? orgHref ?? null;

	const columns = image
		? "md:grid-cols-[13rem_minmax(0,1fr)]"
		: "md:grid-cols-[7.5rem_minmax(0,1fr)]";

	const border = !devExperience
		? ""
		: "hover:border-surface1 hover:bg-surface0/55 has-[:focus-visible]:border-surface1 has-[:focus-visible]:bg-surface0/55 has-[:focus-visible]:-translate-y-0.5";

	return (
		<li className="card transition-opacity duration-[260ms] ease-disc">
			<div
				className={`card-inner group -m-[1.1rem] grid gap-x-6 gap-y-1.5 rounded-lg border border-transparent p-[1.1rem] transition-[background-color,border-color,transform] duration-[260ms] ease-disc ${columns} ${cardHref ? "cursor-pointer" : ""} ${border}`}
			>
				{image ? (
					<img
						src={image}
						alt={imageAlt ?? ""}
						loading="lazy"
						decoding="async"
						className="mt-1 w-full rounded-md border border-surface1 bg-surface0 object-cover aspect-[3/2] transition-colors duration-[260ms] ease-disc group-hover:border-surface2"
					/>
				) : (
					<div className="whitespace-nowrap pt-1.5 font-mono text-[0.7rem] uppercase tracking-[0.09em] text-overlay0">
						{date}
					</div>
				)}

				<div>
					<h3 className="text-base font-semibold leading-snug text-text transition-colors group-hover:text-accent group-has-[:focus-visible]:text-accent">
						{cardHref ? (
							<CardLink href={cardHref}>
								{title}
								{org && (
									<span className="font-normal text-subtext0"> · {org}</span>
								)}
							</CardLink>
						) : (
							<>
								{title}
								{org && (
									<span className="font-normal text-subtext0"> · {org}</span>
								)}
							</>
						)}
					</h3>

					{href && hrefLabel && (
						<span className="mt-1 inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-overlay0 transition-colors duration-200 ease-disc group-hover:text-accent">
							<Icon name="link" />
							{hrefLabel}
						</span>
					)}

					<div className="mt-1.5 text-[0.94rem]">
						<p
							className="leading-snug"
							dangerouslySetInnerHTML={{ __html: bold(summary) }}
						/>
						{/* {bullets.length > 0 && (
              <ul className="card-bullets">
                {bullets.map((b, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: bold(b) }} />
                ))}
              </ul>
            )} */}
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
