import { fetchCMSData } from "@/lib/cms";
import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  console.log("lang", lang);
  // const mainData = await fetchCMSData({
  //   region: lang,
  // });
  const homeData = await fetchCMSData({
    region: lang,
    path: "home",
  });
  console.log("homeData", homeData.skills);

  return (
    <>
      <Hero
        cms={{
          home: homeData,
          // main: mainData,
        }}
      />
      <Skills skills={homeData.skills} />
      {/* <p>{JSON.stringify(homeData.skills.title)}</p> */}
      <p>{homeData.hero.title.top}</p>
    </>
  );
}
