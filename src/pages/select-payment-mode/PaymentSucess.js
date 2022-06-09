import React from "react";
import Logo from "../../assets/images/main/bfl-group-logo.png";
import Suntech from "../../assets/images/main/suntech-logo.png";
import Visa from "../../assets/images/transactions/visa-card.png";
import { TiTick } from "react-icons/ti";

import "./index.scss";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";

const PaymentSucess = () => {
  return (
    <>
      <div className="payment-nav d-flex">
        <img src={Suntech} alt="logo" className="img-fluid" />
        <h3>Payment Successful</h3>
        <img src={Logo} alt="logo" className="img-fluid" />
      </div>

      <Sidebar />
      <section className="main-payment-box">
      <div className="payment-sucess-main">
        <div className="sucess-box">
          <div className="row">
            <div className="col-md-4 sucess-details">
              <h3>Total Amount</h3>
            </div>
            <div className="col-md-4 sucess-details">
              <h3>AED</h3>
            </div>
            <div className="col-md-4 sucess-details">
              <h3>150.08</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 sucess-details">
              <p>Payment has been recived from:</p>
            </div>
            <div className="col-md-4 sucess-details">
              <img src={Visa} alt="visa" className="img-fluid" />
            </div>
            <div className="col-md-4 sucess-details"></div>
          </div>

          <div className="row">
            <div className="col-md-4 sucess-details">
              <h3>No: 5421********8574</h3>
            </div>
            <div className="col-md-4 sucess-details">
              <h3>AED</h3>
            </div>
            <div className="col-md-4 sucess-details">
              <h3>150.08</h3>
            </div>
          </div>
        </div>
        <div className="sucess-message">
          <Link to="/remove-tag">
            <div className="sucess-icon">
              <TiTick />
            </div>
          </Link>
          <h3>Your Payment was Successful</h3>
        </div>
      </div>
      </section>
    </>
  );
};

export default PaymentSucess;
