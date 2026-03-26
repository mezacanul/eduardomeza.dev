import { fetchCMSData } from "@/lib/cms";
import Link from "next/link";
import Hero from "@/components/Project/Hero";
import Content from "@/components/Project/Content";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; projectId: string }>;
}) {
  const { lang, projectId } = await params;
  const mainData = await fetchCMSData({
    region: lang,
    resource: "main",
  });
  const projectData = await fetchCMSData({
    region: lang,
    resource: projectId,
  });
  // console.log("projectData", projectData);

  return (
    <>
      <Hero project={projectData} cms={mainData} />
      <Content project={projectData} cms={mainData} />

      <div className="w-full flex justify-center pb-[4rem] md:pb-[4rem] xl:pb-[5rem]">
        <Link
          className="button-variant-underline"
          href={`/${lang}`}
        >
          {mainData.goto.home}
        </Link>
      </div>
    </>
  );
}
