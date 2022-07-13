import React, { useState, Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo } from "../assets/images";
import "./index.css";
import Tillclosesucess from "./till-close-sucess";

const TillClose = ({tillShow, closeTill}) => {
  const [tillCloseShow, setTillCloseShow] = useState(false);

  const showTillClose = () => {
    if(localStorage.getItem("till")===JSON.stringify('close')){
      alert("Till is Already Closed")
     }else{
       localStorage.setItem("till",JSON.stringify('close'));
       setTillCloseShow(true);
     }
  };
  const closeTillClose = () => {
    setTillCloseShow(false);
  };
  return (
    <Fragment>
      <Modal show={tillShow} onHide={closeTill}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          <div className="register-heading">
            <p>TILL CLOSE</p>
          </div>
          <Form.Group as={Row} className="mb-3 register-main">
            <Form.Label column sm="2">
              Enter Till Id :-
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" placeholder="8701" />
            </Col>
            <Form.Label column sm="2" className="mt-4">
            </Form.Label>
            <Col sm="10" className="mt-4">
              <Form.Control type="date" placeholder="30-05-2022" />
            </Col>
          </Form.Group>
          <div className="button-section">
            <Button variant="warning" onClick={showTillClose}>
              Continue <GoArrowRight size={20} />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <Tillclosesucess show={tillCloseShow} handleClose={closeTillClose} />

    </Fragment>
  );
};

export default TillClose;
