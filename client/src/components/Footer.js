import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
<footer class="footer">
  <div class="container">
     <div class="intro">
       <h5 class="contact">Contact Us</h5> 
        <ul class="connections">
          <li class="nav-item"><a href="/Facebook" class="nav-link"><img src="Facebook.png" alt="Facebook" width="24" height="24"/></a></li>
          <li class="nav-item"><a href="/Twitter" class="nav-link"><img src="Twitter.png" alt="Twitter" width="24" height="24"/></a></li>
          <li class="nav-item"><a href="/Github" class="nav-link"><img src="Github.png" alt="GitHub" width="24" height="24"/></a></li>
          <li class="nav-item"><a href="/Instagram" class="nav-link"><img src="Instagram.png" alt="Instagram" width="24" height="24" /></a></li>  
        </ul>
     </div>
       <div class="contact-group">
         <form>
           <fieldset class="form-group">
             <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
           </fieldset>
           <fieldset class="form-group">
              <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
           </fieldset>
           <fieldset class="form-group text-xs-right">
             <button type="button" class="btn btn-secondary-outline btn-lg">Send</button>
           </fieldset>
         </form>
       </div>
     </div>
</footer> 
  );
};

export default Footer;

{/* <ul class="connections">
<li class="nav-item"><a href="" class="nav-link pl-0"><i class="fa fa-facebook fa-lg"></i></a></li>
<li class="nav-item"><a href="" class="nav-link"><i class="fa fa-twitter fa-lg"></i></a></li>
<li class="nav-item"><a href="" class="nav-link"><i class="fa fa-github fa-lg"></i></a></li>
<li class="nav-item"><a href="" class="nav-link"><i class="fa fa-instagram fa-lg"></i></a></li>
</ul> */}

