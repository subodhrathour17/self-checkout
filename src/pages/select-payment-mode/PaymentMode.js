import React, { Fragment } from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import logoBfl from "../../assets/images/main/bfl-group-logo.png";
import Gift from '../../assets/images/payment-mode/gift-card.png'
import Wallet from '../../assets/images/payment-mode/wallet-remove.png'
import Credit from '../../assets/images/payment-mode/payment-main.png'
import { Link } from "react-router-dom";

const PaymentDetails = () => {
  return (
    <>
      <Fragment>
        <section className="payment-nav ">
          <div className="container-fluid d-flex">
            <button type="button">
              <BsFillCaretLeftFill />
              Go Back
            </button>
            <h3>Select Payment Mode</h3>
            <img src={logoBfl} alt="logo-main" className="img-fluid" />
          </div>
        </section>

        <section class="payment-main">
          <div className="container"></div>
        </section>

        <section className="payment-detils">
          <div className="container">
            <div className="row">
            
              <div className="col-md-4">
              <Link to="/payment">
                <div className="credit-cards">
                  <div className="payment-icons">
                  <img src={Credit} alt="icon" className="img-fluid"/>
                  </div>
                  <h3>Credit / Debit Card</h3>
                </div>
                </Link>
              </div>
            
              <div className="col-md-4">
              <Link to="/gift-voucher">
                <div className="credit-cards">
                  <div className="payment-icons">
                      <img src={Gift} alt="icon" className="img-fluid"/>
                  </div>
                  <h3>Gift/Voucher Card</h3>
                </div>
                </Link>
              </div>
              <div className="col-md-4">
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
        </section>

        <div className="payment-deatil-box"></div>
      </Fragment>
    </>
  );
};

export default PaymentDetails;
