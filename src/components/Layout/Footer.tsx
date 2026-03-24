import { cn } from "@/utils/cn";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import RingPatterns from "../common/RingPatterns";

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
      className={cn(
        "px-container relative flex justify-between w-full gap-4 bg-gray pt-[6rem] pb-[4rem]",
        "grid grid-cols-2 gap-x-35 gap-y-20"
      )}
    >
      <div className="flex flex-col gap-4">
        <h1 className="h1-bold">{title}</h1>
        <p className="h4-regular w-[80%]">{description}</p>
      </div>

      <Form form={form} cns={cns} />

      <Nav cms={cms} />

      <RingPatterns
        src={cms.images.patternRings}
        size="600px"
        coords={{ x: "-10%", y: "47%" }}
      />
    </footer>
  );
}

function Form({ form, cns }: { form: any; cns: any }) {
  return (
    <div className="flex flex-col gap-5">
      {/* <label htmlFor="name">{form.name.label}</label> */}
      <input
        type="text"
        placeholder={form.name.label}
        className={cns.input}
      />
      {/* <label htmlFor="email">{form.email.label}</label> */}
      <input
        type="email"
        placeholder={form.email.label}
        className={cns.input}
      />
      {/* <label htmlFor="message">{form.message.label}</label> */}
      <textarea
        rows={5}
        placeholder={form.message.label}
        className={cns.textarea}
      />
      <button
        className="button-variant-underline self-end"
        type="submit"
      >
        {form.button}
      </button>
    </div>
  );
}

function Nav({ cms }: { cms: any }) {
  const styles = {
    hover: "hover:text-green transition-all duration-300",
  };
  return (
    <div className="flex col-span-2 justify-between pt-7 border-t border-white">
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
