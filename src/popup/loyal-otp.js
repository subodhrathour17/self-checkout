import React, {  Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { Logo,OtpIcon } from "../assets/images";

import "./index.css";

const LoyalProfileOtpOpen = ({otpShow, closeTill}) => {
  
  return (
    <Fragment>
      <Modal show={otpShow} onHide={closeTill}>
        <Modal.Header closeButton>
         
          <Image src={Logo} alt="suntech-logo" />
          
        </Modal.Header>
        <Modal.Body>
          <div className="loyal-user">
            <form style={{marginLeft:'30px'}}>
                
                <div className="p-name">
                <div><img style={{width:"140px",marginLeft:'170px'}}src={OtpIcon} alt="" /></div>
                </div>
                <div className="otptext" style={{marginLeft:'130px'}}><h2>OTP Verification</h2></div>
                <div className="otptext" style={{marginLeft:'90px'}}><span>Enter the OTP sent to  {"+1-202-555-0183"}</span></div>
                <div className="otptext" style={{display:'flex',marginTop:'30px',marginLeft:"160px"}}>
                <input style={{width:"30px",marginRight:'10px',textAlign:'center'}} type="text" />
                <input style={{width:"30px",marginRight:'10px',textAlign:'center'}} type="text" />
                <input style={{width:"30px",marginRight:'10px',textAlign:'center'}} type="text" />
                <input style={{width:"30px",marginRight:'10px',textAlign:'center'}} type="text" />
                </div>


            </form>
          </div>
          <div className="button-section">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" style={{width:'80px', marginTop: "30px",marginRight:"50px",marginLeft:"70px"}}>Next</button>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default LoyalProfileOtpOpen;
