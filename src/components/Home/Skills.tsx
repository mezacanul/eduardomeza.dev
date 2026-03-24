import RingPatterns from "../common/RingPatterns";
import SectionTitle from "../common/SectionTitle";

export default function Skills({
  skills,
  cms,
}: {
  skills: any;
  cms: any;
}) {
  const { items, title, suffix } = skills;
  return (
    <div
      className="relative flex flex-col items-start justify-center px-container pt-[10rem] pb-15"
      style={{ overflow: "hidden" }}
    >
      <SectionTitle title={title} />

      <div className="grid grid-cols-3 gap-x-4 gap-y-10 w-full">
        {items.map((skill: any, index: number) => (
          <SkillItem
            key={index}
            skill={skill}
            suffix={suffix}
          />
        ))}
      </div>

      <RingPatterns
        src={cms.images.patternRings}
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
