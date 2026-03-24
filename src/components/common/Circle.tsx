"use client";

import {
  ResponsiveValues,
  useResponsive,
} from "@/hooks/useResponsive";

interface CircleProps {
  size?: string | any[];
  coords: {
    x: string | any[];
    y: string | any[];
  };
}

export default function Circle({
  size = "100px",
  coords,
}: CircleProps) {
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
        height: RS.size,
        left: RS.coords.x,
        top: RS.coords.y,
      }}
    >
      <div className="w-full h-full bg-transparent border-2 border-white rounded-full"></div>
    </div>
  );
}
