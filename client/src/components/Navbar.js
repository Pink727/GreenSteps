import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../utils/auth"; // Import getToken and removeToken
import logo from "../assets/GreenSteps_Logo.png";
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token); // Set isLoggedIn based on token presence
  }, []);

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
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
        {isLoggedIn ? (
          <li><button onClick={handleLogout}>Logout</button></li> // Show Logout button if logged in
        ) : (
          <li><Link to="/login">Login</Link></li> // Show Login link if not logged in
        )}
      </ul>
    </nav>
  );
};

export default Navbar;


