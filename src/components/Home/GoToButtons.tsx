"use client";
import Link from "next/link";
import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { cn } from "@/utils/cn";
import { FaArrowRightLong } from "react-icons/fa6";
import { useParams } from "next/navigation";

interface GoToButtonsProps {
  project: any;
  buttons: any;
}

export default function GoToButtons({
  project,
  buttons,
}: GoToButtonsProps) {
  const { lang } = useParams();
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
          href={`/${lang}/projects/${project.id}`}
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
