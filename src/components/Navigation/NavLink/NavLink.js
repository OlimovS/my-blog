import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const navLink =(props)=>{
  const middle = props.name ? props.name : props.children;
  const whichNavLink = (
    props.isHref
      ? <Nav.Link href={props.link}>{middle}</Nav.Link>
      :  <Nav.Link as={Link} onClick={props.onClick} to={props.link}>{middle}</Nav.Link>
  );
   return(
     <Nav.Item>
      {whichNavLink}
     </Nav.Item>
   );
}

export default navLink;
