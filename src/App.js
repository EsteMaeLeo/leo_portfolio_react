import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <h1 className="text-2xl font-bold">Test</h1> */}
    </div>
  );
}

export default App;
