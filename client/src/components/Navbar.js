import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/Activity">Activity</Link></li>
        <li>
            <Link to="/"><img src={GreenSteps_Logo.png} alt="Home" style={{ height: "35px", width: "auto" }} /></Link>
        </li>
        {/* <li><Link to="/">Logo</Link></li> */}
        <li><Link to="/Login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


