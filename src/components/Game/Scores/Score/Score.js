import React from 'react';

import './Score.css';

const score = (props) => {
  const classNames = ["score", props.score <= 1 ? "red-color" : props.score === 2 ? "yellow-color" : props.score === 3 ? "blue-color" : "green-color" ]
   return(
     <div className={classNames.join(' ')}>
       <p><strong>Score: &nbsp; {props.score}</strong></p>
       <p><strong>Date:</strong> {props.time} {props.date} </p>
     </div>
   );
}



export default score;
