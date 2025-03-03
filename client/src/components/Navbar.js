import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { removeToken } from "../utils/auth"; // Import removeToken
import logo from "../assets/GreenSteps_Logo.png";

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    removeToken();
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav>
      <ul>
        <li><Link to="/Activity">Activity</Link></li>
        <li>
            <Link to="/"><img src={logo} alt="Home" style={{ height: "35px", width: "auto" }} /></Link>
        </li>
        <li><Link to="/profile">Profile</Link></li> {/* Add Profile link */}
        <li><button onClick={handleLogout}>Logout</button></li> {/* Add Logout button */}
      </ul>
    </nav>
  );
};

export default Navbar;


