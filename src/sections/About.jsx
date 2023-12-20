import AboutPhoto from '../assets/about-img.jpg';
import { PiMedalBold } from "react-icons/pi";
import { TbBooks } from "react-icons/tb";
import { FaDownload } from "react-icons/fa6";

const About = () => {
  return (
    <section className="bg-black dark:bg-white text-white px-5">
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-white dark:text-black text-2xl font-bold pb-8">About Me</h2>
        <div>
          <img src={AboutPhoto} alt="Sohail's Photo" className="w-56 rounded-xl pb-10" />
        </div>
        <div className="flex justify-between w-full pb-10">
          <div className="flex flex-col items-center justify-center bg-[#333333] p-4 rounded-lg">
            <p className="text-2xl pb-2"><PiMedalBold /></p>
            <p className="text-white text-lg">Experience</p>
            <p className="almost-gray">1+ year working</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#333333] p-4 rounded-lg">
            <p className="text-2xl pb-2"><TbBooks /></p>
            <p className="text-white text-lg">Projects</p>
            <p className="almost-gray">25+ completed</p>
          </div>
        </div>
        <div>
          <p className='almost-gray pb-8'>
            Full-Stack Developer with a passion for pair programming, JavaScript, and remote work.
            I have completed 30+ projects and received recognition for my work in software development. 
            Currently, I am a Full-Stack Development student at Microverse, where I am honing my skills 
            in front-end technologies such as JavaScript, React, and Redux, as well as back-end technologies
            like PostgreSQL, Ruby, and Ruby on Rails.
          </p>
        </div>
        <button type="button" className="flex items-center justify-center gap-5 bg-white dark:bg-black text-lg dark:text-white text-black font-bold rounded-lg p-5">
          Download Resume
          <FaDownload />
        </button>
      </div> 
    </section>
  )
}

export default About