import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <h1 className="text-2xl font-bold">Test</h1> */}
    </div>
  );
}

export default App;
