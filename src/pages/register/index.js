import React, { useState } from "react";
import {
  Rectangle30,
  BflGroupLogo,
  Girl,
  Logo,
  Vector6,
  Young,
} from "../../assets/images";
import Computer from "../../assets/images/gif/computer.gif";
import { BsFillCaretDownFill } from "react-icons/bs";
import RegisterOpen from '../../popup/register-open';
import "./index.scss";
import {Link} from "react-router-dom"

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
  }
  return (
    <>
      <section className="register">
        <div className="row g-0">
          <div className="col-lg-8">
            <div className="register-main">
              <div className="register-image d-flex">
                <img
                  src={Rectangle30}
                  alt="Rectangle"
                  className="img-fluid bg-main"
                />
                <img src={Girl} alt="girl" className="img-fluid logo-girl" />
                <BsFillCaretDownFill />
                <img src={Logo} alt="" className="img-fluid logo-main" />
              </div>
              <div className="scanner-main d-flex">
                <img src={Young} alt="young" className="img-fluid young-main" />
                <img
                  src={Computer}
                  alt="scaner"
                  className="img-fluid scanner"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="register-box">
              <img
                src={BflGroupLogo}
                alt="logo"
                className="img-fluid bfl-logo"
              />
              <div className="register-box-buttons">
                <button type="button" className="register-open" onClick={() => setShow(true)}>Register Open</button>
                <button type="button">Till Open</button>
                <Link to="/till">
                <button type="button">Till Close</button>
                </Link>
                <button type="button">Register Close</button>
              </div>
              <img
                src={Vector6}
                alt="vector"
                className="img-fluid vector-main"
              />
            </div>
          </div>
        </div>
      </section>
      <RegisterOpen show={show} handleClose={handleClose} />
    </>
  );
};

export default Register;
