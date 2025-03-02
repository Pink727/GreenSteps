import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/GreenSteps_Logo.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/Activity">Activity</Link></li>
        <li>
            <Link to="/"><img src={logo} alt="Home" style={{ height: "35px", width: "auto" }} /></Link>
        </li>
        <li><Link to="/Login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
