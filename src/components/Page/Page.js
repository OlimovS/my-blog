import React from 'react';
import {IoIosInfinite} from 'react-icons/io';
import {MdComputer} from 'react-icons/md';
import {GiLaurelsTrophy} from 'react-icons/gi';
import {GoOrganization} from 'react-icons/go';


import buhoro from '../../assets/cities/Buhoro.jpg';
import navoiy from '../../assets/cities/Navoiy.jpg';
import samarqand from '../../assets/cities/Samarqand.jpg';
import toshkent from '../../assets/cities/Toshkent.jpg';

import City from './box-city/City';
import Boxprop from './box-prop/BoxProp';
import './Page.css';


const page =(props)=>{
  return(
    <div className="Page-Section">
      <h4>BECOME BEST PROGRAMMER WITH US</h4>
      <p className="long-copy">Hello, we're MyFood, your new premium food delivery service.
       We know you're always busy. No time for cooking.
       So let us take care of that, we're really good at it, we promise!</p>
      <div className="four-boxes">
        <Boxprop
            h6="UP TO 365 DAYS"
            p="Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style."
            >
            <IoIosInfinite />
        </Boxprop>
        <Boxprop
            h6="READY IN 20 MINUTES"
            p="You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy."
            >
            <MdComputer />
        </Boxprop>
        <Boxprop
            h6="100% ORGANIC"
            p="All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!"
            >
            <GiLaurelsTrophy />
        </Boxprop>
        <Boxprop
            h6="ORDER ANYTHING"
            p="We don't limit your creativity, which means you can order whatever you feel like.You can also choose from our menu containing over 100 delicious meals. It's up to you!"
            >
            <GoOrganization />
        </Boxprop>
      </div>
<br />
      <h4>WE ARE IN THESE CITIES</h4>
      <p className="long-copy">Hello, we're MyFood, your new premium food delivery service.
       We know you're always busy. No time for cooking.
      </p>
      <div className="four-cities">
         <City
            image={toshkent}
            city="Toshkent"
            learners="420+ learners"
            teachers="25+ teachers"
            linkName="proSchool_To"
            link="https://t.me/uzb_hardworking"
         />
         <City
            image={samarqand}
            city="Samarqand"
            learners="260+ learners"
            teachers="20+ teachers"
            linkName="proSchool_Sa"
            link="https://t.me/uzb_hardworking"
         />
         <City
            image={buhoro}
            city="Buhoro"
            learners="220+ learners"
            teachers="15+ teachers"
            linkName="proSchool_Bu"
            link="https://t.me/uzb_hardworking"
         />
         <City
            image={navoiy}
            city="Navoiy"
            learners="180+ learners"
            teachers="10+ teachers"
            linkName="proSchool_Na"
            link="https://t.me/uzb_hardworking"
         />
      </div>

    </div>
  );
}

export default page;
