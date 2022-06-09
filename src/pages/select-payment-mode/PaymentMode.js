import React, { Fragment } from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import logoBfl from "../../assets/images/main/bfl-group-logo.png";
import Gift from '../../assets/images/payment-mode/gift-card.png'
import Wallet from '../../assets/images/payment-mode/wallet-remove.png'
import Credit from '../../assets/images/payment-mode/payment-main.png'
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";

const PaymentDetails = () => {
  return (
    <>
      <Fragment>
        <div className="payment-nav ">
          <div className="container-fluid d-flex">
            <button type="button">
              <BsFillCaretLeftFill />
              Go Back
            </button>
            <h3>Select Payment Mode</h3>
            <img src={logoBfl} alt="logo-main" className="img-fluid" />
          </div>
        </div>
        <Sidebar/>
        <section className="main-payment">
        <div class="payment-main">
          <div className="container"></div>
        </div>

        <div className="payment-detils">
          <div className="container">
            <div className="row justify-content-center">
            
              <div className="col-md-3">
              <Link to="/payment">
                <div className="credit-cards">
                  <div className="payment-icons">
                  <img src={Credit} alt="icon" className="img-fluid"/>
                  </div>
                  <h3>Credit / Debit Card</h3>
                </div>
                </Link>
              </div>
            
              <div className="col-md-3">
              <Link to="/gift-voucher">
                <div className="credit-cards">
                  <div className="payment-icons">
                      <img src={Gift} alt="icon" className="img-fluid"/>
                  </div>
                  <h3>Gift/Voucher Card</h3>
                </div>
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="/digital-wallet">
                <div className="credit-cards">
                  <div className="payment-icons">
                  <img src={Wallet} alt="icon" className="img-fluid"/>
                  </div>
                  <h3>Digital Wallet</h3>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="payment-deatil-box"></div>
        </section>
        
      </Fragment>
    </>
  );
};

export default PaymentDetails;
