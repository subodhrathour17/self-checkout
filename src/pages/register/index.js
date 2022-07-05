import React, { useState, Fragment } from "react";
import { BflGroupLogo,Comp1,Girl,Logo,Rectangle30,Vector6} from "../../assets/images";
import RegisterOpen from "../../popup/register-open";
import RegisterClose from "../../popup/register-close";
import Storeopen from "../../popup/Storeopen";
import TillOption from "../../popup/till-option";
import "./index.css";
import Storeclose from "../../popup/StoreClose";

const Register = () => {
  const [show, setShow] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [showTill, setShowTill] = useState(false);
  const [showStore, setShowStore] = useState(false);
  const [showStoreClose, setShowStoreClose] = useState(false);

  // register
  const handleClose = () => {
    setShow(false);
  };
    const handleOpen = () => {
      setShow(true);
    };
  const regClose = () => {
    setShowClose(false);
  };
    const regOpen = () => {
      setShowClose(true);
    };

  // till
  const handleCloseTill = () => {
    setShowTill(false);
  };
    const handleOpenTill = () => {
    setShowTill(true);
  };

  // store
  const handleOpenStore = () => {
    setShowStore(true);
  };
  const handleCloseStore = () => {
    setShowStore(false);
  };
  const handleOpenStoreClose = () => {
    setShowStoreClose(true);
  };
  const handleCloseStoreClose = () => {
    setShowStoreClose(false);
  };
    const role=JSON.parse(localStorage.getItem('user')).user.userName;
    // if(role=='kunal'){
    //   document.getElementById('openstore').disabled=false;
    // }
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

              <div className="circle">
                <img src={Girl} alt="gril" className="img-fluid" />
                <span>{JSON.parse(localStorage.getItem('user')).user.userName}</span>
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
                
                  <button className="color-btn text-light" onClick={handleOpenStore}>
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
                  <button className="color-btn text-light" onClick={handleOpenStoreClose}>End of Day</button>
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
    </Fragment>
  );
};

export default Register;
