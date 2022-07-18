import React, { Fragment,useState } from "react";
import { Modal, Image, Form, Col, Row } from "react-bootstrap";
import { Logo } from "../assets/images";
import "./index.css";
import TillOpen from "../popup/till-open";
import TillClose from "./till-close";
import { useEffect } from "react";

const TillOption = ({ show, handleClose }) => {
  const [tillShow, setTillShow] = useState(false);
  const [tillCloseShow, setTillCloseShow] = useState(false);

  // Buttons Enable/Disable

  const[tillEnable,setTillEnable]=useState(false);
  const[tillCloseEnable,setTillCloseEnable]=useState(false);

  useEffect(()=>{
    // if(localStorage.getItem("till")===JSON.stringify('open')){
    //   setTillEnable(true)

    //  }
    if(localStorage.getItem("register")===JSON.stringify('open')){
      if(localStorage.getItem("till")===JSON.stringify('open')){
        setTillEnable(true)
       }
      }else{
        setTillEnable(true)

      }
  },[])
  useEffect(()=>{
    if(localStorage.getItem("till")===JSON.stringify('close')){
      setTillCloseEnable(true)

     }
  },[])
  
  const showTill = () => {
    if(localStorage.getItem("register")===JSON.stringify('open')){
      if(localStorage.getItem("till")===JSON.stringify('open')){
        setTillEnable(true)
        setTimeout(()=>window.location.reload(true),100) 

       }else{
         setTillShow(true);
       }
      }else{
        setTillEnable(true)
        setTimeout(()=>window.location.reload(true),1000) 

      }
  };
  const closeTill = () => {
    setTillShow(false);
  };
  const showTillClose = () => {
    if(localStorage.getItem("till")===JSON.stringify('close')){
      setTillCloseEnable(true)
      setTimeout(()=>window.location.reload(true),200) 

     }else{
       setTillCloseShow(true);
     }
  };
  const closeTillClose = () => {
    setTillCloseShow(false);
  };


  // Validation on Buttons
  
  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          {/* <div className="register-heading">
            <p>Till Option</p>
          </div> */}
          <Form.Group as={Row} className="mb-3 register-main">
           
            <Col sm="12">
            <div className="buttons pb-4">
                  <button className={ tillEnable ? 'disable-color' : 'enable-color' } id="opentill" onClick={showTill} disabled={tillEnable}>Till Open</button>
                </div>
            <div className="buttons pb-4">
                  <button className={ tillCloseEnable ? 'disable-color' : 'enable-color' } id="closetill" onClick={showTillClose} disabled={tillCloseEnable}>Till Close</button>
                </div>
            <div className="buttons pb-4">
                  <button className={"color-btn text-light"}>Till Reconcile</button>
                </div>
            </Col>
          </Form.Group>
          <div className="button-section">
         
          </div>
        </Modal.Body>
      </Modal>
      <TillOpen tillShow={tillShow} closeTill={closeTill} />
      <TillClose tillShow={tillCloseShow} closeTill={closeTillClose} />

    </Fragment>
  );
};

export default TillOption;
