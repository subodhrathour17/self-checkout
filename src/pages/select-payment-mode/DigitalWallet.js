import React, { Fragment } from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import logoBfl from "../../assets/images/main/bfl-group-logo.png";
import Phonepe from "../../assets/images/transactions/Phone pe.png";
import Paytm from "../../assets/images/transactions/Paytm.png";
import Amazon from "../../assets/images/transactions/Amazon Pay.png";
import Arrow from "../../assets/images/transactions/right-arrow.png";
import Scanner from "../../assets/images/transactions/Scanner.png";
import { Link } from "react-router-dom";

const DigitalWallet = () => {
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
              <div className="digital-wallet">
                <ul>
                  <li><input type="radio" name="check" />

                    <img src={Phonepe} alt="cards" className="img-fluid" />
                  </li>
                  <li> <input type="radio" name="check" />
                    <img src={Paytm} alt="cards" className="img-fluid" />
                  </li>
                  <li> <input type="radio" name="check" />
                    <img src={Amazon} alt="cards" className="img-fluid" />
                  </li>
                </ul>
              </div>
              <img src={Arrow} alt="cards" className="img-fluid" /> 
              <Link to="/sucessfull"><img src={Scanner} alt="cards" className="img-fluid sucessful-scan" /></Link>
            </div>
          </div>
        </section>

        <div className="payment-box"></div>
      </Fragment>
    </>
  );
};

export default DigitalWallet;
