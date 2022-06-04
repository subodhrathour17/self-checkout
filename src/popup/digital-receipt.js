import React, { useState, Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo,Digital } from "../assets/images";
// import TillOpen from "../popup/till-open";
import "./index.css";

const DegitalReceiptOpen = ({ show, handleClose }) => {
  

  
  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         <Image style={{marginLeft:'-40px',width:'30px'}} src={Digital}/>
          <spam style={{fontWeight:'bold',marginLeft:'-20px'}}>Degital Reciept</spam>
          <Image src={Logo} alt="suntech-logo" />
          
        </Modal.Header>
        <Modal.Body>
         
          <Form.Group as={Row} className="mb-3 register-main">
            <Form.Label column sm="2" required>
              Mobile Number:-
            </Form.Label>
            <Col sm="10">
              <Form.Control type="tel" placeholder="8744029109" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 register-main">
            <Form.Label column sm="2" required>
              Email Id :-
            </Form.Label>
            <Col sm="10">
              <Form.Control type="email" placeholder="@gmail.com" />
              
            </Col>
          </Form.Group>
          <div className="button-section">
            <Button variant="warning" >
              Continue <GoArrowRight size={20} />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default DegitalReceiptOpen;
