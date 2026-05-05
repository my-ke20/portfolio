import { Cpu } from "lucide-react";
import { navItems } from "@/components/site-data";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-amber/20 bg-background/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#top" className="flex items-center gap-3 font-heading text-sm font-bold uppercase text-primary">
          <span className="grid h-9 w-9 place-items-center border border-amber/40 text-amber">
            <Cpu size={18} aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">Mechatronics Ops</span>
        </a>
        <div className="flex items-center gap-1 overflow-x-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative px-3 py-2 font-heading text-xs font-bold uppercase text-muted transition-colors hover:text-amber"
            >
              {item.label}
              <span className="absolute inset-x-3 bottom-1 h-px scale-x-0 bg-amber transition-transform group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
