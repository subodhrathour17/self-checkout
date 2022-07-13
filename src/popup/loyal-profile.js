import React, {  Fragment, useEffect, useState } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { Logo,Digital,LoyalGoldIcon } from "../assets/images";
import LoyalProfileOtpOpen from "../popup/loyal-otp";


import "./index.css";
import axios from "axios";

const LoyalProfileReceiptOpen = ({dataShow, closeMobile}) => {
  let accumulatedPoint = 1000;
  let totalreedem = accumulatedPoint /10;
  const [otpShow, setTillShow] = useState(false);
  const [data1,setData1]=useState();
 


    const submitHandler= async ()=>{
      try{
       
       const res= await axios.get("data.json",{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      
      let test = JSON.stringify(res)
       setData1(res)
       console.log(test);
      }catch(e){console.log(e);}
   }

  

  const showTill = () => {
    setTillShow(true);
  };
  const closeTilll = () => {
    setTillShow(false);
  };
  const [dueamo,setDueamo]=useState(totalreedem);
  const[payable,setPayable]=useState();
  localStorage.setItem("redeemPoint",payable);
  const navigate =useNavigate();
  const TotalDueAmount =(e)=>{
    e.preventDefault();
    if(payable>dueamo){
        alert("Enter valid Redeem Point")
        // navigate('/credit');
    }else{

    
    if(dueamo>0){
        setDueamo(dueamo-payable);
       
        // navigate('/credit');
       
    }
}
}
useEffect(()=>{
  if(dueamo===0){
      navigate('/paymentsuccess');
  }
},[dueamo])
console.log("total",totalreedem);
console.log("due",dueamo);
console.log(payable);

  return (
    <Fragment>
      <Modal show={dataShow} onHide={closeMobile}>
        <Modal.Header closeButton>
         
          <Image src={Logo} alt="suntech-logo" />
          
        </Modal.Header>
        <Modal.Body>
            <form  onSubmit={TotalDueAmount} style={{marginLeft:'30px'}}>
          <div className="loyal-user">
                <div className="p-name" style={{marginTop: "10px", fontWeight: "bold"}}>
                    <label >Person name :- </label>
                <div style={{ position:'absolute' ,marginTop:'-30px',marginLeft:'290px',}}> <span>{"Subodh"}</span></div>
                <div style={{ position:'absolute' ,marginTop:'-30px',marginLeft:'380px', color:"green"}}> <span>{"Active" }</span></div>
                </div>
                <div style={{position:"absolute",width: "150px",height: "-2px",left: "320px",top: "28px",border: "1px solid #333333"}}> </div>
                <div className="p-name"style={{marginTop: "10px",fontWeight: "bold"}}><label>Membership Type :- </label>
                <div style={{ position:'absolute' ,marginTop:'-35px',marginLeft:'300px',}}><img style={{width:"60px"}}src={LoyalGoldIcon} alt="" /></div>
                </div>
                <div style={{position:"absolute",width: "150px",height: "-2px",left: "320px",top: "63px",border: "1px solid #333333"}}> </div>
                <div className="p-name" style={{marginTop: "15px",fontWeight: "bold"}}><label >Accumulated Point :- </label>
                <div style={{ position:'absolute' ,marginTop:'-40px',marginLeft:'300px',}}> <span>{accumulatedPoint}</span></div>
                </div>
                
                <div style={{position:"absolute",width: "150px",height: "-2px",left: "320px",top: "95px",border: "1px solid #333333"}}> </div>
                <div className="p-name" style={{marginTop: "16px",fontWeight: "bold"}}><label >Equivalent Amount :- </label>
                <div style={{ position:'absolute' ,marginTop:'-35px',marginLeft:'300px', }}> <span> {dueamo}   {"AED"}</span></div>
                </div>
                
                <div style={{position:"absolute",width: "150px",height: "-2px",left: "320px",top: "138px",border: "1px solid #333333"}}> </div>
                <div className="p-name" style={{marginTop: "18px",fontWeight: "bold"}}><label >Enter Amount to Reedem:- </label>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'290px'}} required> <input onChange={(e)=>setPayable(e.target.value)} style={{width:"150px", backgroundColor:"#F2F2F2" ,border:"none"}} type="number" />  </div>
                </div>
                
                <div style={{position:"absolute",width: "150px",height: "-2px",left: "320px",top: "196px",border: "1px solid #333333"}}> </div>
                <div style={{marginTop: "30px",textAlign:'center'}}><span >Would you like to reedem points now</span></div>
          </div>
          <div className="button-section">
          <Button  type="submit" class="btn btn-secondary" data-dismiss="modal" style={{width:'80px', marginTop: "30px",marginRight:"50px"}} onClick={showTill} >Yes</Button>
           <a href="/payment"><button type="button" class="btn btn-secondary" data-dismiss="modal" style={{width:'80px',marginTop: "30px"}}>No</button></a>
          </div>
            </form>
            {/* <button onClick={submitHandler}>get</button> */}
        </Modal.Body>
      </Modal>
      <LoyalProfileOtpOpen otpShow={otpShow} closeTill={closeTilll} />

    </Fragment>
  );
};

export default LoyalProfileReceiptOpen;
