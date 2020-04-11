import React from 'react';
import { IconContext } from 'react-icons';

import {IoIosPerson} from 'react-icons/io';
import {FaTelegramPlane} from 'react-icons/fa';
import {IoIosStar} from 'react-icons/io';
import './City.css';

const city = (props) => (
  <div className="one-city">
    <img src={props.image} alt="one-city"/>
    <h6>{props.city}</h6>
    <div>
    <IconContext.Provider value={{ color: "#e67e22", size: "1.3rem", className: "icon-css"}}>
      <IoIosPerson />
    </IconContext.Provider>

    <span>{props.learners}</span>
    </div>
    <div>
    <IconContext.Provider value={{ color: "#e67e22", size: "1.3rem", className: "icon-css"}}>
        <IoIosStar />
    </IconContext.Provider>
    <span>{props.teachers}</span>
    </div>
    <div>
    <IconContext.Provider value={{ color: "#e67e22", size: "1.3rem", className: "icon-css"}}>
      <FaTelegramPlane />
    </IconContext.Provider>
    <a href={props.link}>{props.linkName}</a>
    </div>
    </div>
);

export default city;
