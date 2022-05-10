import React from "react";
import { useGlobal } from "./Content";
import logo from "./images/logo.svg";
import "./index.css";
// import { FontAwesome } from "react-icons/fa";

const Navbar = () => {
  const { openSidebar } = useGlobal();
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            |||
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn">products</button>
          </li>
          <li>
            <button className="link-btn">developers</button>
          </li>
          <li>
            <button className="link-btn">company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
