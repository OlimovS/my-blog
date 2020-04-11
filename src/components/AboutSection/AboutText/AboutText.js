import React from 'react';

import './AboutText.css'
import iam from '../../../assets/imgs/iam.jpg';


const aboutText = (props) => {
  return(

    <article className="my-article">


      <div className="about-header">
         <div className='i-am'>  <img src={iam} alt="I am" /></div>
      </div>
      <div className="basic-info">
          <p>Olimov Sulaymon</p>
          <p>React js developer</p>
          <p>Samarkand Uzbekistan</p>
      </div>
      <div className="hr-line"></div>
    <div className="more-info">
     <p>
      My fullname is Olimov Sulaymon, I was born in 08 08  2000 in Jambay district, Samarkand region. I grew up in Dehkhanabad Village.
      in my school-year, I learnt different subjects, but my major was Mathemtics, from 5 grade to 9 grade, I attended Mathemtical Olimpiads successfully.

         </p>
    <p>
     During Lyceum, I also attended Maths Olimpiads and did good job. Then What I found is that I was also to focus on my interests and important subjects such as English and Programming.
     So, after the accident in Samarkand city, I recovered for a month at home, at that time I started learning C++. So, I worked on small projects which helped a great deal.
        </p>
      <p>
     Then, I started learning React js which I found interesting, and worked on demo projects. I think what makes React js amazing library is its efficiency, beauty and its large community.
            </p>
      <p>
         Overall, I am focused and hard-working (sometimes lazy), and I like Programming and Algorithm.
         <br /> So, my skills are mainly  in Maths, C++ (a little bit Algorithm also), HTML5 and CSS3 and React js.
      </p>
    </div>

    </article>
  );
}

export default aboutText;
