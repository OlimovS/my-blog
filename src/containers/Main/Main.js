import React, { useState } from 'react';

import './Main.css';
import IamBox from '../../components/UI/Iam/Iam';
import { Button } from 'react-bootstrap';

const main = () => {
  const [isOpen, setIsOpen] = useState(false);
     return (
       <div className="Main-Section" >

         <div className="Blog-Textbox">
             <h1>This is<br /> my Personal Blog</h1>
             <Button

                variant="outline-primary"
                onClick={() => setIsOpen(!isOpen)}
             >
               {isOpen ? "-Wow, nice guy !-" : "-Who is this guy?-"}
            </Button>
          </div>
        <div className="Iam-div">
              <IamBox show={isOpen}/>
        </div>
       </div>

     );
}


export default main;
