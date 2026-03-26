import { fetchCMSData } from "@/lib/cms";
import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import Projects from "@/components/Home/Projects";

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
      <Skills skills={homeData.skills} />
      <Projects projects={homeData.projects} />
    </div>
  );
}
