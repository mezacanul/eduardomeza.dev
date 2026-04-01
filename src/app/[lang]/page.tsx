import { fetchCMSData } from "@/lib/cms";
import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import Projects from "@/components/Home/Projects";
import { getMetadataObject } from "@/utils/metadata";
import About from "@/components/Home/About";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const homeData = await fetchCMSData({
    region: lang,
    resource: "home",
  });
  return getMetadataObject(homeData.metadata);
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const homeData = await fetchCMSData({
    region: lang,
    resource: "home",
  });
  // console.log("homeData", homeData);

  return (
    <div>
      <Hero cms={homeData} />
      <About about={homeData.about} />
      <Projects projects={homeData.projects} />
      <Skills skills={homeData.skills} />
    </div>
  );
}
