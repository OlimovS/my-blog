import React from 'react';

import './Button.css';

const button = (props) => {
   return(
     <button onClick={props.clicked} className="button">{props.children}</button>
   );
}

export default button;
