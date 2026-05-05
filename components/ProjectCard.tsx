import { OptimizedImage } from "@/components/OptimizedImage";

type ProjectCardProps = {
  project: {
    title: string;
    status: string;
    tagline: string;
    description: string;
    tech: string[];
    image: string;
    alt: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group hud-panel hud-corners overflow-hidden transition-colors hover:border-amber/70">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <OptimizedImage
          src={project.image}
          alt={project.alt}
          fill
          className="object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-background/40" />
        <span className="absolute left-4 top-4 border border-signal/40 bg-background/90 px-3 py-1 font-heading text-xs uppercase text-signal">
          {project.status}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-2xl uppercase text-primary">
          {"// "}
          {project.title}
        </h3>
        <p className="mt-2 text-sm uppercase text-amber">{project.tagline}</p>
        <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="border border-amber/25 px-2 py-1 text-xs uppercase text-primary">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
