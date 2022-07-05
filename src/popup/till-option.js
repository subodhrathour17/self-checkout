import React, { Fragment,useState } from "react";
import { Modal, Image, Form, Col, Row } from "react-bootstrap";
import { Logo } from "../assets/images";
import "./index.css";
import TillOpen from "../popup/till-open";
import TillClose from "./till-close";

const TillOption = ({ show, handleClose }) => {
  const [tillShow, setTillShow] = useState(false);
  const [tillCloseShow, setTillCloseShow] = useState(false);

  const showTill = () => {
    setTillShow(true);
  };
  const closeTill = () => {
    setTillShow(false);
  };
  const showTillClose = () => {
    setTillCloseShow(true);
  };
  const closeTillClose = () => {
    setTillCloseShow(false);
  };
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
                  <button className="color-btn text-light" onClick={showTill}>Till Open</button>
                </div>
            <div className="buttons pb-4">
                  <button className="color-btn text-light" onClick={showTillClose}>Till Close</button>
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
      <TillOpen tillShow={tillShow} closeTill={closeTill} />
      <TillClose tillShow={tillCloseShow} closeTill={closeTillClose} />

    </Fragment>
  );
};

export default TillOption;
