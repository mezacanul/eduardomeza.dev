import { cn } from "@/utils/cn";

export default function GreenBackdrop() {
  return (
    <div
      className={cn(
        "absolute w-full h-full bg-green rounded-sm",
        // "-top-3 -left-2",
        "md:-top-5 md:-left-5",
        "xl:-top-8 xl:-left-8"
      )}
    />
  );
}
