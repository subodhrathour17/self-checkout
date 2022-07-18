import React, { useState,Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo } from "../assets/images";
import "./index.css";
import Tillopensucess from "./till-open-sucess";

const TillOpen = ({tillShow, closeTill}) => {
  const dateInput = new Date().toISOString().split('T')[0];
  const [tillOpenShow, setTillOpenShow] = useState(false);

  const showTillOpen = () => {
    if(localStorage.getItem("register")===JSON.stringify('open')){
    if(localStorage.getItem("till")===JSON.stringify('open')){
      // alert("Till is Already Opened")
     }else{
       localStorage.setItem("till",JSON.stringify('open'));
       setTillOpenShow(true);
     }
    }else{
      alert("Register is Not Opened");
    }
  };
  const closeTillOpen = () => {
    setTillOpenShow(false);
  };
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
          <Form.Group as={Row} className="mb-3 register-main">
            <Form.Label column sm="2">
              Enter Till Id :-
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" placeholder="8701" />
            </Col>
            <Form.Label column sm="2" className="mt-4">
              Enter Till Date :-
            </Form.Label>
            <Col sm="10" className="mt-4">
              <Form.Control type="date" id="date"  value={dateInput} />
            </Col>
          </Form.Group>
          <div className="button-section">
            <Button variant="warning" onClick={showTillOpen}>
              Continue <GoArrowRight size={20} />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <Tillopensucess show={tillOpenShow} handleClose={closeTillOpen} />

    </Fragment>
  );
};

export default TillOpen;
