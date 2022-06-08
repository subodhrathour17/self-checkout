import React, { Fragment } from "react";
import {BsFillCaretLeftFill} from 'react-icons/bs';
import logoBfl from '../../assets/images/main/bfl-group-logo.png';
import Cards from '../../assets/images/transactions/cards.png'
import Arrow from '../../assets/images/transactions/right-arrow.png'
import Machine from '../../assets/images/transactions/atm-mechine.png'


import "./index.scss";

const PaymentMode = () => {
  return (
    <Fragment>

      <section className="payment-nav ">
        <div className="container-fluid d-flex">
        <button type="button"><BsFillCaretLeftFill/>Go Back</button>
        <h3>Select Payment Mode</h3>
        <img src={logoBfl} alt="logo-main" className="img-fluid"/>
        </div>
      </section>


      <section class="payment-main">
        <div className="container">
          </div>
      </section>

      <section className="payment-detils">
        <div className="container">
          <div className="payment-details-box d-flex">
            <img src={Cards} alt="cards" className="img-fluid"/>
            <img src={Arrow} alt="cards" className="img-fluid"/>
            <img src={Machine} alt="cards" className="img-fluid"/>


          </div>
        </div>
      </section>
      
      <div className="payment-box"></div>
    </Fragment>
  );
};

export default PaymentMode;
