import { BiChip } from "react-icons/bi";
import { skills } from "../data";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <section id="skills">
      <div class="flex flex-col items-center w-full h-auto md:h-[95vh] py-10">
        <BiChip className="text-coding-color text-4xl inline-block mb-4" />
        <h2 className="text-white text-3xl font-bold">Skills & Technologies</h2>
        <p className="text-white text-[18px] mt-3 mb-10">Highlighting my abilities and expertise</p>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-5 w-full">
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills