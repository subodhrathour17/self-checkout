import React, { Fragment } from "react";
import {BsFillCaretLeftFill} from 'react-icons/bs';
import logoBfl from '../../assets/images/main/bfl-group-logo.png';
import Cards from '../../assets/images/transactions/cards.png'
import Arrow from "../../assets/images/gif/Arrow.gif";
import Machine from "../../assets/images/gif/Machine.gif";



import "./index.scss";
import Sidebar from "../../Sidebar/Sidebar";

const PaymentMode = () => {
  const moveBack = () => {
    window.history.back()
  }
  return (
    <Fragment>

      <section className="payment-nav ">
        <div className="container-fluid d-flex">
        <button type="button" onClick={() => moveBack()}><BsFillCaretLeftFill/>Go Back</button>
        <h3>Select Payment Mode</h3>
        <img src={logoBfl} alt="logo-main" className="img-fluid"/>
        </div>
      </section>

      <Sidebar />
      <section className="main-payment">

      <div className="payment-main">
        <div className="container">
          </div>
      </div>

      <div  className="payment-detils">
        <div className="container">
          <div className="payment-details-box d-flex">
            <img src={Cards} alt="cards" className="img-fluid"/>
            <img src={Arrow} alt="cards" className="img-fluid arrow-main" /> 
            <div className="scanner-box">
            <img src={Machine} alt="cards" className="img-fluid scanner-main"/>
            </div>


          </div>
        </div>
      </div>
      
      <div className="payment-box-main"></div>
      </section>
    </Fragment>
  );
};

export default PaymentMode;
