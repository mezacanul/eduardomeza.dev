"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function LangOptions() {
  const { lang } = useParams();
  const isActive = (current: string) =>
    cn([
      "transition-all p1 duration-300 border-b-2 border-transparent",
      lang === current
        ? "text-green font-normal cursor-default"
        : "font-light hover:border-green",
    ]);

  return (
    <div className="flex gap-2 items-center">
      <Link
        href={lang === "es" ? "#" : "/es"}
        className={isActive("es")}
      >
        ES
      </Link>
      <span className="p1 font-light">/</span>
      <Link
        href={lang === "en" ? "#" : "/en"}
        className={isActive("en")}
      >
        EN
      </Link>
    </div>
  );
}
