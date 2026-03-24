"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LangOptions from "../common/LangOptions";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

export default function Header({ cms }: { cms: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  // console.log("cms", cms);
  const { logo, social } = cms;
  const styles = {
    hover: "hover:text-green transition-all duration-300",
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 1);
    });
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-0 z-50 px-container h-[10vh] flex items-center justify-between",
        "transition-all duration-300",
        isScrolled ? "bg-gray" : "bg-transparent"
      )}
    >
      <p
        className={cn(
          "h3-bold cursor-default",
          styles.hover
        )}
      >
        {logo}
      </p>

      <div className="flex gap-4 items-center">
        <LangOptions />
        <Link href={social.github} target="_blank">
          <FaGithub size={26} className={styles.hover} />
        </Link>
        <Link href={social.linkedin} target="_blank">
          <FaLinkedin size={26} className={styles.hover} />
        </Link>
      </div>
    </header>
  );
}
