import RingPatterns from "../common/RingPatterns";
import SectionTitle from "../common/SectionTitle";
import { cn } from "@/utils/cn";

export default function Skills({
  skills,
}: {
  skills: any;
}) {
  const { items, title, suffix } = skills;
  return (
    <div
      className={cn(
        "relative flex flex-col items-start justify-center px-container",
        "pt-3 pb-[6rem] md:pt-[1rem] md:pb-[7rem] xl:pt-[1rem] xl:pb-[8rem]"
      )}
      style={{ overflow: "hidden" }}
    >
      <SectionTitle title={title} />

      <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-4 md:gap-x-4 gap-y-10 w-full">
        {items.map((skill: any, index: number) => (
          <SkillItem
            key={index}
            skill={skill}
            suffix={suffix}
          />
        ))}
      </div>

      <RingPatterns
        size="700px"
        coords={{ x: "70%", y: "60%" }}
      />
    </div>
  );
}

function SkillItem({
  skill,
  suffix,
}: {
  skill: any;
  suffix: string;
}) {
  const { title, experience } = skill;
  return (
    <div className="flex flex-col items-start justify-center">
      <h2 className="h2-bold">{title}</h2>
      <p className="h4-regular text-green">
        {`${experience} ${suffix}`}
      </p>
    </div>
  );
}
