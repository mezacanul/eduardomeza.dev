import { fetchCMSData } from "@/lib/cms";
import Circle from "@/components/common/Circle";
import Image from "next/image";
import RingPatterns from "@/components/common/RingPatterns";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const cms = {
    home: await fetchCMSData({
      region: lang,
      path: "home",
    }),
    main: await fetchCMSData({
      region: lang,
    }),
  };
  const baseUrl = process.env.NEXT_PUBLIC_CMS_URL;
  const { title, description, button, profilePicture } =
    cms.home.hero;
  const { images } = cms.main;
  // console.log("patternRings", patternRings);
  // const imageUrl = `${baseUrl}${profilePicture}`;
  // console.log("imageUrl", imageUrl);

  return (
    <main className="px-container relative h-screen flex items-center justify-between">
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
        <p className="h4-regular w-[30vw]">
          {description}
        </p>
        <button className="btn-primary">{button}</button>
      </div>

      {/* <Image */}
      <div className="absolute -right-5 top-0 h-full w-[60%] px-container">
        <Image
          src={`${baseUrl}${profilePicture}`}
          alt="Profile"
          width={1080}
          height={720}
          className="object-cover relative w-full h-full"
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
