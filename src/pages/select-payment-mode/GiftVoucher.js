import React, { Fragment } from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import logoBfl from "../../assets/images/main/bfl-group-logo.png";
import Gift from "../../assets/images/payment-mode/gift-card.png";
import Arrow from "../../assets/images/gif/Arrow.gif";
import Swipe from "../../assets/images/gif/swipe.gif";
import Sidebar from "../../Sidebar/Sidebar";

const GiftVoucher = () => {
  const moveBack = () => {
    window.history.back()
  }
  return (
    <>
      <Fragment>
        <section className="payment-nav ">
          <div className="container-fluid d-flex">
            <button type="button"  onClick={() => moveBack()}>
              <BsFillCaretLeftFill />
              Go Back
            </button>
            <h3>Select Payment Mode</h3>
            <img src={logoBfl} alt="logo-main" className="img-fluid" />
          </div>
        </section>

        <Sidebar />
        <section className="main-payment">
        <div class="payment-main">
          <div className="container"></div>
        </div>

        <div className="payment-detils">
          <div className="container">
            <div className="payment-details-box d-flex">
              <div className="gift-icon">
                <img src={Gift} alt="cards" className="img-fluid" />
              </div>
              <img src={Arrow} alt="cards" className="img-fluid arrow-main" /> 
              <div className="scanner-box">
              <img src={Swipe} alt="cards" className="img-fluid" />
            </div>
            </div>
          </div>
        </div>

        <div className="payment-box-main"></div>
        </section>
      </Fragment>
    </>
  );
};

export default GiftVoucher;
