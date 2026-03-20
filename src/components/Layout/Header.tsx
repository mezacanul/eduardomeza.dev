import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed inset-0 z-50 px-container h-[10vh] flex items-center justify-between">
      <p className="text-3-bold">{"eduardomeza"}</p>

      <div className="flex gap-4 items-center">
        <Link href="/">
          <FaGithub size={28} />
        </Link>
        <Link href="/">
          <FaLinkedin size={28} />
        </Link>
      </div>
    </header>
  );
}
