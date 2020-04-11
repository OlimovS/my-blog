import React from 'react';

import TimeSection from '../timeSection/timeSection';
import './PostNav.css'

const postNav = (props) => {
  return(
    <div className="post-link-div">
     <div className="post-detail">
      <TimeSection
        fontSize="90%"
        config={props.config}/>
     </div>
     <p className="post-link" onClick={props.clicked}>{props.title}</p>

    </div>
  );
}


export default postNav;
