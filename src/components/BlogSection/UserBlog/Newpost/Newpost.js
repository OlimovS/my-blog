import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner, Form, Button } from 'react-bootstrap';

import FormGroup from '../../../ContactMe/FormGroup/FormGroup';
import Auxi from '../../../../hoc/Auxi/Auxi';
import {updateObject, checkValidity} from '../../../../shared/utility';
import './Newpost.css';
import * as actions from '../../../../store/actions/index';

class Newpost extends Component {
  state = {
    post: {
      title: {
        id: 'formGroupTitle',
        value: '',
        label: 'Title',
        config: {
          as: 'input',
          placeholder: 'Title'
        },
        validation: {
           required: true
        },
        isvalid: false,
        touched: false
      },
      content: {
        id: 'formGroupContent',
        value: '',
        label: 'Content',
        config: {
          as: 'textarea',
          placeholder: 'Content'
        },
        validation: {
           required: true
        },
        isvalid: false,
        touched: false
      },
      author: {
        id: 'formGroupEmail',
        value: '',
        label: 'Author',
        config: {
          as: 'input',
          placeholder: 'Author'
        },
        validation: {
           required: true
        },
        isvalid: false,
        touched: false
      }
    },
    postIsValid: false
  };



  onChangeHandler = (event, inputIdentifier) => {
  const updatedPostElement = updateObject(this.state.post[inputIdentifier], {
    value: event.target.value,
    isvalid: checkValidity( event.target.value, this.state.post[inputIdentifier].validation),
    touched: true
  });

  const updatedPost = updateObject(this.state.post, {
    [inputIdentifier]: updatedPostElement
  });


  let postIsValid = true;
  for (let key in updatedPost) {
      postIsValid = updatedPost[key].isvalid && postIsValid;
  }

  this.setState({post: updatedPost, postIsValid: postIsValid});

  }

  postDataHandler = () => {
    const post = {
        title: this.state.post.title.value,
        content: this.state.post.content.value,
        author: this.state.post.author.value
      }
     this.props.onPostSend(post, this.props.token, this.props.userId);

      }
   render(){
     let postElementsArray = [];
     for(let sec in this.state.post){
        postElementsArray.push({
          id: sec,
          postElem: this.state.post[sec]
        });
     };
     let post = (
       <Auxi>
       {postElementsArray.map(section => {
          return <FormGroup
                    key={section.id}
                    id={section.postElem.id}
                    isvalid={section.postElem.isvalid}
                    touched={section.postElem.touched}
                    label={section.postElem.label}
                    value={section.postElem.value}
                    config={section.postElem.config}
                    changed={(event) => this.onChangeHandler(event, section.id)}
                    />
       })}

       </Auxi>
     );



     let message = null;
     if(this.props.error){
       message = <h6 style={{color: "red"}}>Error: {this.props.error}</h6>;
     }
      return(
        <div className="NewPost">
                {message}
                <h5>Make a post !</h5>
                <Form>
                {post}
                </Form>

                {this.props.loading
                   ? <Spinner animation="border" variant="success" />
                   :  <Button
                         disabled={!this.state.postIsValid}
                         onClick={this.postDataHandler}
                         variant="primary" type="submit">
                        Send Post
                       </Button> }
            </div>
      );
   }
}


const mapStateToProps = state => {
  return {
    loading: state.post.loading,
    error: state.post.error,
    token: state.auth.token,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPostSend: (post, token, userId) => dispatch(actions.postSend(post, token, userId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Newpost);


//
// state = {
//     title: '',
//     content: '',
//     author: '',
//     message: false
// }

//
// <label>Title
// <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
// </label>
//
// <label>Content
// <textarea style={{whiteSpace: "pre-line"}} rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
// </label>
//
// <label>Author
// <div className="select-auth">
// <input type="text" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})} />
// </div>
// </label>
