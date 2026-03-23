import Image from "next/image";

interface RingPatternsProps {
  src: string;
  size: string;
  coords: {
    x: string;
    y: string;
  };
}

export default function RingPatterns({
  src,
  size,
  coords,
}: RingPatternsProps) {
  return (
    <div
      className="absolute"
      style={{
        width: size,
        height: "auto",
        // inset: `${coords.y}px ${coords.x}px`,
        left: coords.x,
        top: coords.y,
      }}
    >
      <Image
        src={src}
        alt="Ring Patterns"
        width={200}
        height={100}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
