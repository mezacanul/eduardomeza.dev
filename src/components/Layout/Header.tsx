import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LangOptions from "../common/LangOptions";

export default function Header({ cms }: { cms: any }) {
  const { logo, social } = cms;
  return (
    <header className="fixed inset-0 z-50 px-container h-[10vh] flex items-center justify-between">
      <p className="h3-bold">{logo}</p>

      <div className="flex gap-4 items-center">
        <LangOptions />
        <Link href={social.github} target="_blank">
          <FaGithub size={28} />
        </Link>
        <Link href={social.linkedin} target="_blank">
          <FaLinkedin size={28} />
        </Link>
      </div>
    </header>
  );
}
