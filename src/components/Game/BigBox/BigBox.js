import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { IconContext } from "react-icons";

import './BigBox.css';

const bigBox= (props) => {
   const random = Math.random();
   const bgColor1 = random < 0.5 ? props.pText : props.pColor ;
   const bgColor2 = random >= 0.5 ? props.pText : props.pColor ;

   let cssClasses = ["color-box", props.disabled ? "disabled" : null];
   return(
     <div className="big-box">
    <p style={{color: props.pColor}}>{props.pText}	&nbsp;
    {props.answerTrue === 0 ? null : props.answerTrue === 2 ?

      <IconContext.Provider value={{ color: "green"}}>
          <FaCheck />
      </IconContext.Provider>
      :
      <IconContext.Provider value={{ color: "red"}}>
          <FaTimes />
      </IconContext.Provider>
       }</p>
      <div className="boxes">
        <div
           onClick={() => !props.disabled && props.boxClickHandler(bgColor1, props.pText, props.pColor)}
           className={cssClasses.join(' ')}
           style={{disabled: props.disabled ,backgroundColor: bgColor1}}>
        </div>
        <div
           onClick={() => !props.disabled &&  props.boxClickHandler(bgColor2, props.pText, props.pColor)}
           className={cssClasses.join(' ')}
           style={{backgroundColor:bgColor2}}>
        </div>
        </div>
      </div>
   );
}

export default bigBox;
