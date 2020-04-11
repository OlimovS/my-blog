import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import FormGroup from '../../components/ContactMe/FormGroup/FormGroup';
import './Auth.css';
import {checkValidity, updateObject} from '../../shared/utility';
import * as actions from '../../store/actions/index';

class Auth extends Component {
  state = {
    controls: {
      email: {
        id: 'controlsGroupEmail',
        value: '',
        label: 'Email address',
        config: {
          type: 'email',
          placeholder: 'Enter email'
        },
        validation: {
           required: true,
           isEmail: true
        },
        isvalid: false,
        touched: false
      },
      password: {
        id: 'controlsGroupPassword',
        value: '',
        label: 'Password',
        config: {
          type: 'password',
          placeholder: 'Password'
        },
        validation: {
           required: true,
           minLength: 6
        },
        isvalid: false,
        touched: false
      }
    },
    isSignUp: true
  }
  onChangeHandler = (event, inputIdentifier) => {
  const updatedcontrolsElement = updateObject(this.state.controls[inputIdentifier], {
    value: event.target.value,
    isvalid: checkValidity( event.target.value, this.state.controls[inputIdentifier].validation),
    touched: true
  });

  const updatedcontrols = updateObject(this.state.controls, {
    [inputIdentifier]: updatedcontrolsElement
  });

  this.setState({controls: updatedcontrols});

  }

   submitHandler = (event) => {

     event.preventDefault();
     this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
   }

  switchAuthModeHandler = ()=>{
    this.setState(prevState => ({isSignUp: !prevState.isSignUp}));
  }

  render(){
    let controlsElementsArray = [];
    for(let sec in this.state.controls){
       controlsElementsArray.push({
         id: sec,
         controlsElem: this.state.controls[sec]
       });
    };
   let formAuth = controlsElementsArray.map(section => (
      <FormGroup
          key={section.id}
          id={section.controlsElem.id}
          isvalid={section.controlsElem.isvalid}
          touched={section.controlsElem.touched}
          label={section.controlsElem.label}
          value={section.controlsElem.value}
          config={section.controlsElem.config}
          changed={(event) => this.onChangeHandler(event, section.id)}
          />
    ));

    if(this.props.loading){
      formAuth = (
        <div className="my-spinner">
         <Spinner animation="border" variant="primary" />
       </div>
      )
    }

    let errorMessage = null;

    if(this.props.error){
       errorMessage = (
         <p>{this.props.error}</p>
       )
    }
   let authRedirect = null;
    if(this.props.isAuthenticated){
      authRedirect = <Redirect to="/"/>;
    }
    return(
      <section className='Section-Auth'>
      {authRedirect}
      <div className="auth-box">
      <h5>{this.props.message}</h5>
          {errorMessage}
          <form onSubmit={this.submitHandler}>
          {formAuth}
          <button className="button green">SUBMIT</button>
          </form>
          <button
             onClick={this.switchAuthModeHandler}
             className="button darkyellow">
             SWITCH TO {!this.state.isSignUp ? 'SIGNUP' : 'SIGIN'}
          </button>

      </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
   return {
     loading: state.auth.loading,
     error: state.auth.error,
     isAuthenticated: state.auth.token !== null
   }
}

const mapDispatchToProps = dispatch => {
   return {
     onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
