import { timeline } from "@/components/site-data";
import { Reveal } from "@/components/Reveal";

export function Timeline() {
  return (
    <div className="mt-12 border-l border-amber/30">
      {timeline.map((item, index) => (
        <Reveal key={item.organization} delay={index * 0.08}>
          <article className="relative ml-6 pb-10">
            <span className="absolute -left-[31px] top-1 h-3 w-3 border border-amber bg-background shadow-hud" />
            <p className="font-heading text-xs uppercase text-amber">{item.period}</p>
            <h3 className="mt-2 font-heading text-2xl uppercase text-primary">
              {"// "}
              {item.organization}
            </h3>
            <p className="mt-1 text-sm uppercase text-signal">{item.role}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">{item.detail}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
