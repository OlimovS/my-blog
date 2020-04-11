import React,{ useState } from 'react';
import {  Tabs, Tab } from 'react-bootstrap';
import {withRouter} from 'react-router';

import AboutText from '../../components/AboutSection/AboutText/AboutText';
import Projects from '../../components/AboutSection/Projects/Projects';
import './About.css';
import Auxi from '../../hoc/Auxi/Auxi';
import ContactMe from '../../components/ContactMe/ContactMe';

const about = (props) => {
   const [key, setKey] = useState('about-me');

     return(
       <Auxi>
         <section className="About-Section">
         <h4>About me</h4>
           <div className="about-main">
            <nav className="my-sidenav">
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
                <Tab eventKey="about-me" title="About me">
                  <AboutText />
                </Tab>
                <Tab eventKey="projects" title="My projects">
                  <Projects />
                </Tab>
                <Tab eventKey="contact-me" title="Contact me">
                  <ContactMe />
                </Tab>
            </Tabs>
            </nav>
          </div>
         </section>
       </Auxi>
     );
  }


export default withRouter(about);
