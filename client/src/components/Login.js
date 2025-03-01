import React from "react";
import  "./Login.css";

const Login = () => {
    return (
        <>
            <h2 style={{ textAlign: "center" }}>Login</h2>
            <form action="/action_page.php" method="post">
                <div className="imgcontainer">
                    <img src="GreenSteps_Logo.png" alt="Logo" className="Logo" />
                </div>

                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>

                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </>
    );
};

export default Login;