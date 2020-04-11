import React, { Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap';

const modal = (props) => {
   return(
     <Fragment>
      <Modal size="sm" show={props.show} onHide={props.closed}>
        <Modal.Header closeButton>
          <Modal.Title>Succesfully sent</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={props.closed}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </Fragment>
   );
}

export default modal;
