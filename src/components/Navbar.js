import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
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
        <li className="py-6 text-3xl">Home</li>
        <li className="py-6 text-3xl">About</li>
        <li className="py-6 text-3xl">Skills</li>
        <li className="py-6 text-3xl">Projects</li>
        <li className="py-6 text-3xl">Contact</li>
      </ul>

      <div></div>
    </div>
  );
};

export default Navbar;
