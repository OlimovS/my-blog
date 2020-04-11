import React, { Component } from 'react';
import { Route, withRouter, NavLink }  from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa'
import { IconContext } from 'react-icons';

import './Profile.css';
import Scores from '../../components/Game/Scores/Scores';
import Game from '../../components/Game/Game';
import Newpost from '../../components/BlogSection/UserBlog/Newpost/Newpost';
import Userpost from '../../components/BlogSection/UserBlog/Userpost/Userpost';
import Bottom from '../../components/Navigation/Bottom/Bottom';
import Auxi from '../../hoc/Auxi/Auxi';

class Profile extends Component {
  render(){
    return(
      <Auxi>
      <section className="Profile-Section">
      <div className="main-look">
      <div className="top-nav">
          <NavLink
             activeStyle={{
               color: "#1B1464"
              }}
             activeClassName="top-navlink"
             to="/profile/play-game">Play Game</NavLink>
             &nbsp; &nbsp;
          <NavLink
             activeStyle={{
              color: "#1B1464"
             }}
             activeClassName="top-navlink"
             to="/profile/make-post">Make post</NavLink>
       </div>

        <div className="my-portfoli-section">
        <article className="portfoli-content">
           <h5>This is Your Profile Section</h5>
           <p><strong>If you have any recommendations</strong></p>
           <p><strong>Feel, free to contact me</strong></p>
        </article>

        <nav className="right-nav">
        <IconContext.Provider value={{className: "profile-icon"}}>
          <FaUserCircle/>
        </IconContext.Provider>
           <div className="text-div">
             <p className="right-main-text">My Profile</p>
           </div>
             <NavLink
                activeStyle={{
                  color: "white"
                 }}
                activeClassName="selected"
                to="/profile/game">Game Scores</NavLink>
             <NavLink
                activeStyle={{
                 color: "white"
                }}
                activeClassName="selected"
                to="/profile/posts">My Posts</NavLink>
        </nav>
        </div>
        </div>
        <div className="play-section">
        <Route path="/profile/play-game" render={() => <Game width="100%"/>}/>
        </div>
        <Route path="/profile/make-post" component={Newpost}/>
        <Route path="/profile/posts" component={Userpost}/>

        <Route path="/profile/game" component={Scores}/>
        <Route exact path="/profile" render={() => (
          <div style={{height: "40vh", paddingTop: "40px"}}>
            <h1 style={{fontWeight: "lighter"}}>Profile</h1>
          </div>
        )}/>
    </section>
      <Bottom />
    </Auxi>
    );
  }
}

export default withRouter(Profile);
