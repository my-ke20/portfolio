import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type SectionWrapperProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      <div className="section-shell">
        <Reveal>
          <p className="section-kicker">{eyebrow}</p>
          <h2 className="section-title">
            {"// "}
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
