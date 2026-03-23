import { Container1440 } from "@/components/printtie/container-1440";

export function GlobalFooter() {
  return (
    <footer className="w-full bg-[#0f4b57]">
      <Container1440>
        <div className="flex items-center justify-center px-6 py-6 font-atkinson">
          <p className="text-sm text-cyan-100">© 2026 printtie. All rights reserved.</p>
        </div>
      </Container1440>
    </footer>
  );
}
