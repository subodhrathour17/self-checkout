import React, {  Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { Logo } from "../assets/images";

import "./index.css";

import { useState } from "react";
import LoyalProfileReceiptOpen from "./loyal-profile";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const CreditDebitOpen = ({ show, handleClose,}) => {
  let totalAmo = 250;
  localStorage.setItem("totalamount",totalAmo);

  const [dataShow, setFromShow] = useState(false);
  const [showReceipt,setShowReceipt] = useState(false)
  const [dueamot,setDueamo]=useState(totalAmo);
  const [flag,setFlag]=useState(true);
  const [check,setCheck]=useState(0);

  const[payable,setPayable]=useState(totalAmo);

  const showMobile = () => {
    setFromShow(true);
  };
 
  const closeCreditDebit = () => {
    setFromShow(false);
  };

  const navigate =useNavigate();

  const TotalDueAmount =()=>{
    setCheck(check+1);
    
    if(payable>dueamot){
        alert("Enter valid payable amount")
        navigate('/credit');
    }
    else
    {
      if(dueamot>0){
        // console.log("check=",check);
      localStorage.setItem("card1","************7634");
      localStorage.setItem("card1type","visa");
        setDueamo(dueamot-payable);
        setFlag(false);
        
        setTimeout(() => {
          setFlag(true);
        }, 5000);
       
        localStorage.setItem("card2","************8914");
        localStorage.setItem("card2ype","master");
    }
}
}
useEffect(()=>{
    if(dueamot===0){
      // console.log("useEffect wala check=",check);

      if(check<2){
        localStorage.removeItem('card2');
      }
      setShowReceipt(true);
      
        navigate('/paymentsuccess');
        
    }
    
    
},[dueamot])

// console.log("total",totalAmo);
// console.log("due",dueamot);
// console.log("show",show);

  return (
    <Fragment>
      
        {
        flag ?
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />          
        </Modal.Header>
        <Modal.Body>
            <form style={{marginLeft:'30px'}} >
          <div classNameName="loyal-user">
                <div classNameName="p-name" style={{marginTop: "30px", fontWeight: "bold"}}>
                    <label >Total Amount</label>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px', }}> <span>{ totalAmo }</span></div>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'350px', }}> <span>{"AED"}</span></div>
                </div>
                <div style={{position:"absolute",width: "450px",height: "-2px",left: "25px",top: "75px",border: "1px solid #333333"}}> </div>
                <div classNameName="p-name"style={{marginTop: "30px",fontWeight: "bold"}}><label>Balance Due</label>
               
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px', }}> <span>{dueamot }</span></div>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'350px', }}> <span>{"AED"}</span></div>
                </div>
                <div style={{position:"absolute",width: "450px",height: "-2px",left: "25px",top: "120px",border: "1px solid #333333"}}> </div>

                <div classNameName="p-name" style={{marginTop: "30px",fontWeight: "bold"}}><label >Amount to be Paid :- </label>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px', }}> <input type="number" placeholder={dueamot}   onChange={(e)=>setPayable(e.target.value)} style={{width:"100px" } }/></div>
                </div>
                <div classNameName="button-section">
                </div>
               
                <a href="/payment"><Button type="button" className="btn btn-secondary" data-dismiss="modal" style={{width:'80px',marginTop: "0px"}}>No</Button></a>
          </div>
          
            </form>
            <Button  type="submit" className="btn btn-secondary" data-dismiss="modal" required  style={{width:'80px', marginTop: "0px",marginRight:"50px",marginLeft:"100px" }  } onClick={TotalDueAmount}>Pay
                </Button>
        </Modal.Body>
      </Modal>

        : null}
        
      
      
    </Fragment>
  );
};

export default CreditDebitOpen;