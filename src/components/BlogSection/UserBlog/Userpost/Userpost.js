import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Accordion, Card, Button, Spinner } from 'react-bootstrap';

import * as actions from '../../../../store/actions/index';
import './Userpost.css';

class Userpost extends Component {
  componentDidMount (){
    this.props.onFetchPost(this.props.token, this.props.userId);
  }
  render(){

    let posts = null;
    let  i = 0;
    posts = (
      <Fragment>
      <h3>Your Posts</h3>
      <p>Your posts will be checked by Admin,<br />then will be posted on Blog Section</p>
      <Accordion>

      {this.props.posts.map(obj => {

        return(
           <Card key={obj.id}>
             <Card.Header>
               <Accordion.Toggle as={Button} variant="link" eventKey={i}>
                 {obj.post.title}
               </Accordion.Toggle>
             </Card.Header>
             <Accordion.Collapse eventKey={i++}>
               <Card.Body>{obj.post.content}<br /><strong>Posted on</strong>&nbsp;{obj.config.time}&nbsp;  {obj.config.date}</Card.Body>
             </Accordion.Collapse>
           </Card>
        );

      })}
      </Accordion>
      </Fragment>

    );

    if(this.props.loading){
      posts =  (
        <div style={{height: "20vh",marginTop: "40px", paddingTop: "40px"}}>
          <Spinner animation="border" variant="primary" />
        </div>
      );
    }
    if(this.props.error){
      posts = (
        <div style={{height: '20vh'}}>
        <h5 style={{color: "red", marginTop: "40px"}}>Error: {this.props.error}</h5>
        </div>
      );
    }else  if( !this.props.loading && typeof this.props.posts[0] === "undefined" && !this.props.error){
       posts = (
         <div style={{height: '20vh'}}>
         <h5 style={{color: "#e67e22", marginTop: "40px"}}>You have no posts !</h5>
         </div>
       );
     }

    return(
      <div className="Userpost-section">
           {posts}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onFetchPost: (token, userId) => dispatch(actions.fetchPost(token, userId))
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts,
    token: state.auth.token,
    userId: state.auth.userId,
    loading: state.post.loading,
    error: state.post.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userpost);
