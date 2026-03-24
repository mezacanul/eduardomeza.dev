import { fetchProjectData } from "@/lib/cms";
import Image from "next/image";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; projectId: string }>;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_CMS_URL;
  const { lang, projectId } = await params;
  const projectData = await fetchProjectData({
    region: lang,
    projectId,
  });
  const { name, description, skills, img, data, align } =
    projectData;

  return (
    <div className="h-dvh flex justify-center items-center px-content">
      <div className="w-full grid grid-cols-2 gap-4">
        {/* <div className="h-auto"> */}
        <Image
          src={`${baseUrl}${img}`}
          alt={name}
          width={1000}
          height={400}
          className="object-cover aspect-9/6"
          style={{
            objectPosition: align ? align : "center",
          }}
        />
        {/* </div> */}

        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-4 justify-center items-center w-[70%] text-center">
            <h1 className="h2-bold">{name}</h1>
            <p>{skills}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
