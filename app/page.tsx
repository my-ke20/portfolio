import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { HeroTerminal } from "@/components/HeroTerminal";
import { Navbar } from "@/components/Navbar";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Timeline } from "@/components/Timeline";
import { images, projects, systemStats } from "@/components/site-data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroTerminal />

        <SectionWrapper id="about" eyebrow="profile://operator" title="About">
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal>
              <div className="hud-panel hud-corners overflow-hidden p-3">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface [clip-path:polygon(50%_0,100%_23%,100%_77%,50%_100%,0_77%,0_23%)]">
                  <OptimizedImage
                    src={images.portrait}
                    alt="Engineering student working with technical equipment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 38vw"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="space-y-8">
                <div className="terminal-panel p-6">
                  <p className="text-sm leading-7 text-muted">
                    I am a Mechatronics Engineering student in Kenya focused on embedded systems,
                    robotics, automation, and practical hardware that survives real field conditions.
                    My work sits between mechanical design, electronics, control logic, and operator
                    interfaces.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {systemStats.map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <div key={stat.label} className="border border-amber/20 p-4">
                          <Icon className="text-amber" size={20} aria-hidden="true" />
                          <p className="mt-3 font-heading text-xs uppercase text-muted">{stat.label}</p>
                          <p className="mt-1 text-sm text-primary">{stat.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <SkillsGrid />
              </div>
            </Reveal>
          </div>
        </SectionWrapper>

        <SectionWrapper id="experience" eyebrow="log://field_exposure" title="Experience">
          <Timeline />
        </SectionWrapper>

        <SectionWrapper id="projects" eyebrow="repo://active_systems" title="Projects">
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="philosophy" eyebrow="doctrine://engineering" title="Philosophy">
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div className="space-y-6">
                <p className="text-sm leading-7 text-muted">
                  Good engineering is not decorative. It is measured by uptime, repairability,
                  clarity under pressure, and the ability to serve people who do not have time for
                  fragile systems.
                </p>
                <blockquote className="border-l-4 border-amber pl-5 font-heading text-2xl uppercase leading-tight text-amber md:text-4xl">
                  {"// "}
                  Build systems that can be understood, repaired, and trusted in the field.
                </blockquote>
                <p className="text-sm leading-7 text-muted">
                  That means simple interfaces, disciplined documentation, clean signal paths, and
                  hardware decisions grounded in the operating environment.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="hud-panel hud-corners relative aspect-[4/3] overflow-hidden">
                <OptimizedImage
                  src={images.philosophy}
                  alt="Aerial rural landscape representing field engineering context"
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-background/25" />
              </div>
            </Reveal>
          </div>
        </SectionWrapper>

        <SectionWrapper id="contact" eyebrow="comms://contact" title="Contact">
          <ContactForm />
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
