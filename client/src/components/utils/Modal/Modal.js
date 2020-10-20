import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Modal.scss';

const ModalCode = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="discount">
      <Button color="info" onClick={toggle}> Click here to get your discount </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Discount -20%</ModalHeader>
        <ModalBody>
          Your discount code: <span className="discount-code">SERPU99</span>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Copy</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalCode; 