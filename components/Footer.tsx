import { socialItems } from "@/components/site-data";

export function Footer() {
  return (
    <footer className="border-t border-amber/20 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-heading text-xs uppercase text-muted">
          {"// "}
          Mechatronics portfolio / Kenya
        </p>
        <div className="flex gap-3">
          {socialItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="grid h-10 w-10 place-items-center border border-amber/25 text-muted transition-colors hover:border-amber hover:text-amber"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
