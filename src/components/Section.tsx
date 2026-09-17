import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 py-20 md:py-28 ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      {title && (
        <h2 className="max-w-3xl text-balance font-serif text-3xl leading-tight md:text-5xl">
          {title}
        </h2>
      )}
      {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>}
      {children && <div className="mt-12">{children}</div>}
    </section>
  );
}
