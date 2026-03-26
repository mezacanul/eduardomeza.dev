import { cn } from "@/utils/cn";
import Image from "next/image";
import RingPatterns from "../common/RingPatterns";

interface HeroProps {
  project: any;
  cms: any;
}
export default function Hero({ project, cms }: HeroProps) {
  const baseUrl = process.env.NEXT_PUBLIC_CMS_URL;
  const {
    name,
    description,
    skills,
    img,
    data,
    align,
    position,
  } = project;
  const { patternRings } = cms.images;
  return (
    <div
      className={cn(
        "relative flex justify-center px-content",
        "h-[86dvh] lg:h-dvh pt-10 sm:pt-30 lg:pt-0 items-start lg:items-center",
        "overflow-hidden"
      )}
    >
      <BottomGreenSeparator />
      <div
        className={cn(
          "flex flex-col",
          "w-full lg:grid gap-10 lg:gap-4"
        )}
        style={{ gridTemplateColumns: "8fr 6fr" }}
      >
        <div className="relative aspect-9/6">
          <GreenBackdrop />
          <Image
            src={`${baseUrl}${img}`}
            alt={name}
            width={1000}
            height={400}
            className="object-cover w-full h-full z-10 relative rounded-sm shadow-sm"
            style={{
              objectPosition: align ? align : "center",
            }}
          />
        </div>

        {/* Content  */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-4 justify-center items-center w-[80%] text-center">
            <h1 className="h2-bold">{name}</h1>
            <p className="text-green h4-regular">
              {position}
            </p>
            <p className="p1 text-decoration-underline">
              {skills}
            </p>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <RingPatterns
        size={["400px", "500px", "650px"]}
        coords={{
          x: ["50%", "75%", "75%"],
          y: ["75%", "25%", "30%"],
        }}
      />
    </div>
  );
}

function GreenBackdrop() {
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

function BottomGreenSeparator() {
  return (
    <div className="absolute bottom-0 left-0 h-[1rem] w-full px-content">
      <div className="h-full w-full bg-green" />
    </div>
  );
}
