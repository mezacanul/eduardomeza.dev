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
        "relative md:fixed inset-0 z-50 px-container",
        "h-[14dvh] flex flex-col items-center justify-center gap-2",
        "md:flex-row md:justify-between md:h-[10vh]",
        "transition-all duration-300",
        "md:bg-transparent",
        isScrolled && "md:bg-gray"
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

      <div
        className={cn(
          "flex flex-col-reverse gap-4 items-center",
          "md:flex-row md:justify-center"
        )}
      >
        {/* Language Options */}
        <div className="hidden md:block">
          <LangOptions />
        </div>

        {/* Social Links */}
        <div className="flex gap-4 items-center">
          <Link href={social.github} target="_blank">
            <FaGithub size={26} className={styles.hover} />
          </Link>
          <Link href={social.linkedin} target="_blank">
            <FaLinkedin
              size={26}
              className={styles.hover}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
