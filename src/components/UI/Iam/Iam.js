import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import iamPic from '../../../assets/imgs/iam2.jpg';
import './Iam.css';

const iam = (props) => {
   return (
     <CSSTransition
             mountOnEnter
             unmountOnExit
             in={props.show}
             timeout={400}
             classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClose',
                appear: '',
                appearActive: ''
             }}>
     <div className="Iam-box">
         <div className="iam-img-box">
           <img src={iamPic} alt="I am"/>
         </div>
         <p>
           Olimov Sulaymon<br /> Programmer, live in Samarkand, Uzbekistan
         </p>
     </div>
     </CSSTransition>

   );
}

export default iam;
