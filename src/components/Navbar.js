import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/ResumeLeonelMorales.pdf";
import { Link } from "react-scroll";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  const handleClick = () => setNavBar(!navBar);

  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#4ca5d8] text-white">
      <div>
        <img src={logo} alt="my logo" style={{ width: "200px" }} />
      </div>

      <ul className="text-2xl hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          {" "}
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!navBar ? <FaBars /> : <FaTimes />}
      </div>

      {/*mobile devices */}
      <ul
        className={
          !navBar
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#4ca5d8] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Project
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[40%] left-0 text-black">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0f99e9]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/EsteMaeLeo"
            >
              Github <FaGithub size={45} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0f99e9]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/leonel-morales-abap/"
            >
              Linkedin <FaLinkedin size={45} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0f99e9]">
            <a
              className="flex justify-between items-center w-full text-white"
              href={require("../assets/ResumeLeonelMorales.pdf")}
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={45} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0f99e9]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="mailto:leonel_morales20@hotmail.com"
            >
              Email <HiOutlineMail size={45} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
