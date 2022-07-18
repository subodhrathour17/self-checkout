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
  const name=JSON.parse(localStorage.getItem('user')).userName;

  // Show/Hide PopUp
  const [show, setShow] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [showTill, setShowTill] = useState(false);
  const [showStore, setShowStore] = useState(false);
  const [showStoreClose, setShowStoreClose] = useState(false);
  const[showLogout , setShowLogout] = useState(false);
  

  // Buttons Disable/Enable

  // for Cashier Only
  const[isCashier , setIsCashier] = useState(false);
  // end Casshier button

  // For Manager Only
  const[isStoreOpen,setIsStoreOpen]=useState(false);
  const[isStoreCloseOpen,setIsStoreCloseOpen]=useState(false);
  const[registerEnable,setRegisterEnable]=useState(true);
  const[registerCloseEnable,setRegisterCloseEnable]=useState(true);

  useEffect(()=>{

    if(name==='Gaurav'){
     setIsCashier(true)
    }
    
 },[])
 


 useEffect(()=>{
  if(localStorage.getItem("store")===JSON.stringify('open')){
    setIsStoreOpen(true);
    setIsStoreCloseOpen(false);
  }
 },isStoreOpen)

 useEffect(()=>{
  
  if(localStorage.getItem("store")===JSON.stringify('close')){
    setIsStoreOpen(false);
    setIsStoreCloseOpen(true);
  
  }
 },isStoreCloseOpen)

  useEffect(()=>{
   if(localStorage.getItem("register")===JSON.stringify('open')){
    setRegisterEnable(true);
    setRegisterCloseEnable(false);
      
    }
  
  },registerEnable)

  useEffect(()=>{
   if(localStorage.getItem("register")===JSON.stringify('close')){
   setRegisterEnable(false);
   setRegisterCloseEnable(true);    
   }
  },registerCloseEnable)

   // store open
   const handleOpenStore = () => {
        
      localStorage.setItem("store",JSON.stringify('open'));
      setShowStore(true);
      setTimeout(()=>window.location.reload(true),1000) 

    }
  
  const handleCloseStore = () => {
    setShowStore(false);
  };

  // Store Close
  const handleOpenStoreClose = () => {
    if(localStorage.getItem("register")===JSON.stringify('close')){
    if(localStorage.getItem("store")===JSON.stringify('close')){
      setIsStoreOpen(false);
      setIsStoreCloseOpen(true);
    }else{ 
      localStorage.setItem("store",JSON.stringify('close'));
      setShowStoreClose(true);
      setTimeout(()=>window.location.reload(true),1000) 

    }
  }else{
    setIsStoreCloseOpen(true);
  }
  };
  const handleCloseStoreClose = () => {
    setShowStoreClose(false);
  };





  // register open
  const handleClose = () => {
       setShow(false);
  };
    const handleOpen = () => {
    if(localStorage.getItem("store")===JSON.stringify('open')){
    if(localStorage.getItem("register")===JSON.stringify('open')){
     setRegisterEnable(true);
    }else{

      localStorage.setItem("register",JSON.stringify('open'));
      setRegisterEnable(false);
      setShow(true);
      setTimeout(()=>window.location.reload(true),1000) 

    }
    }else{
    setRegisterEnable(true);
    }
        };
    // Register Close
  const regClose = () => {
    setShowClose(false);
  };
    const regOpen = () => {
      if(localStorage.getItem("till")===JSON.stringify("close")){
        if(localStorage.getItem("register")===JSON.stringify("close")){
          setRegisterCloseEnable(true);    
        }else{
          localStorage.setItem("register",JSON.stringify('close'));
          setShowClose(true);
          setTimeout(()=>window.location.reload(true),1000) 
        }
      }else{
        setRegisterCloseEnable(true);    
      }
    

    };

  // till
  const handleCloseTill = () => {
    setShowTill(false);
  };
    const handleOpenTill = () => {
    setShowTill(true);
  };

 
  // Logout
  const handleOpenLogout = () => {
    setShowLogout(true);
  };
  const handleCloseLogout = () => {
    setShowLogout(false);
  };


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
                <p style={{fontSize:"23px"}}>{name}</p>
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
                { !isCashier ? <div className="buttons pb-4" ><button type="button" className={ isStoreOpen ? 'disable-color' : 'enable-color' } id="openstore" onClick={handleOpenStore} disabled={isStoreOpen}> Start of Day </button></div> : '' } 

                <div className="buttons pb-4">
                  <button className={ registerEnable ? 'disable-color' : 'enable-color' } id="openregister" onClick={handleOpen} disabled={registerEnable}>
                    Register Open
                  </button>
                </div>

                <div className="buttons pb-4">
                  <button className={'enable-color'} onClick={handleOpenTill}>
                    Till Option
                  </button>
                </div>

                <div className="buttons pb-4">
                  <button type="button" className={ registerCloseEnable ? 'disable-color' : 'enable-color' }  id="closeregister" onClick={regOpen} disabled={registerCloseEnable}>Register Close</button>
                </div>
                <div className="buttons pb-4 ">
                  {!isCashier ?
                  <button type="button"  className={ isStoreCloseOpen ? 'disable-color' : 'enable-color' }  id="closestore" onClick={handleOpenStoreClose} disabled={isStoreCloseOpen}>End of Day</button>:''
                }
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
