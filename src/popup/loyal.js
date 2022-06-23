import React, {  Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo,Digital } from "../assets/images";

import "./index.css";

import { useState } from "react";
import LoyalProfileReceiptOpen from "./loyal-profile";

const LoyalReceiptOpen = ({ show, handleClose }) => {
  const [dataShow, setFromShow] = useState(false);

  const showTill = () => {
    setFromShow(true);
  };
  const closeTill = () => {
    setFromShow(false);
  };
  
  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         {/* <Image style={{marginLeft:'-40px',width:'30px'}} src={Digital}/>
          <spam style={{fontWeight:'bold',marginLeft:'-20px'}}>Degital Reciept</spam> */}
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
        
          <div className="button-section">
            
             <Button variant="warning" onClick={showTill}>
           Submit<GoArrowRight size={20} />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <LoyalProfileReceiptOpen dataShow={dataShow} closeTill={closeTill} />
    </Fragment>
  );
};

export default LoyalReceiptOpen;
