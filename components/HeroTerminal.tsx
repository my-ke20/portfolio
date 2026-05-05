import { Download, FolderKanban } from "lucide-react";
import { AnimatedCircuit } from "@/components/AnimatedCircuit";
import { OptimizedImage } from "@/components/OptimizedImage";
import { images } from "@/components/site-data";

const bootLines = [
  "boot://portfolio.kernel",
  "loading embedded systems profile...",
  "calibrating control loops...",
  "operator ready.",
];

export function HeroTerminal() {
  return (
    <section id="top" className="scanline-overlay relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 -z-20">
        <OptimizedImage
          src={images.hero}
          alt="Dark circuit board background"
          fill
          eager
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-circuit-grid bg-circuit opacity-70" />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <AnimatedCircuit />
      <div className="section-shell flex min-h-[calc(100vh-4rem)] items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-[fieldFade_0.6s_ease-out_both]">
            <p className="section-kicker">terminal://student_profile</p>
            <h1 className="max-w-4xl font-heading text-5xl font-bold uppercase leading-[0.95] text-primary sm:text-6xl lg:text-7xl">
              {"// "}
              Mechatronics Engineering Student
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              Building embedded systems, robotics workflows, and field-ready automation concepts from Kenya.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="industrial-button gap-2">
                <FolderKanban size={18} aria-hidden="true" />
                View Projects
              </a>
              <a href="/cv.pdf" download className="industrial-button-secondary gap-2">
                <Download size={18} aria-hidden="true" />
                Download CV
              </a>
            </div>
          </div>
          <div className="hud-panel hud-corners animate-[fieldFade_0.65s_ease-out_0.15s_both] p-4">
            <div className="border border-signal/20 bg-background/90 p-5">
              <div className="mb-5 flex items-center justify-between border-b border-signal/20 pb-3 font-heading text-xs uppercase text-signal">
                <span>boot sequence</span>
                <span>live</span>
              </div>
              <div className="space-y-4 font-body text-sm text-primary">
                {bootLines.map((line, index) => (
                  <p
                    key={line}
                    className="flex gap-3"
                    style={{ animation: `fieldFade 0.4s ease-out ${0.35 + index * 0.18}s both` }}
                  >
                    <span className="text-amber">0{index + 1}</span>
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
