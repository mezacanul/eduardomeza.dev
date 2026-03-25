import { cn } from "@/utils/cn";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import RingPatterns from "../common/RingPatterns";
import MessageForm from "./MessageForm";

export default function Footer({ cms }: { cms: any }) {
  const { title, description, form } = cms.footer;
  const cns = {
    form: "flex flex-col gap-4 text-white",
    input:
      "w-full p-2 border-b-2 border-white placeholder-white/50 h4-regular focus:outline-none",
    textarea:
      "w-full p-2 border-b-2 border-white placeholder-white/50 h4-regular focus:outline-none",
    button: "w-full p-2 border-b-2 border-white",
  };
  return (
    <footer
      id="footer"
      className={cn(
        "px-container relative flex flex-col gap-15 w-full bg-gray pt-[6rem] pb-[4rem]",
        "items-center xl:items-start"
      )}
    >
      <div
        className={cn(
          "w-full md:w-[70%] xl:w-full gap-4",
          "xl:grid grid-cols-2 xl:gap-x-35 xl:gap-y-20",
          "flex flex-col gap-10"
        )}
      >
        <div className="flex flex-col gap-4">
          <h1 className="h1-bold text-center xl:text-left">
            {title}
          </h1>
          <p className="h4-regular w-full xl:w-[80%] text-center xl:text-left">
            {description}
          </p>
        </div>

        <MessageForm form={form} cns={cns} />
      </div>

      <Nav cms={cms} />

      <RingPatterns
        src={cms.images.patternRings}
        size={["500px", "450px", "550px"]}
        coords={{
          x: ["-90%", "-30%", "-15%"],
          y: ["60%", "65%", "47%"],
        }}
      />
    </footer>
  );
}

function Nav({ cms }: { cms: any }) {
  const styles = {
    hover: "hover:text-green transition-all duration-300",
  };
  return (
    <div className="flex col-span-2 justify-between pt-7 border-t border-white w-full">
      <h3
        className={cn(
          "h3-bold cursor-default",
          styles.hover
        )}
      >
        {cms.logo}
      </h3>

      <div className="flex gap-4 items-center">
        <Link href={cms.social.github} target="_blank">
          <FaGithub size={24} className={styles.hover} />
        </Link>
        <Link href={cms.social.linkedin} target="_blank">
          <FaLinkedin size={24} className={styles.hover} />
        </Link>
      </div>
    </div>
  );
}
