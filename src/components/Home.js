import React from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

function home() {
  return (
    <div name="home" className="w-full h-screen bg-[#bde6fd]">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">
        <p className="text-blue-800 text-xl">
          Hi, There!!! Thanks for visiting my portfolio
        </p>
        <h1 className="text-3xl sm:text-7xl font-bold text-[#fffb03]">
          I'm Leonel Morales
        </h1>
        <h2 className="text-2xl  sm:text-6xl font-bold text-[#03afff]">
          I'm SAP Developer and Full-Stack Developer
        </h2>
        <p className="text-blue-800 py-4 max-w-[700px] text-xl">
          {" "}
          I am System engineer with 14 year of experience in SAP as an ABAP
          Developer.
        </p>
        <p className="text-blue-800 py-4 max-w-[700px] text-xl">
          Full-stack Web Developer Core techonologies: HTML5, CSS3, JavaScript,
          jQuery, Bootstrap, Express.js, React.js, Node.js, MongoDB, MySQL
        </p>
        <div>
          <button className="text-[#03afff] group  border-red-500 border-double border-8 px-7 py-5 my-3 flex items-center hover:bg-blue-800 hover:border-yellow-600 hover:text-white">
            Projects{" "}
            <span className="group-hover:rotate-90 duration-600">
              <HiOutlineChevronDoubleRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default home;
