interface CircleProps {
  size?: string;
  coords: {
    x: string;
    y: string;
  };
}

export default function Circle({
  size = "100px",
  coords,
}: CircleProps) {
  return (
    <div
      className="absolute"
      style={{
        width: size,
        height: size,
        // inset: `${coords.y}px ${coords.x}px`,
        left: coords.x,
        top: coords.y,
      }}
    >
      <div className="w-full h-full bg-transparent border-2 border-white rounded-full"></div>
    </div>
  );
}
