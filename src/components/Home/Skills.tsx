"use client";

export default function Skills({
  skills,
}: {
  skills: any;
}) {
  console.log("skills", skills.title);
  // const { items, title, suffix } = skills;
  return (
    <div className="flex flex-col items-start justify-center px-container py-25">
      <div className="w-full border-b-2 border-white pb-5 mb-15">
        <h1 className="h1-bold">{skills.title}</h1>
      </div>

      {/* <div className="grid grid-cols-4 gap-x-4 gap-y-10 w-full">
        {items.map((skill: any, index: number) => (
          <SkillItem
            key={index}
            name={skill.name}
            years={skill.years}
            suffix={suffix}
          />
        ))}
      </div> */}
    </div>
  );
}

function SkillItem({ name, years, suffix }: any) {
  return (
    <div className="flex flex-col items-start justify-center">
      <h2 className="h2-bold">{name}</h2>
      <p className="h4-regular text-green">
        {`${years} ${suffix}`}
      </p>
    </div>
  );
}
