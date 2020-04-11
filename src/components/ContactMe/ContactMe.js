import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import './ContactMe.css';
import FormGroup from './FormGroup/FormGroup';
import Auxi from '../../hoc/Auxi/Auxi';
import axios from '../../axios';
import Spinner from '../UI/Spinner/Spinner';
import Modal from '../UI/Modal/Modal';
import {updateObject, checkValidity} from '../../shared/utility';

class ContactMe extends Component {
  state = {
    form: {
      firstName: {
        id: 'formGroupFirstName',
        value: '',
        label: 'First name',
        config: {
          type: 'text',
          placeholder: 'First name'
        },
        validation: {
           required: true
        },
        isvalid: false,
        touched: false
      },
      lastName: {
        id: 'formGroupLastName',
        value: '',
        label: 'Last name',
        config: {
          type: 'text',
          placeholder: 'Last name'
        },
        validation: {
           required: true
        },
        isvalid: false,
        touched: false
      },
      email: {
        id: 'formGroupEmail',
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
      }
    },
    formIsValid: false,
    loading: false,
    contactSent: false,
    error: null
  };
  onChangeHandler = (event, inputIdentifier) => {
  const updatedFormElement = updateObject(this.state.form[inputIdentifier], {
    value: event.target.value,
    isvalid: checkValidity( event.target.value, this.state.form[inputIdentifier].validation),
    touched: true
  });

  const updatedForm = updateObject(this.state.form, {
    [inputIdentifier]: updatedFormElement
  });


  let formIsValid = true;
  for (let key in updatedForm) {
      formIsValid = updatedForm[key].isvalid && formIsValid;
  }

  this.setState({form: updatedForm, formIsValid: formIsValid});

  }

  submitFormHandler = () => {

    this.setState({loading: true});
    const form = {
      name: this.state.form.firstName.value,
      lastname: this.state.form.lastName.value,
      email: this.state.form.email.value
    };
    axios.post('/contact-me.json', form)
      .then(response => {
        this.setState({loading: false, contactSent: true, error: null});
      })
        .catch(error => {
          this.setState({error: error.message});
          console.log(error);
        });
  }
  modalCloseHandler = () => {
    this.setState(prevState => ({contactSent: !prevState.contactSent}));
    const form = {...this.state.form};
    for(let key in form){
      form[key].value = '';
      form[key].isvalid = false;
      form[key].touched = false;
    }
    this.setState({
         form: form,
         formIsValid: false,
         loading: false,
         contactSent: false
       });
  }
   render(){
     let formElementsArray = [];
     for(let sec in this.state.form){
        formElementsArray.push({
          id: sec,
          formElem: this.state.form[sec]
        });
     };
     let form = (
       <Auxi>
       {formElementsArray.map(section => {
          return <FormGroup
                    key={section.id}
                    id={section.formElem.id}
                    isvalid={section.formElem.isvalid}
                    touched={section.formElem.touched}
                    label={section.formElem.label}
                    value={section.formElem.value}
                    config={section.formElem.config}
                    changed={(event) => this.onChangeHandler(event, section.id)}
                    />
       })}

       </Auxi>
     );

     if(this.state.loading){
       form = <Spinner />;
     }

    if(this.state.error){
     form = (
       <div className="error-message">
         <p>Sorry: {this.state.error}</p>
       </div>
     );
    }
     return(
       <div className="section-contactMe">
           <div className="contact-box">
           <h5>Contact me</h5>
           <Form>
             {form}
           </Form>
           <Modal
            closed={this.modalCloseHandler}
            show={this.state.contactSent}
           />
             <Button
               disabled={!this.state.formIsValid}
               onClick={this.submitFormHandler}
               variant="primary" type="submit">
              Submit
             </Button>
           </div>
       </div>
     );
   }
}

export default ContactMe;












//validated={props.validated}
//changed={this.onChangeHandler}
//

             // <Form.Group controlId="formGroupFirstName">
             //   <Form.Label>First name</Form.Label>
             //   <Form.Control type="input" placeholder="First name" />
             // </Form.Group>
             //
             // <Form.Group controlId="formGroupLastName">
             //   <Form.Label>Last name</Form.Label>
             //   <Form.Control as="input" placeholder="Last name" />
             // </Form.Group>
             //
             // <Form.Group controlId="formGroupEmail">
             //   <Form.Label>Email address</Form.Label>
             //   <Form.Control as="input" type="email" placeholder="Enter email" />
             // </Form.Group>
