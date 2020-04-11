import React from 'react';
import { IconContext } from 'react-icons';

import './BoxProp.css';

const boxprop = (props) => (
  <div className="one-box">
  <IconContext.Provider value={{ color: "#e67e22", size: "23%", className: "icon-css"}}>
    {props.children}
  </IconContext.Provider>
    <h6>{props.h6}</h6>
    <p>{props.p}</p>
  </div>
);

export default boxprop;
