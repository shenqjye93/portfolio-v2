"use client";

// The card's stretched link.
//
// Clicking it opens a new tab and leaves focus behind on the anchor, so the
// card stays lit when the reader comes back — focus is still genuinely there,
// which is why no CSS selector fixes it. Releasing focus on click does.
//
// Only pointer clicks blur. A keyboard Enter keeps focus on the link, because
// that highlight is the only thing telling a keyboard user where they are.

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function CardLink({ href, children }: Props) {
  return (
    <a
      className="card-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        // detail === 0 means the activation came from the keyboard.
        if (e.detail > 0) e.currentTarget.blur();
      }}
    >
      {children}
    </a>
  );
}
