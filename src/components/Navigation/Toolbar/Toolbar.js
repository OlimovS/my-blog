import React, {Fragment, useState} from 'react';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import  { FaBold } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { withRouter } from 'react-router';
import Auxi from '../../../hoc/Auxi/Auxi';

import NavLink from '../NavLink/NavLink';

const Example = (props) => {
  const { location } = props;
  const [expanded, setExpanded] = useState(false);
  return (
    <Auxi>
      <Navbar expanded={expanded}  bg="dark" variant="dark" fixed="top"  expand="lg">
      <Navbar.Brand href="/">
      <IconContext.Provider value={{size: "1.5em"}}>
          <FaBold />
      </IconContext.Provider>log
     </Navbar.Brand>
       <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={location.pathname} className="mr-auto">
              <NavLink onClick={() => setExpanded(false)} link="/main" name="Main" />
              <NavLink onClick={() => setExpanded(false)} link="/blog" name="Blog" />
              <NavLink onClick={() => setExpanded(false)} link="/about" name="About" />

          </Nav>
          <Nav activeKey={location.pathname} className="ml-auto">

            {!props.isAuth
              ? <NavLink onClick={() => setExpanded(false)} link="/auth" name="Log in / Sign up" />
              :
              <Fragment>
              <NavLink onClick={() => setExpanded(false)} link="/profile" name="My Profile" />
              <NavLink onClick={() => setExpanded(false)} link="/logout" name="Logout" />
              </Fragment>
            }

          </Nav>


        </Navbar.Collapse>
      </Navbar>
    </Auxi>
  );
}

export default withRouter(Example);
