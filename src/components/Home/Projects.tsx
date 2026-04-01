import Image from "next/image";
import { cn } from "@/utils/cn";
import SectionTitle from "../common/SectionTitle";
import GoToButtons from "./GoToButtons";
import { getImagesBaseURL } from "@/utils/main";

interface ProjectsProps {
  projects: any;
}

interface ProjectItemProps {
  project: any;
  buttons: any;
}

export default function Projects({
  projects,
}: ProjectsProps) {
  const { items, title, buttons } = projects;
  // console.log("projects", projects);
  return (
    <div
      className={cn(
        "px-container",
        "pt-[3rem] md:pt-[6rem] xl:pt-25",
        "pb-[5rem] md:pb-[6rem] xl:pb-[8rem]"
      )}
    >
      <SectionTitle title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] xl:gap-[4rem]">
        {items.map((project: any, index: number) => (
          <ProjectItem
            key={index}
            project={project}
            buttons={buttons}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectItem({
  project,
  buttons,
}: ProjectItemProps) {
  // const baseUrl = process.env.NEXT_PUBLIC_CMS_URL;
  const baseUrl = getImagesBaseURL();
  // console.log("project", project);

  return (
    <div className="flex flex-col gap-4">
      <Image
        src={`${baseUrl}${project.img}`}
        alt={project.name}
        width={1000}
        height={400}
        className="object-cover aspect-video"
        style={{
          objectPosition:
            project.id == "hadassa"
              ? "center center"
              : "top right",
        }}
      />
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2 w-full border-b-2 border-white/50 pb-3 mb-1">
          <h2 className="h3-bold">{project.name}</h2>
          <p className="p1 text-green">{project.skills}</p>
        </div>
      </div>
      <GoToButtons project={project} buttons={buttons} />
    </div>
  );
}
