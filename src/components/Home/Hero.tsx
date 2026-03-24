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
      className="px-container relative h-screen flex items-center justify-between"
    >
      {/* Title  */}
      <div className="relative flex flex-col items-start justify-center gap-10 z-10">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="h1-bold">
            <span>{title.top}</span>
          </h1>
          <h1 className="h1-bold">
            <span>{title.bottom[0]}</span>
            <span className="text-green border-b-4 border-white">
              {title.bottom[1]}
            </span>
            <span>{title.bottom[2]}</span>
          </h1>
        </div>
        <p className="h4-regular w-[30vw]">{description}</p>
        <Link
          href={"#footer"}
          className="button-variant-underline"
        >
          {button}
        </Link>
      </div>

      {/* <Image */}
      <div className="absolute -right-5 top-0 h-full w-[60%] px-container">
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
        size="100px"
        coords={{ x: "49%", y: "60%" }}
      />
      <RingPatterns
        src={`${baseUrl}${images.patternRings}`}
        size="500px"
        coords={{ x: "-8%", y: "22%" }}
      />
    </main>
  );
}
