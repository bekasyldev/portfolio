import { skillsData } from "@/constants/data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="mb-28 mt-20 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <h3 className="text-3xl font-medium mb-10">My Skills</h3>
      <div>
        <ul className="flex flex-wrap mt-4 gap-2 max-w-[800px] h-24 sm:mt-auto items-center justify-center">
          {skillsData.map((skill) => (
            <li
              className="bg-white px-4 py-2 text-md uppercase tracking-wider text-black rounded"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
