import React, { Fragment } from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import logoBfl from "../../assets/images/main/bfl-group-logo.png";
import Ereceipt from '../../assets/images/transactions/E-receipt-512 1.png';
import Glasses from '../../assets/images/transactions/vr-glasses.png';
import Noreceipt from '../../assets/images/transactions/no-receipt 1.png';
import { Link } from "react-router-dom";

const Receipt = () => {
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
              <Link to="/rating">

                <div className="credit-cards">
                  <div className="payment-icons">
                  <img src={Ereceipt} alt="icon" className="img-fluid"/>
                  </div>
                  <h3>Digital Receipt</h3>
                </div>
              </Link>

              </div>
              <div className="col-md-4">
                <div className="credit-cards">
                  <div className="payment-icons">
                      <img src={Glasses} alt="icon" className="img-fluid"/>
                  </div>
                  <h3>Print Receipt</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="credit-cards">
                  <div className="payment-icons">
                  <img src={Noreceipt} alt="icon" className="img-fluid"/>
                  </div>
                  <h3>I Don’t want Receipt</h3>
                  <p>( Save Tree Save Life )</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="payment-deatil-box"></div>
      </Fragment>
    </>
  )
}

export default Receipt