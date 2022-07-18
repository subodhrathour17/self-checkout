import React, {  Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";

import { Logo,Digital } from "../assets/images";
import emailjs from "emailjs-com"

import "./index.css";

const DegitalReceiptOpen = ({ show, handleClose }) => {
  
const sendEmail=(e)=>{
  e.preventDefault();
  emailjs.sendForm("service_n5egha5","template_br50d6u",e.target,"acwGCJmDun91INWlC").then(res=>{console.log(res);}).catch(err=>{console.log(err)});
   
}
  
  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         <Image style={{marginLeft:'-40px',width:'30px'}} src={Digital}/>
          <spam style={{fontWeight:'bold',marginLeft:'-20px'}}>Degital Reciept</spam>
          <Image src={Logo} alt="suntech-logo" />
          
        </Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={sendEmail}>
              <div class="form-example">
                <label for="name">Enter your number: </label>
                <input type="number" name="mobile" id="name" required/>
              </div>
             <div class="form-example">
                <label for="email">Enter your email: </label>
                <input type="email" name="user-email" id="email" required/>
              </div>
 
              <div class="form-example">
                <input type="submit" placeholder="send-Receipt"/>
              </div>
           </form>
         </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default DegitalReceiptOpen;
