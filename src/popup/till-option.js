import React, { Fragment } from "react";
import { Modal, Image, Form, Col, Row } from "react-bootstrap";
import { Logo } from "../assets/images";
import "./index.css";

const TillOption = ({ show, handleClose }) => {

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          {/* <div className="register-heading">
            <p>Till Option</p>
          </div> */}
          <Form.Group as={Row} className="mb-3 register-main">
           
            <Col sm="12">
            <div className="buttons pb-4">
                  <button className="color-btn text-light">Till Open</button>
                </div>
            <div className="buttons pb-4">
                  <button className="color-btn text-light">Till Close</button>
                </div>
            <div className="buttons pb-4">
                  <button className="color-btn text-light">Till Reconcile</button>
                </div>
            </Col>
          </Form.Group>
          <div className="button-section">
         
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default TillOption;
