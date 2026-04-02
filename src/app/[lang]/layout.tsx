import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { fetchCMSData } from "@/lib/cms";

const spaceGrotesk = Space_Grotesk({
  variable: "--next-font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Eduardo Meza",
  description: "Software Engineer",
};

type RootLayoutProps = {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
};

export default async function RootLayout({
  params,
  children,
}: Readonly<RootLayoutProps>) {
  const { lang } = await params;
  const cmsData = await fetchCMSData({
    region: lang,
    resource: "main",
  });
  // console.log("cmsData", cmsData);
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-dark text-light-100">
        <Header cms={cmsData} />
        {children}
        <Footer cms={cmsData} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(cmsData.jsonLD).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </body>
    </html>
  );
}
