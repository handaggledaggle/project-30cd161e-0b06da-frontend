import { cn } from "@/lib/utils";

export function Container1440({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-[1440px] max-w-[1440px]",
        "px-0",
        className
      )}
    >
      {children}
    </div>
  );
}
