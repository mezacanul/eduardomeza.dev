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
  // console.log("lang", lang);
  const mainData = await fetchCMSData({
    region: lang,
  });
  const homeData = await fetchCMSData({
    region: lang,
    path: "home",
  });
  // console.log("skills from page.tsx", homeData.skills);

  return (
    <div>
      <Hero
        cms={{
          home: homeData,
          main: mainData,
        }}
      />
      <Skills skills={homeData.skills} cms={mainData} />
      <Projects projects={homeData.projects} />
    </div>
  );
}
