import React from 'react';
import { IconContext } from "react-icons";

import './singleSocial.css';

const singeSocial = (props) => {
  // const style = {
  //   color: '#888888', size: '20px', padding: '3px 1px 0px 1px',
  // }
   return(
     <a className="single-link" href={props.link}>
     <IconContext.Provider
          value={{className: "icon-style"}}
       >
          {props.children}
     </IconContext.Provider>
     </a>
   );
 }

 export default singeSocial;
