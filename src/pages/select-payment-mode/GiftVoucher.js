import React, { Fragment } from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import logoBfl from "../../assets/images/main/bfl-group-logo.png";
import Gift from "../../assets/images/payment-mode/gift-card.png";
import Arrow from "../../assets/images/transactions/right-arrow.png";
import Swipe from "../../assets/images/transactions/swipe.png";

const GiftVoucher = () => {
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
            <div className="payment-details-box d-flex">
              <div className="gift-icon">
                <img src={Gift} alt="cards" className="img-fluid" />
              </div>
              <img src={Arrow} alt="cards" className="img-fluid" />
              <img src={Swipe} alt="cards" className="img-fluid" />
            </div>
          </div>
        </section>

        <div className="payment-box"></div>
      </Fragment>
    </>
  );
};

export default GiftVoucher;
