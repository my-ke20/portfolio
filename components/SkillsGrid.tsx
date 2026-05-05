import { skills } from "@/components/site-data";

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skills.map((skill) => (
        <div key={skill.name} className="terminal-panel p-4">
          <div className="mb-3 flex items-center justify-between gap-4 font-heading text-sm uppercase">
            <span className="text-primary">{skill.name}</span>
            <span className="text-amber">{skill.level}%</span>
          </div>
          <div className="h-2 border border-signal/25 bg-background">
            <div className="h-full bg-signal" style={{ width: `${skill.level}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
