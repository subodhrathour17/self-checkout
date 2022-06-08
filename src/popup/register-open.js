import React, { useState, Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo } from "../assets/images";
import TillOpen from "../popup/till-open";
import "./index.scss";

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
          <Form.Group as={Row} className="mb-3 register-main-box">
            <Form.Label column sm="2" required>
              Enter Register Id
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" placeholder="8701" />
            </Col>
          </Form.Group>
          <div className="button-section">
            <Button variant="warning" onClick={showTill}>
              Continue <GoArrowRight size={20} />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <TillOpen tillShow={tillShow} closeTill={closeTill} />
    </Fragment>
  );
};

export default RegisterOpen;
