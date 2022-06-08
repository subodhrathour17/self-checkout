import React, { Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { Logo } from "../assets/images";
import "./index.scss";

const TillOpen = ({tillShow, closeTill}) => {

  return (
    <Fragment>
      <Modal show={tillShow} onHide={closeTill}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          <div className="register-heading">
            <p>TILL OPEN</p>
          </div>
          <Form.Group as={Row} className="mb-3 register-main-box">
            <Form.Label column sm="2">
              Enter Register Id
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" placeholder="8701" />
            </Col>
            <Form.Label column sm="2" className="mt-4">
              Enter Till Date
            </Form.Label>
            <Col sm="10" className="mt-4">
              <Form.Control type="date" placeholder="30-05-2022" />
            </Col>
          </Form.Group>
          <div className="button-section">
           <Link to="/">
           <Button variant="warning" onClick={closeTill}>
              Continue <GoArrowRight size={20} />
            </Button></Link>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default TillOpen;
