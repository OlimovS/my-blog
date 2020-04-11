import React from 'react';

import Project from './project/project';
import './Projects.css';
import blog from '../../../assets/imgs/blog.jpg';
import food from '../../../assets/imgs/food.jpg';
import burger from '../../../assets/imgs/burger.jpg';
import calendar from '../../../assets/imgs/calendar.jpg';
import xOGame from '../../../assets/imgs/xo.jpg';


const projects = (props) => (
  <section className="section-projects">
   <h5>Here you can find some of my projects</h5>
   <p className="hero-text">
     As I said, I like working on different projects, in C++ I couldn't design my demo projects and it looked not so good,
     but I do know those projects really helped me understand Programming more and improved my skills  </p>
    <p className="hero-text">  In React, there are a lot of built-in tools for desinging and adding cool features in my Website.
     I think Algorithm is my place, while working as a React js Developer, I will continue learning Algorithm in C++.
    </p>
    <p  className="hero-text">Here are some of my programmes links<br />
    <a href="https://my-blog-uz.web.app/" target="_blank" rel="noopener noreferrer">My Blog   -   https://my-blog-uz.web.app/</a><br />
    <a href="https://react-my-burger-uz.web.app/" target="_blank" rel="noopener noreferrer">My Burger Builder   -   https://react-my-burger-uz.web.app/</a>
    </p>
  <div className="flex-projects">
      <Project
          picture={blog}
          alt="My Blog Project"
          explain="This is my blog where I share my experience and many more !"
          lang="React js"
          />
      <Project
          picture={food}
          alt="My Food Project"
          explain="This is my demo Food Delivery Project, for practicing CSS !"
          lang="React js"
          />

      <Project
          picture={burger}
          alt="My Burger Builder Project"
          explain="This is the biggest project of many that I finished with the course !"
          lang="React js"
          />
      <Project
          picture={xOGame}
          alt="X O Game"
          explain="This is my demo X O game Project that I did for practicing C++ !"
          lang="C++"
          />
      <Project
          picture={calendar}
          alt="Calendar day finder"
          explain="This is my demo Calendar Project that I did for practicing C++ !"
          lang="C++"
          />

  </div>
  </section>
);

export default projects;
