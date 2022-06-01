import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/136530.png";
import Node from "../assets/node.png";
import Github from "../assets/github.png";
import Mongo from "../assets/mongo.png";
import Reacticon from "../assets/react.png";
import Abap from "../assets/abap.png";

function skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#bde6fd] text-blue-800">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl  py-4 font-bold border-b-4 border-yellow-400">
            My Skills
          </p>
          <p className="py-4">Core technologies and more to come...!</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-black hover:scale-110 duration-700">
            <img className="w-20 mx-auto" src={HTML} alt="Html icon" />
            <p className="my-4">HTML5</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-700">
            <img className="w-20 mx-auto" src={CSS} alt="Html icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-700">
            <img className="w-20 mx-auto" src={JS} alt="Html icon" />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-700">
            <img className="w-20 mx-auto" src={Node} alt="Html icon" />
            <p className="my-4">NodeJs</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-700">
            <img className="w-20 mx-auto" src={Mongo} alt="Html icon" />
            <p className="my-4">Mongo</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-700">
            <img className="w-20 mx-auto" src={Reacticon} alt="Html icon" />
            <p className="my-4">React</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-700">
            <img className="w-20 mx-auto" src={Abap} alt="Html icon" />
            <p className="my-4">Abap</p>
          </div>

          <div className="shadow-md shadow-black hover:scale-110 duration-700">
            <img className="w-20 mx-auto" src={Github} alt="Html icon" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default skills;
