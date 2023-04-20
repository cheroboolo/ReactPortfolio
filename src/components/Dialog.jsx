import React from 'react';
import Modal from 'react-bootstrap/Modal';

function Example(props) {

  return (
    <>

      <Modal
        show={props.data}
        onHide={props.close}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You've sent message succesfully. 
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example;