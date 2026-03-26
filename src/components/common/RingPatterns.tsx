"use client";
import {
  ResponsiveValues,
  useResponsive,
} from "@/hooks/useResponsive";
import Image from "next/image";

interface RingPatternsProps {
  size: string | any[];
  coords: {
    x: string | any[];
    y: string | any[];
  };
}

export default function RingPatterns({
  size,
  coords,
}: RingPatternsProps) {
  const RS = {
    size:
      typeof size === "string"
        ? size
        : useResponsive(size as ResponsiveValues<string>),
    coords: {
      x:
        typeof coords.x === "string"
          ? coords.x
          : useResponsive(
              coords.x as ResponsiveValues<string>
            ),
      y:
        typeof coords.y === "string"
          ? coords.y
          : useResponsive(
              coords.y as ResponsiveValues<string>
            ),
    },
  };

  return (
    <div
      className="absolute"
      style={{
        width: RS.size,
        height: "auto",
        // inset: `${coords.y}px ${coords.x}px`,
        left: RS.coords.x,
        top: RS.coords.y,
      }}
    >
      <Image
        src={"/images/pattern-rings.svg"}
        alt="Ring Patterns"
        width={200}
        height={100}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
