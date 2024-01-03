import { skills } from "../data";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <section>
      <div class="flex flex-col items-center justify-center bg-black px-5 py-10">
        <h2 className="text-white text-3xl font-bold">Skills</h2>
        <p className="almost-gray text-[18px] pb-8">Highlighting my abilities and expertise</p>
        <div className="flex flex-wrap justify-center gap-5 w-full">
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills