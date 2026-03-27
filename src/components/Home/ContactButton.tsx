"use client";
import { scrollTo } from "@/utils/main";
export default function ContactButton({
  text,
}: {
  text: string;
}) {
  return (
    <span
      onClick={() => scrollTo("footer")}
      className="button-variant-underline"
    >
      {text}
    </span>
  );
}
