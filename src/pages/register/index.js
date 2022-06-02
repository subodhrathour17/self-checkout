import React, { useState, Fragment } from "react";
import {
  BflGroupLogo,
  Comp1,
  Girl,
  Logo,
  Rectangle30,
  Vector6
} from "../../assets/images";
import RegisterOpen from "../../popup/register-open";
import "./index.css";

const Register = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleOpen = () => {
    setShow(true);
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

              <div className="circle">
                <img src={Girl} alt="gril" className="img-fluid" />
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
                  <button className="color-btn text-light" onClick={handleOpen}>
                    Register Open
                  </button>
                </div>

                <div className="buttons pb-4">
                  <button>Till Open</button>
                </div>

                <div className="buttons pb-4">
                  <button>Till Close</button>
                </div>

                <div className="buttons pb-4">
                  <button>Register Close</button>
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
    </Fragment>
  );
};

export default Register;
