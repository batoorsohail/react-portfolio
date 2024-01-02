import { skills } from "../data";
import SkillCard from "../components/SkillCard";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
  return (
    <section>
      <div class="flex flex-col items-center justify-center bg-black px-5 py-10">
        <h2 className="text-white text-3xl font-bold">Skills</h2>
        <p className="almost-gray text-[18px] pb-8">Highlighting my abilities and expertise</p>
        <div className="flex flex-wrap justify-center gap-5 w-full">
          {/* <div className="flex flex-col bg-[#323234] items-center justify-center w-[45%] gap-2 p-4 rounded-2xl">
            <FaHtml5 className="text-white text-3xl"/>
            <p className="text-white text-base">HTML</p>
          </div>
          <div className="flex flex-col bg-[#323234] items-center justify-center w-[45%] gap-2 p-4 rounded-2xl">
            <FaCss3Alt className="text-white text-3xl" />
            <p className="text-white text-base">CSS</p>
          </div>
          <div className="flex flex-col bg-[#323234] items-center justify-center w-[45%] gap-2 p-4 rounded-2xl">
            <IoLogoJavascript className="text-white text-3xl"/>
            <p className="text-white text-base">JavaScript</p>
          </div>
          <div className="flex flex-col bg-[#323234] items-center justify-center w-[45%] gap-2 p-4 rounded-2xl">
            <FaReact className="text-white text-3xl" />
            <p className="text-white text-base">React.js</p>
          </div> */}
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills