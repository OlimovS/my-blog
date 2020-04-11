import React, { Component } from 'react';
import axios from '../../axios';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './Blog.css';
import FullPost from '../../components/BlogSection/FullPost/FullPost';
import Spinner from '../../components/UI/Spinner/Spinner';
import PlayGame from '../../components/UI/PlayGame/PlayGame';
import Game from '../../components/Game/Game';
import Auxi from '../../hoc/Auxi/Auxi';
import Bottom from '../../components/Navigation/Bottom/Bottom';
import PostNav from '../../components/BlogSection/PostNav/PostNav';
import Auth from '../Auth/Auth';


class Blog extends Component {
  state = {
    posts: [],
    error: null
  }

  componentDidMount(){
       axios.get('/blog-posts.json')
        .then(response => {
          const posts = [];
           for(let key in response.data){
              if(key !== "underConstruction"){
                posts.push({
                  post: response.data[key].post,
                  config: response.data[key].config,
                  id: key
                })
              }

           };
           this.setState({posts: posts, error: null});
        })
         .catch( error => {
            this.setState({error: error.message});
         });
  }
  fullPostHandler = (id) => {
    this.props.history.push({pathname: '/blog/' + id});

  }
  gameOpenHandler = () => {
    this.props.history.push({pathname: '/blog/game'})
  }
  render(){
    let spinner = this.state.error
    ? <div style={{margin: "100px auto auto"}}>
          <h5>Error: {this.state.error}</h5>
      </div>
    : <Spinner />;

     if(this.state.posts[0]){
        spinner = (
        <Auxi>
        <section className="Section-Blog">
          <div className="my-blog-section">
             <nav className="side-nav">
             <p className="side-main-text">So'nggi postlar</p>
             {this.state.posts.map(object => {
                return (
                <PostNav
                  key={object.id}
                  config={object.config}
                  title={object.post.title}
                  clicked={() => this.fullPostHandler(object.id)}/>
                );
             })}
             <PlayGame clicked={this.gameOpenHandler} />
             </nav>
             <article className="blog-content">
            <Switch>
               {this.props.isAuthenticated ? <Route path="/blog/game" exact component={Game} /> : <Route path="/blog/game" exact render={() => <Auth message="Please, SignUp or SignIn"/> } /> }
               <Redirect from="/blog/error" to="/blog" />
               <Route path={this.props.match.url+'/:id'} exact component={FullPost} />
             </Switch>
             </article>


         </div>

         </section>

         <Bottom />
         </Auxi>
        );
     }
     return(
      <Auxi>
             {spinner}
      </Auxi>
     );
  }
}

const mapStateToProps = state => {
   return {
      isAuthenticated: state.auth.token !== null
   }
}

export default connect(mapStateToProps)(Blog);
