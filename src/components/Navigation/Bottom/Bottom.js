import React from 'react';
import {
  Navbar,
   Nav
} from 'react-bootstrap';
import { FaTelegramPlane, FaInstagram, FaYoutube,FaFacebookF} from 'react-icons/fa';
import NavLink from '../NavLink/NavLink';

import './Bottom.css';


const bottom =() => {

   return(
       <footer className="Bottom">

       <div className="my-links">
       <Navbar variant="dark">
           <Nav>
              <NavLink link="/main" name="Main"/>
              <NavLink link="/blog" name="Blog"/>
              <NavLink link="/about" name="About"/>
           </Nav>
        </Navbar>
        </div>
        <div className="my-icons">
        <Navbar variant="dark">
          <Nav>
              <NavLink isHref={true} link="https://www.t.me/uzb_hardworking"><FaTelegramPlane /></NavLink>
              <NavLink isHref={true} link="https://www.instagram.com/uzb_hardworking/"><FaInstagram /></NavLink>
              <NavLink isHref={true} link="https://www.youtube.com/"><FaYoutube /></NavLink>
              <NavLink isHref={true} link="https://www.facebook.com/"><FaFacebookF /></NavLink>
         </Nav>
       </Navbar>
       </div>
      <p className="my-copyright">Copyright &copy; 2020 by Sulaymon. All rights reserved.</p>
      </footer>
   );
}

export default bottom;
