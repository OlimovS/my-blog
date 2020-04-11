import React, {Fragment} from 'react';
import { MdRemoveRedEye } from 'react-icons/md';
import { IconContext } from 'react-icons';

import './timeSection.css';

const timeSection = (props) => {
  let date = null;
  date = new Date().toLocaleDateString() === props.config.date
  ? "Bugun" : props.config.date;
   return(
     <Fragment>
       <p className="detail-p marginRight" style={{fontSize: props.fontSize}}>
        {props.config.time}&nbsp; {date}</p>
        <IconContext.Provider value={{color: "#565559"}}>
          <MdRemoveRedEye />
        </IconContext.Provider>
        <p className="detail-p">&nbsp; 4 </p>
      </Fragment>
   );
};

export default timeSection;
//<TimeSection config={props.config}/>
