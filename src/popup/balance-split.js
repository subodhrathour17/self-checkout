import React, { Fragment } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";

import { Logo } from "../assets/images";
import "./index.css";

const RedeemPoint = ({ show, handleClose }) => {
  let redeemPoint= localStorage.getItem("redeemPoint")
  let totalamount= localStorage.getItem("totalamo")
  let finalAmo = totalamount-redeemPoint

  localStorage.setItem('paymentfromredeem',redeemPoint);
  localStorage.setItem('balancedueafterredeem',finalAmo);

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
        <form style={{marginLeft:'30px'}} >
          <div classNameName="loyal-user">
                <div classNameName="p-name" style={{marginTop: "26px", fontWeight: "bold"}}>
                    <label >Total Amount</label>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px', }}> <span>{totalamount}</span></div>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'350px', }}> <span>{"AED"}</span></div>
                </div>
                <div style={{position:"absolute",width: "450px",height: "-2px",left: "25px",top: "75px",border: "1px solid #333333"}}> </div>
                <div classNameName="p-name"style={{marginTop: "30px",fontWeight: "bold"}}><label>Tendered Reedem Amount</label>
               
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px', }}> <span>{redeemPoint }</span></div>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'350px', }}> <span>{"AED"}</span></div>
                </div>
                <div style={{position:"absolute",width: "450px",height: "-2px",left: "25px",top: "120px",border: "1px solid #333333"}}> </div>

                <div classNameName="p-name" style={{marginTop: "25px",fontWeight: "bold"}}><label >Balance Due :- </label>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px', }}> <span>{finalAmo }</span></div>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'350px', }}> <span>{"AED"}</span></div>
                {/* <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'300px', }}> <input type="number"  required style={{width:"100px" } }/></div> */}
                </div>
                <div style={{position:"absolute",width: "450px",height: "-2px",left: "25px",top: "171px",border: "1px solid #333333"}}> </div>
              
                {/* <div classNameName="p-name" style={{marginTop: "30px",fontWeight: "bold"}}><label >Enter Amount to Pay:- </label>
                <div style={{ position:'absolute' ,marginTop:'-24px',marginLeft:'290px'}} required> <input  style={{width:"150px", backgroundColor:"#F2F2F2" ,border:"none"}} type="number" />  </div>
                </div>
                <div style={{position:"absolute",width: "150px",height: "-2px",left: "320px",top: "212px",border: "1px solid #333333"}}> </div> */}
                <div classNameName="button-section">
                </div>
                <div classNameName="button-section">
          </div>
          </div>
            </form>
          <Button  type="submit" className="btn btn-secondary" data-dismiss="modal" style={{width:'110px', marginTop: "100px",marginLeft:"180px",marginBottom:"70px",color:'black',background:'none'}} ><a href="/credit" style={{textDecoration:'none'}}>Pay</a></Button>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default RedeemPoint;
