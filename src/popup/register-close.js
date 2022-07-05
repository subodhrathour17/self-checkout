import React, { useState, Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { Logo } from "../assets/images";
import "./index.css";

const RegisterClose= ({ show, handleClose }) => {

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          <div className="register-heading">
            <p>REGISTER Close</p>
          </div>
          <Form.Group as={Row} className="mb-3 register-main">
            <Form.Label column sm="2" required>
              
            </Form.Label>
            <Col sm="10"> <b>Register 101 is Close</b> </Col>
          </Form.Group>
          <div className="button-section">
            {/* <Button variant="warning" onClick={showTill}>
              Continue <GoArrowRight size={20} />
            </Button> */}
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default RegisterClose;
