import React, { Fragment } from "react";
import { BsFillCaretLeftFill } from "react-icons/bs";
import logoBfl from "../../assets/images/main/bfl-group-logo.png";
import Phonepe from "../../assets/images/transactions/Phone pe.png";
import Paytm from "../../assets/images/transactions/Paytm.png";
import Amazon from "../../assets/images/transactions/Amazon Pay.png";
import Arrow from "../../assets/images/gif/Arrow.gif";
import Scanner from "../../assets/images/gif/Scanner.gif";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";

const DigitalWallet = () => {
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
        <scetion className="main-payment">
        <div class="payment-main">
          <div className="container"></div>
        </div>

        <div className="payment-detils">
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
              <img src={Arrow} alt="cards" className="img-fluid arrow-main" /> 
              <div className="scanner-box">
              <Link to="/sucessfull"><img src={Scanner} alt="cards" className="img-fluid sucessful-scan" /></Link>
            </div>
            </div>
          </div>
        </div>

        <div className="payment-box-main-wallet"></div>
        </scetion>
        
      </Fragment>
    </>
  );
};

export default DigitalWallet;
