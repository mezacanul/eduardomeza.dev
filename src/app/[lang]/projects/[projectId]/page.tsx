import { fetchCMSData } from "@/lib/cms";
import Link from "next/link";
import Hero from "@/components/Project/Hero";
import Content from "@/components/Project/Content";
import { getMetadataObject } from "@/utils/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; projectId: string }>;
}) {
  const { lang, projectId } = await params;
  const projectData = await fetchCMSData({
    region: lang,
    resource: projectId,
  });
  return getMetadataObject(projectData.metadata);
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; projectId: string }>;
}) {
  const { lang, projectId } = await params;
  const projectData = await fetchCMSData({
    region: lang,
    resource: projectId,
  });
  // console.log("projectData", projectData);

  return (
    <>
      <Hero project={projectData} />
      <Content project={projectData} />

      <div className="w-full flex justify-center pb-[4rem] md:pb-[4rem] xl:pb-[5rem]">
        <Link
          className="button-variant-underline"
          href={`/${lang}`}
        >
          {projectData.gotoHome}
        </Link>
      </div>
    </>
  );
}
