import React from 'react';
import { FaTelegram, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa'

import SingleSocial from './singleSocial/singleSocial';
import Auxi from '../../../hoc/Auxi/Auxi';

const social = (props) => {

   return(
      <Auxi>
         <SingleSocial link="https://www.t.me/uzb_hardworking" > <FaTelegram /></SingleSocial>
         <SingleSocial link="https://www.instagram.com/uzb_hardworking" > <FaInstagram /></SingleSocial>
         <SingleSocial link="https://www.youtube.com/" > <FaYoutube /></SingleSocial>
         <SingleSocial link="https://www.facebook.com/" > <FaFacebookF /></SingleSocial>
     </Auxi>
   );
}


export default social;
