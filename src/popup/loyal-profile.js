import React, {  Fragment, useState } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo,Digital,LoyalGoldIcon } from "../assets/images";
import LoyalProfileOtpOpen from "../popup/loyal-otp";

import "./index.css";

const LoyalProfileReceiptOpen = ({dataShow, closeTill}) => {
  const [otpShow, setTillShow] = useState(false);

  const showTill = () => {
    setTillShow(true);
  };
  const closeTilll = () => {
    setTillShow(false);
  };

  
  return (
    <Fragment>
      <Modal show={dataShow} onHide={closeTill}>
        <Modal.Header closeButton>
         
          <Image src={Logo} alt="suntech-logo" />
          
        </Modal.Header>
        <Modal.Body>
          <div className="loyal-user">
            <form style={{marginLeft:'30px'}}>
                <div className="p-name" style={{marginTop: "30px", fontWeight: "bold"}}>
                    <label >Person name :- </label>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px', textDecoration:" underline"}}> <span>{"subodh" }</span></div>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'400px', textDecoration:" underline", color:"green"}}> <span>{"Active" }</span></div>
                </div>
                <div className="p-name"style={{marginTop: "30px",fontWeight: "bold"}}><label>Membership Type :- </label>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px',}}><img style={{width:"60px"}}src={LoyalGoldIcon} alt="" /></div>
                </div>
                <div className="p-name" style={{marginTop: "30px",fontWeight: "bold"}}><label >Accumulated Point :- </label>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px', textDecoration:" underline"}}> <span>{150}</span></div>
                </div>
                <div style={{marginTop: "30px",textAlign:'center'}}><span >Would you like to reedem points now</span></div>
            </form>
          </div>
          <div className="button-section">
          <Button  type="button" class="btn btn-secondary" data-dismiss="modal" style={{width:'80px', marginTop: "30px",marginRight:"50px"}} onClick={showTill}>Yes</Button>
           <a href="/payment"><button type="button" class="btn btn-secondary" data-dismiss="modal" style={{width:'80px',marginTop: "30px"}}>No</button></a>
          </div>
        </Modal.Body>
      </Modal>
      <LoyalProfileOtpOpen otpShow={otpShow} closeTill={closeTilll} />

    </Fragment>
  );
};

export default LoyalProfileReceiptOpen;
