import { useState } from "react";
import Home from "./Home";
import "./index.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
// import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Home />
      <Submenu />
    </div>
  );
}

export default App;
