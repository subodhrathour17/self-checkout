import React, { useState, Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo } from "../assets/images";
import TillOpen from "../popup/till-open";
import "./index.css";

const RegisterOpen = ({ show, handleClose }) => {
  const [tillShow, setTillShow] = useState(false);

  const showTill = () => {
    setTillShow(true);
  };
  const closeTill = () => {
    setTillShow(false);
  };
  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          <div className="register-heading">
            <p>REGISTER OPEN</p>
          </div>
          <Form.Group as={Row} className="mb-3 register-main">
            <Form.Label column sm="2" required>
              
            </Form.Label>
            <Col sm="10"> <b>Register 101 is Open</b> </Col>
          </Form.Group>
          <div className="button-section">
            {/* <Button variant="warning" onClick={showTill}>
              Continue <GoArrowRight size={20} />
            </Button> */}
          </div>
        </Modal.Body>
      </Modal>
      <TillOpen tillShow={tillShow} closeTill={closeTill} />
    </Fragment>
  );
};

export default RegisterOpen;
