import Link from "next/link";
import { Container1440 } from "@/components/printtie/container-1440";
import { cn } from "@/lib/utils";

const items: Array<{ href: string; label: string }> = [
  { href: "/feed", label: "Feed" },
  { href: "/artists/kim-sujin", label: "Artists" },
  { href: "/my/subscriptions", label: "Subscriptions" },
  { href: "/cart", label: "Cart" },
  { href: "/orders", label: "Orders" },
];

export function GlobalNav({ activeHref }: { activeHref?: string }) {
  return (
    <nav className="fixed top-0 left-1/2 z-50 w-[1440px] -translate-x-1/2 border-b border-pt-border/80 bg-pt-bg/60 shadow-pt-sm backdrop-blur-sm">
      <Container1440>
        <div className="flex items-center justify-between px-6 py-4 font-atkinson">
          <Link
            href="/feed"
            className="text-lg font-semibold text-pt-text"
          >
            printtie
          </Link>
          <div className="flex items-center space-x-6 text-[14px]">
            {items.map((it) => {
              const active = activeHref ? activeHref === it.href : false;
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className={cn(
                    "text-pt-primary/90 hover:text-pt-text",
                    active && "text-pt-text"
                  )}
                >
                  {it.label}
                </Link>
              );
            })}
          </div>
        </div>
      </Container1440>
    </nav>
  );
}
