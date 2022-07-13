import React, { useState, Fragment } from "react";
import { BflGroupLogo,Comp1,Girl,Logo,logoutpro2,Rectangle30,Vector6} from "../../assets/images";
import RegisterOpen from "../../popup/register-open";
import RegisterClose from "../../popup/register-close";
import Storeopen from "../../popup/Storeopen";
import TillOption from "../../popup/till-option";
import "./index.css";
import Storeclose from "../../popup/StoreClose";
import { useEffect } from "react";
import Logout from "../../popup/Logout";

const Register = () => {

  const [show, setShow] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [showTill, setShowTill] = useState(false);
  const [showStore, setShowStore] = useState(false);
  const [showStoreClose, setShowStoreClose] = useState(false);
  const[storeEnable , setStoreEnable] = useState(false);
  const[showLogout , setShowLogout] = useState(false);

  // register open
  const handleClose = () => {
       setShow(false);
  };
    const handleOpen = () => {
    if(localStorage.getItem("store")===JSON.stringify('open')){

      if(localStorage.getItem("register")===JSON.stringify('open')){
        alert("Register is Already Opened")
       }else{
         localStorage.setItem("register",JSON.stringify('open'));
         setShow(true);
       }
      }else{
        alert("Store  is Not Opened")
      }
    };
    // Register Close
  const regClose = () => {
    setShowClose(false);
  };
    const regOpen = () => {
    if(localStorage.getItem("till")===JSON.stringify('close')){
      if(localStorage.getItem("register")===JSON.stringify('close')){
        alert("Register is Already Closed")
       }else{
         localStorage.setItem("register",JSON.stringify('close'));
         setShowClose(true);

       }
      }else{
        alert("Please Close Till First");
      }
    };

  // till
  const handleCloseTill = () => {
    setShowTill(false);
  };
    const handleOpenTill = () => {
    setShowTill(true);
  };

  // store open
  const handleOpenStore = () => {
    if(localStorage.getItem("store")===JSON.stringify('open')){
     alert("Store is Already Opened")
    }else{

      localStorage.setItem("store",JSON.stringify('open'));
      setShowStore(true);
    }
  };
  const handleCloseStore = () => {
    setShowStore(false);
  };
  // Store Close
  const handleOpenStoreClose = () => {
    if(localStorage.getItem("register")===JSON.stringify('close')){
    if(localStorage.getItem("store")===JSON.stringify('close')){
      alert("Store is Already Closed")
     }else{
      localStorage.setItem("store",JSON.stringify('close'));
      setShowStoreClose(true);
     }
    }else{
      alert("Close The Register First");
    }
  };
  const handleCloseStoreClose = () => {
    setShowStoreClose(false);
  };

  // Logout
  const handleOpenLogout = () => {
    setShowLogout(true);
  };
  const handleCloseLogout = () => {
    setShowLogout(false);
  };
    const role=JSON.parse(localStorage.getItem('user')).userName;

    useEffect(()=>{

    console.log(role);
    if(role==='Gaurav'){
      console.log("i am in if condition")
      setStoreEnable(true);
      var d = document.getElementById("openstore");
        d.className += "disable-color";
      var d = document.getElementById("closestore");
        d.className += "disable-color";
      // document.getElementById('openstore').disabled=false;
    }
  },[])

  return (
    <Fragment>
      <section className="register">
        <div>
          <div className="row">
            <div className="col-sm-7">
              <div className="dflex justify-content-center align-items-center">
                <div className="rectangle">
                  <img
                    src={Rectangle30}
                    alt="Rectangle"
                    className="img-fluid position-relative"
                  />
                  <img src={Logo} alt="" className="img-fluid logo-image-sm"/>
                </div>
              </div>

              <div className="circle" style={{display:"flex"}}>
                <img src={Girl} alt="gril" className="img-fluid" style={{height:"90px",minWidth:"100px"}}/>
                <div style={{marginTop:"13px"}}>
                <p style={{fontSize:"25px",fontWeight:"bold"}}>{JSON.parse(localStorage.getItem('user')).userName}</p>
                <button style={{border:"none",background:"000"}} onClick={handleOpenLogout}><img src={logoutpro2} alt="downArrowForLogout" className="img-fluid" style={{height:"25px",marginTop:"-30px"}} /></button>
                </div>
              </div>

              <div className="main-img text-center d-flex">
                <img
                  src={Comp1}
                  alt="comp"
                  className="img-fluid"
                  id="computer"
                />
              </div>
            </div>

            <div className="col-sm-5">
              <div className="register-color">
                <div className="logo text-center">
                  <img src={BflGroupLogo} alt="logo" className="img-fluid" />
                </div>
                <div className="buttons pb-4">
                
                  <button type="button" className="color-btn" 
                  id="openstore" onClick={handleOpenStore} disabled={storeEnable}>
                    Start of Day
                    </button>
                </div>

                <div className="buttons pb-4">
                  <button className="color-btn text-light" onClick={handleOpen}>
                    Register Open
                  </button>
                </div>

                <div className="buttons pb-4">
                  <button className="color-btn text-light" onClick={handleOpenTill}>
                    Till Option
                  </button>
                </div>

                <div className="buttons pb-4">
                  <button className="color-btn text-light" onClick={regOpen}>Register Close</button>
                </div>
                <div className="buttons pb-4 ">
                  <button type="button" className="color-btn" id="closestore" onClick={handleOpenStoreClose}  disabled={storeEnable}>End of Day</button>
                </div>

                <div className="vector-img">
                  <img src={Vector6} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RegisterOpen show={show} handleClose={handleClose}/>
      <RegisterClose show={showClose} handleClose={regClose}/>
      <TillOption show={showTill} handleClose={handleCloseTill}/>
      <Storeopen show={showStore} handleClose={handleCloseStore}/>
      <Storeclose show={showStoreClose} handleClose={handleCloseStoreClose}/>
      <Logout show={showLogout} handleClose={handleCloseLogout}/>
    </Fragment>
  );
};

export default Register;
