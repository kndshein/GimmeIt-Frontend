import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button'
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemModal = (props) =>{
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.description}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.buttonFunction}>{props.buttonText}</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ItemModal