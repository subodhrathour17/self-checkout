import React, { Fragment } from "react";
import {
  ApplePay,
  Discover,
  DownArrow,
  GooglePay,
  Mastercard,
  Mechine,
  RightArrow,
  Visa,
} from "../../assets/images";
import "./index.scss";

const Transactions = () => {
  return (
    <Fragment>
      <section class="select-payment">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="payment">
                <div class="payment-service d-flex flex-column justify-content-center">
                  <img src={Visa} alt="visa" class="img-fluid pb-3 pt-3" />
                  <img src={Discover} alt="discover" class="img-fluid pb-3" />
                  <img src={Mastercard} alt="master" class="img-fluid pb-3" />
                  <img src={ApplePay} alt="apple" class="img-fluid pb-3" />
                  <img src={GooglePay} alt="gpay" class="img-fluid pb-3" />
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="arrow">
                <img src={RightArrow} alt="right-arrow" class="img-fluid" />
                <div class="down-arrow">
                  <img src={DownArrow} alt="down-arrow" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="right-image">
              <img src={Mechine} alt="data" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Transactions;
