import React from 'react';

import './Post.css';
import image from '../../../assets/imgs/1.jpg';

const post = (props) => {
  return(
    <article className="my-Post" onClick={props.clicked}>
        <img src={image} alt="hi"/>
        <h6>{props.post.title}</h6>
        <div className="Info">
            <div className="Author">{props.post.author}</div>
        </div>
    </article>
  );
}

export default post;

//
// <div className="Post">
//
//       <img src={image} alt="coming"/>
//
//      <div className="text-box">
//        <p>body:{props.post.body}</p>
//        <p>title:{props.post.title}</p>
//        <p>{props.author}</p>
//      </div>
// </div>
