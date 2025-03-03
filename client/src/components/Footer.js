import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
<footer className="footer">
  <div className="container">
     <div className="intro">
       <h5 className="contact">Contact Us</h5> 
        <ul className="connections">
        <li className="nav-item"><img src="Facebook.png" alt="Facebook" width="24" height="24"/></li>
          <li className="nav-item"><img src="Twitter.png" alt="Twitter" width="24" height="24"/></li>
          <li className="nav-item"><img src="Github.png" alt="GitHub" width="24" height="24"/></li>
          <li className="nav-item"><img src="Instagram.png" alt="Instagram" width="24" height="24" /></li> 
        </ul>
     </div>
       <div className="contact-group">
         <form>
           <fieldset className="form-group">
             <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
           </fieldset>
           <fieldset className="form-group">
              <textarea className="form-control" id="exampleMessage" placeholder="Message"></textarea>
           </fieldset>
           <fieldset className="form-group text-xs-right">
             <button type="button" className="btn btn-secondary-outline btn-lg">Send</button>
           </fieldset>
         </form>
       </div>
     </div>
</footer> 
  );
};

export default Footer;
