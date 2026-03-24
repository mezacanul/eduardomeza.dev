import Image from "next/image";
import { cn } from "@/utils/cn";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

export default function Projects({
  projects,
}: {
  projects: any;
}) {
  const { items, title, buttons } = projects;
  // console.log("projects", projects);
  return (
    <div className="px-container pt-25 pb-[10rem]">
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
}: {
  project: any;
  buttons: any;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_CMS_URL;
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

function GoToButtons({
  project,
  buttons,
}: {
  project: any;
  buttons: any;
}) {
  const cns = cn([
    "border-2 border-light-200 px-3 py-2 rounded-lg",
    "flex items-center gap-2",
    "transition-all duration-300 cursor-pointer",
    "hover:border-green hover:bg-green hover:text-black hover:font-bold",
  ]);
  return (
    <div className="flex justify-between w-full gap-2">
      {project.type == "about" && (
        <Link
          href={`/projects/${project.id}`}
          className={cns}
        >
          {buttons.about}
          <FaArrowRightLong />
        </Link>
      )}
      {project.type == "preview" && (
        <>
          <Link
            href={project.url}
            target="_blank"
            className={cns}
          >
            <FaExternalLinkAlt size={14} />
            {buttons.gotoProject}
          </Link>
          <Link
            href={project.code}
            target="_blank"
            className={cns}
          >
            <FaGithub size={20} />
            {buttons.gotoCode}
          </Link>
        </>
      )}
    </div>
  );
}
