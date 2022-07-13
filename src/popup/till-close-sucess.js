import React, { Fragment } from "react";
import {  Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo } from "../assets/images";
import "./index.css";

const Tillclosesucess = ({show, handleClose}) => {
  
  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          
        <div className="register-heading">
            <p>Till Close</p>
          </div>
          <Form.Group as={Row} className="mb-12 register-main">
            <Form.Label column sm="2" required>
              
            </Form.Label>
            <Col sm="10" style={{height:"150px",marginTop:"50px"}}> <b>Till is Now Closed </b> </Col>
            
          </Form.Group>
          <div className="button-section">
          <button variant="warning">
             <a href="/register" style={{textDecoration:"none",color:"black"}} >
              Continue <GoArrowRight size={20} />
            </a>
            </button>
          </div>

        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default Tillclosesucess;
