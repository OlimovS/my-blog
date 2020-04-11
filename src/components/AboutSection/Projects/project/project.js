import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { IconContext } from "react-icons";


import './project.css';

const project  =(props)=> {
   return(
     <div className="one-project">
       <img src={props.picture} alt={props.alt}/>
       <p>
          {props.explain}
       </p>
       <p>
       <IconContext.Provider value={{ color: "green"}}>
           <FaCheck />
       </IconContext.Provider>

        &nbsp; Written in <span>{props.lang}</span></p>
     </div>
   );
}


export default project;

//
// <a style={{display: "block"}} href={props.link}>
// </a>
