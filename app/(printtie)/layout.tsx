import { GlobalNav } from "@/components/printtie/global-nav";
import { GlobalFooter } from "@/components/printtie/global-footer";

export default function PrinttieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-pt-bg">
      <GlobalNav />
      <div className="pt-[72px]">{children}</div>
      <GlobalFooter />
    </div>
  );
}
