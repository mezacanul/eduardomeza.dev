import Image from "next/image";
import { cn } from "@/utils/cn";
import { getImagesBaseURL } from "@/utils/main";

interface ContentProps {
  project: any;
}
export default function Content({ project }: ContentProps) {
  // const baseUrl = process.env.NEXT_PUBLIC_CMS_URL;
  const baseUrl = getImagesBaseURL();
  const { title, data, position } = project;
  const total = data.length;
  return (
    // <div>
    //   <h2 className="text-center h2-bold">{position}</h2>
    <div className="px-content flex flex-col pt-10 pb-5 md:pt-15 md:pb-10 lg:pt-[7rem] lg:pb-[2rem]">
      {data.map((d: any, index: number) => (
        <div key={index}>
          <div
            className={cn(
              "lg:grid gap-10 grid-cols-2 items-center py-20",
              "flex flex-col"
            )}
            // style={{ gridTemplateColumns: "8fr 6fr" }}
          >
            <Image
              loading="eager"
              src={`${baseUrl}${d.img}`}
              alt={"test"}
              width={1000}
              height={600}
              className={cn(
                "object-cover object-center aspect-video",
                index % 2 !== 0 && "lg:order-2"
              )}
            />
            <h4
              className={cn(
                "h4-regular text-center"
                // index % 2 === 0 && "order-1"
              )}
            >
              {d.description}
            </h4>
          </div>
          <div
            className={`${
              index != total - 1 &&
              "border-b-2 border-green w-[35%] mx-auto"
            }`}
          />
        </div>
      ))}
    </div>
    // </div>
  );
}
