import React from 'react';
import { Form } from 'react-bootstrap';

const formGroup = (props) => {
  return (
  <Form.Group controlId={props.id}>
    <Form.Label>{props.label}</Form.Label>
    <Form.Control
      required
      type="input"
      isValid = {props.isvalid}
      isInvalid ={(!props.isvalid) && props.touched}
      value={props.value}
      onChange={props.changed}
      {...props.config}
      />
  </Form.Group>
);
}

export default formGroup;


// || (props.touched && !props.isvalid)
