import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#6faccf]">
      <div>
        <img src={logo} alt="my logo" style={{ width: "200px" }} />
      </div>
      <di>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </di>
    </div>
  );
};

export default Navbar;
