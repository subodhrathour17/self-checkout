import React, { Fragment, useState, useEffect } from "react";
import Gift from "../assets/images/payment-mode/LoyaltyCustomer.png";
import Credit from "../assets/images/payment-mode/payment-main.png";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header.js";
import OtpVerification from "../popup/otp-verfication";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const PaymentDetails = () => {
  const [showOtpVerify, setOtpVerify] = useState(false);
  const { t } = useTranslation();

  const showOtp = () => {
    setOtpVerify(true);
  };
  const closeOtp = () => {
    setOtpVerify(false);
  };
   

  return (
    <>
      <Fragment>
        <div className="payment-nav ">
          <Header
            pageName={"payment-modes"}
            pageTitle={t("select-payment-mode")}
          />
        </div>
        <Sidebar />
        <section className="main-payment">
          <div className="payment-main">
            <div className="container"></div>
          </div>
          <div className="payment-detils">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-3">
                  <Link to="/payments/cards">
                    <div className="credit-cards">
                      <div className="payment-icons">
                        <img src={Credit} alt="icon" className="img-fluid" />
                      </div>
                      <h3>{t("credit-or-debit-card")}</h3>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <div className="credit-cards" onClick={showOtp}>
                    <div className="payment-icons">
                      <img src={Gift} alt="icon" className="img-fluid" />
                    </div>
                    <h3>{t("loyalty-customer")}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="payment-deatil-box"></div>
          <OtpVerification showOtp={showOtpVerify} closeOtp={closeOtp} />
        </section>
      </Fragment>
    </>
  );
};

export default PaymentDetails;
