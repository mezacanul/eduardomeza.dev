"use client";
import Link from "next/link";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { getImagesBaseURL } from "@/utils/main";
import SectionTitle from "../common/SectionTitle";
import GreenBackdrop from "../common/GreenBackdrop";

export default function About({ about }: { about: any }) {
  const { title, content, button, urlToCV } = about;
  const cmsURL = process.env.NEXT_PUBLIC_CMS_URL;
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
  const urlToFile = `${cmsURL}/data/${projectId}${urlToCV}`;

  return (
    <div className="px-container pt-[4rem] pb-[3rem] md:pb-0">
      <SectionTitle title={title} />

      <div className="flex flex-col gap-[4rem] md:pt-[3rem] items-center">
        {content.map((item: any, index: number) => (
          <Content
            key={index}
            content={item}
            index={index}
          />
        ))}

        <button
          onClick={() => {
            window.open(urlToFile, "_blank");
          }}
          // href={urlToCV}
          className="button-variant-underline"
        >
          {button}
        </button>
      </div>
    </div>
  );
}

type ContentProps = {
  content: any;
  index: number;
};

function Content({ content, index }: ContentProps) {
  const { image, text } = content;
  const imagesBaseURL = getImagesBaseURL();
  const fullImageURL = `${imagesBaseURL}/${image}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-[5rem]">
      <div
        className={cn(
          "relative aspect-video",
          index % 2 === 0 ? "lg:order-1" : "lg:order-2",
          "lg:mb-0 mb-[3rem]"
        )}
      >
        <GreenBackdrop />
        <Image
          src={fullImageURL}
          alt={text}
          width={1000}
          height={1000}
          loading="lazy"
          className={cn(
            "object-cover z-10 relative w-full h-full"
          )}
        />
      </div>
      <div
        className={cn(
          "flex flex-col gap-3",
          index % 2 === 0 ? "lg:order-2" : "lg:order-1"
        )}
      >
        {text.map((item: any, index: number) => (
          <div
            key={index}
            className={cn("p1 flex flex-col gap-2")}
          >
            <p>{item}</p>
            <div
              className={cn(
                "pb-5 mb-2 border-b border-green w-[50%]",
                index === text.length - 1
                  ? "border-b-0"
                  : ""
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
