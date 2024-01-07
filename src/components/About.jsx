import React from "react";
import aboutPhoto from "../Images/about-img.jpg"
import {BsFillPersonFill} from "react-icons/bs";

function About (){
    return(
        <div className="about-container content-center flex flex-col p-36" id="about">
            <div className="icon-container flex justify-center text-4xl pb-3">
                <BsFillPersonFill className="text-coding-color"/>
            </div>
            <h1 className="text-header-color font-title text-3xl font-bold text-center">
                About
            </h1>
            <div className="content-container  flex flex-row  justify-between">
                <div className="content py-20 md:text-2xl text-white w-1/2 flex ">
                    <p>
                        Hello, my name is Sohail, and I am a <span className="text-coding-color">full-stack</span>  developer with expertise in JavaScript, React, Redux, and Rails. I am a self-employed developer and tech enthusiast who is passionate about building scalable and efficient web applications. 
                        I am currently working on a few personal projects and looking for a <span className="text-coding-color">full-time</span> job as a full-stack developer. 
                        I love to contribute to open-source projects.
                        Full-Stack Developer with a passion for pair programming, JavaScript, and remote work.
                    </p>
                </div>
                <div className="lg:flex md:items-center py-7 w-1/3 hidden">
                    <img src={aboutPhoto} alt="about image" className="rounded-xl w-[80%]" />
                </div>
           </div>    
            <div className="flex place-content-center lg:hidden">
                <img src={aboutPhoto} alt="about image" className="w-56 rounded-xl" />
            </div>
        </div>

    )
}
export default About;