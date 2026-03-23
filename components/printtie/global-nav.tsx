"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container1440 } from "@/components/printtie/container-1440";
import { cn } from "@/lib/utils";
import { getMe as apiGetMe, logout as apiLogout } from "@/lib/printtie-mock";

const items: Array<{ href: string; label: string }> = [
  { href: "/feed", label: "Feed" },
  { href: "/artists/kim-sujin", label: "Artists" },
  { href: "/my/subscriptions", label: "Subscriptions" },
  { href: "/cart", label: "Cart" },
  { href: "/orders", label: "Orders" },
];

export function GlobalNav({ activeHref }: { activeHref?: string }) {
  const [user, setUser] = useState<{ id: number; email: string; name?: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function fetchMe() {
      try {
        // use mock API helper which exports getMe-like helper
        const me = await apiGetMe();
        if (mounted) setUser(me?.user ?? null);
      } catch {
        if (mounted) setUser(null);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchMe();
    return () => {
      mounted = false;
    };
  }, []);

  async function handleLogout() {
    // call API to invalidate refresh if needed and clear local tokens
    await apiLogout();
    setUser(null);
    // reload to update any server-side rendered parts or just navigate
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  }

  return (
    <nav className="fixed top-0 left-1/2 z-50 w-[1440px] -translate-x-1/2 border-b border-pt-border/80 bg-pt-bg/60 shadow-pt-sm backdrop-blur-sm">
      <Container1440>
        <div className="flex items-center justify-between px-6 py-4 font-atkinson">
          <Link href="/feed" className="text-lg font-semibold text-pt-text">
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

            {/* Auth buttons */}
            {!loading && !user && (
              <Link
                href="/login"
                className="rounded-md bg-pt-primary px-3 py-1 text-white hover:bg-pt-primary/90"
              >
                로그인
              </Link>
            )}

            {!loading && user && (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-pt-text2">{user.name ?? user.email}</span>
                <button
                  onClick={handleLogout}
                  className="rounded-md bg-pt-border/60 px-3 py-1 text-sm text-pt-text hover:bg-pt-border"
                >
                  로그아웃
                </button>
              </div>
            )}
          </div>
        </div>
      </Container1440>
    </nav>
  );
}
