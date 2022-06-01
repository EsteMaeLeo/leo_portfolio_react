import React from "react";
import myPic from "../assets/leo.png";
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#bde6fd] text-blue-800">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-8 border-yellow-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>
              Hi and Pura Vida!!! (I am from Costa Rica. Pure Life or Pura Vida
              is Costa Rican philosophy that encourages the appreciation of
              life's simple treasures)
            </p>
          </div>
          <div>
            <img className="intro-img" src={myPic} alt="Leo developer pic" />
          </div>
          <div className="sm:text-right text-xl font-bold">
            <p>
              ABAP Developer Senior experienced in all project phases using
              Agile Methodologies.Oriented to design solutions, ability to learn
              new technologies. I'm oriented to give quality solutions, team
              work and committed to achieve the goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
