import React, {  Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo } from "../assets/images";
// import CustomerData from '../data.json'

import "./index.css";

import { useState } from "react";
import LoyalProfileReceiptOpen from "./loyal-profile";

const LoyalReceiptOpen = ({ show, handleClose }) => {
  const [dataShow, setFromShow] = useState(false);
  const [phone,setPhone]=useState()

  const showMobile = () => {
    setFromShow(true);
  };
  const closeMobile = () => {
    setFromShow(false);
  };

  // const FetchData=async ()=>{



  //   let item={phone};

  //   console.log("In fetch Data Items are",item);

  //   let result = await fetch({CustomerData},{

  //     method:'POST',

  //     headers:{

  //       "Content-Type":"application/json",

  //       "Accept":"application/json",

  //       "Access-Control-Allow-Origin" :'*',

  //     },

  //     body:JSON.stringify(item)

  //   });

  //   result=await result.json();

  //   console.log(result);


  // }
  
  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
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
            
             <Button variant="warning" onClick={showMobile}>
           Submit<GoArrowRight size={20} />
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <LoyalProfileReceiptOpen dataShow={dataShow} closeMobile={closeMobile} />
    </Fragment>
  );
};

export default LoyalReceiptOpen;
