import Image from "next/image";
import { cn } from "@/utils/cn";
import Circle from "../common/Circle";
import RingPatterns from "../common/RingPatterns";
import Link from "next/link";

export default function Hero({ cms }: { cms: any }) {
  const baseUrl = process.env.NEXT_PUBLIC_CMS_URL;
  const { title, description, button, profilePicture } =
    cms.home.hero;
  const { images } = cms.main;

  return (
    <main
      style={{ overflow: "hidden" }}
      className={cn(
        "flex flex-col-reverse md:flex-row items-center px-container",
        "justify-end md:justify-center",
        "relative h-[86dvh] md:h-screen",
        "gap-5 md:gap-0"
      )}
    >
      {/* Title  */}
      <div className="relative flex flex-col items-center md:items-start justify-center gap-5 md:gap-10 z-10">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="h1-bold w-[100%] md:w-[70%] text-center md:text-left mb-7 md:mb-0">
            <span>{title.top}</span>{" "}
            <span>{title.bottom[0]}</span>
            <span className="text-green border-b-4 border-white">
              {title.bottom[1]}
            </span>
            <span>{title.bottom[2]}</span>
          </h1>
          {/* <h1 className="h1-bold"></h1> */}
          {/* <h1 className="h1-bold">
            <span>{title.bottom[0]}</span>
            <span className="text-green border-b-4 border-white">
              {title.bottom[1]}
            </span>
            <span>{title.bottom[2]}</span>
          </h1> */}
        </div>
        <p className="h4-regular text-center md:text-left w-[100%] md:w-[40%]">
          {description}
        </p>
        <Link
          href={"#footer"}
          className="button-variant-underline"
        >
          {button}
        </Link>
      </div>

      {/* <Image */}
      <div
        className={cn(
          "relative md:absolute",
          "right-0 md:-right-12 xl:-right-5 top-0 px-container",
          "w-[60%] md:w-[65%] lg:w-[60%] h-[35dvh] md:h-full"
        )}
      >
        <Image
          src={`${baseUrl}${profilePicture}`}
          alt="Profile"
          width={1080}
          height={720}
          className="object-cover relative w-full h-full"
          loading="eager"
        />
      </div>

      <Circle
        size={["120px", "170px", "100px"]}
        coords={{
          x: ["85%", "88%", "49%"],
          y: ["25%", "75%", "60%"],
        }}
      />
      <RingPatterns
        src={`${baseUrl}${images.patternRings}`}
        size={["600px", "600px", "500px"]}
        coords={{
          x: ["-115%", "-40%", "-8%"],
          y: ["0%", "18%", "22%"],
        }}
      />
    </main>
  );
}
