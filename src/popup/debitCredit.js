import React, {  Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { Logo } from "../assets/images";

import "./index.css";

import { useState } from "react";
import LoyalProfileReceiptOpen from "./loyal-profile";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const CreditDebitOpen = ({ show, handleClose,}) => {
  let totalAmo = 150;
  localStorage.setItem("totalamount",totalAmo);

  const [dataShow, setFromShow] = useState(false);
  const [showReceipt,setShowReceipt] = useState(false)

  const showMobile = () => {
    setFromShow(true);
  };
  // const navigateToContacts = () => {
    
  //   navigate('/paymentsuccess');
    
  // };
  const closeCreditDebit = () => {
    setFromShow(false);
  };
  const [dueamot,setDueamo]=useState(totalAmo);
  const[payable,setPayable]=useState(totalAmo);
  const navigate =useNavigate();

  const TotalDueAmount =(e)=>{
    e.preventDefault();
    if(payable>dueamot){
        alert("Enter valid payable amount")
        navigate('/credit');
    }else{
  
    if(dueamot>0){
        setDueamo(dueamot-payable);
       
        navigate('/credit');
       
    }
}
}
useEffect(()=>{
    if(dueamot===0){
      setShowReceipt(true);
      
        navigate('/paymentsuccess');
        
    }
},[dueamot])

console.log("total",totalAmo);
console.log("due",dueamot);
  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
          
        </Modal.Header>
        <Modal.Body>
            <form style={{marginLeft:'30px'}} onSubmit={TotalDueAmount}>
          <div className="loyal-user">
                <div className="p-name" style={{marginTop: "30px", fontWeight: "bold"}}>
                    <label >Total Amount</label>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px', }}> <span>{ totalAmo }</span></div>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'350px', }}> <span>{"AED"}</span></div>
                </div>
                <div style={{position:"absolute",width: "450px",height: "-2px",left: "25px",top: "75px",border: "1px solid #333333"}}> </div>
                <div className="p-name"style={{marginTop: "30px",fontWeight: "bold"}}><label>Balance Due</label>
               
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px', }}> <span>{dueamot }</span></div>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'350px', }}> <span>{"AED"}</span></div>
                </div>
                <div style={{position:"absolute",width: "450px",height: "-2px",left: "25px",top: "120px",border: "1px solid #333333"}}> </div>

                <div className="p-name" style={{marginTop: "30px",fontWeight: "bold"}}><label >Amount to be Paid :- </label>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px', }}> <input type="number" placeholder={dueamot}   onChange={(e)=>setPayable(e.target.value)} style={{width:"100px" } }/></div>
                </div>
                <div className="button-section">
                </div>
                <Button  type="submit" class="btn btn-secondary" data-dismiss="modal" required style={{width:'80px', marginTop: "0px",marginRight:"50px",marginLeft:"100px" } }>Pay
                </Button>
                <a href="/payment"><Button type="button" class="btn btn-secondary" data-dismiss="modal" style={{width:'80px',marginTop: "0px"}}>No</Button></a>
          </div>
          
            </form>
            
        </Modal.Body>
      </Modal>
      
      <LoyalProfileReceiptOpen dataShow={dataShow} closeCreditDebit={closeCreditDebit} />
      
      
    </Fragment>
  );
};

export default CreditDebitOpen;