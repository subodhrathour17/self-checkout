import React, { Fragment } from "react";
import {
  Logo,
  BflGroupLogo,
  Tshirt,
  Jeans,
  TrackPants,
  Barakath,
  VisaCard,
  Mastercard,
  WalletRemovebg,
  GiftCard,
  ApplePay,
  GooglePay,
  CashPayment,
  DiscoverCard,
} from "../../assets/images";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import "./index.scss";

const Checkout = () => {
  return (
    <Fragment>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col text-left">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="col text-center">
              <h1>Shopping Cart</h1>
            </div>
            <div className="col text-right">
              <img src={BflGroupLogo} alt="Logo" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container-fluid">
          <div className="row article-list-nav">
            <div className="col-12 text-center bg-dark">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                  <div className="row">
                    <div className="col-4">Product</div>
                    <div className="col-2">Price</div>
                    <div className="col-1 offset-1">Discount</div>
                    <div className="col-1 offset-1">Total</div>
                    <div className="col-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
              <Sidebar />
            <div className="col-12 col-md-10 article-list-wrapper">
              <div className="content-section">
                <div className="row product-list-main">
                  <div className="col-12 col-md-4 product-list">
                    <div className="row">
                      <div className="col-4 product-image">
                        <img src={Tshirt} alt="T-shirt" />
                      </div>
                      <div className="col-8 product-info">
                        <h5>
                          <strong>T-Shirt</strong>
                        </h5>
                        <div className="brand-name">Roadster</div>
                        <div className="product-full-name">
                          Men White Pure Cotton T-shirt
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 col-md-2 text-center my-auto price">
                    <strong>AED 62.00</strong>
                  </div>
                  <div className="col-3 col-md-1 offset-md-1 text-center my-auto discount">
                    <strong>10 %</strong>
                  </div>
                  <div className="col-3 col-md-1 offset-md-1 text-center my-auto total">
                    55.8
                  </div>
                  <div className="col-3 col-md-2 text-right my-auto remove">
                    <button>remove</button>
                  </div>
                </div>
                <div className="row product-list-main">
                  <div className="col-12 col-md-4 product-list">
                    <div className="row">
                      <div className="col-4 product-image">
                        <img src={Jeans} alt="Jeans" />
                      </div>
                      <div className="col-8 product-info">
                        <h5>
                          <strong>Jeans</strong>
                        </h5>
                        <div className="brand-name">Calvin Klein Jeans</div>
                        <div className="product-full-name">
                          Men Blue Skinny Fit Heavy Streachable Jeans
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 col-md-2 text-center my-auto price">
                    <strong>AED 100</strong>
                  </div>
                  <div className="col-3 col-md-1 offset-md-1 text-center my-auto discount">
                    <strong>20 %</strong>
                  </div>
                  <div className="col-3 col-md-1 offset-md-1 text-center my-auto total">
                    150
                  </div>
                  <div className="col-3 col-md-2 text-right my-auto remove">
                    <button>remove</button>
                  </div>
                </div>
                <div className="row product-list-main">
                  <div className="col-12 col-md-4 product-list">
                    <div className="row">
                      <div className="col-4 product-image">
                        <img src={TrackPants} alt="Trackpants" />
                      </div>
                      <div className="col-8 product-info">
                        <h5>
                          <strong>Trackpants</strong>
                        </h5>
                        <div className="brand-name">ENDEAVOUR</div>
                        <div className="product-full-name">
                          Men White Pure Cotton T-shirt
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 col-md-2 text-center my-auto price">
                    <strong>AED 200</strong>
                  </div>
                  <div className="col-3 col-md-1 offset-md-1 text-center my-auto discount">
                    <strong>25 %</strong>
                  </div>
                  <div className="col-3 col-md-1 offset-md-1 text-center my-auto total">
                    150
                  </div>
                  <div className="col-3 col-md-2 text-right my-auto remove">
                    <button>remove</button>
                  </div>
                </div>
                <div className="row product-list-main">
                  <div className="col-12 col-md-4 product-list">
                    <div className="row">
                      <div className="col-4 product-image">
                        <img src={Barakath} alt="Barakath" />
                      </div>
                      <div className="col-8 product-info">
                        <h5>
                          <strong>Barakath</strong>
                        </h5>
                        <div className="brand-name">Barakath Dubai</div>
                        <div className="product-full-name">
                          Women Barakath Dubai
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 col-md-2 text-center my-auto price">
                    <strong>AED 160</strong>
                  </div>
                  <div className="col-3 col-md-1 offset-md-1 text-center my-auto discount">
                    <strong>10 %</strong>
                  </div>
                  <div className="col-3 col-md-1 offset-md-1 text-center my-auto total">
                    144
                  </div>
                  <div className="col-3 col-md-2 text-right my-auto remove">
                    <button>remove</button>
                  </div>
                </div>
                <div className="fixed-bottom">
                  <div className="col-12">
                    <div className="row g-0">
                      <div className="col-5 card-images">
                        <img src={VisaCard} alt="Visa card" />
                        <img src={Mastercard} alt="Master card" />
                        <img src={DiscoverCard} alt="Discover card" />
                        <img src={WalletRemovebg} alt="Wallet" />
                        <img src={GiftCard} alt="Gift card" />
                        <img src={ApplePay} alt="Apple Pay" />
                        <img src={GooglePay} alt="Google Pay" />
                      </div>
                      <div className="col-3 text-center grand-total">
                        Total AED <span>150.8</span>
                      </div>
                      <div className="col-4 text-right action-button">
                        <button>Cancel</button>
                        <button>
                          <img src={CashPayment} alt="Cash" width="20px" /><Link to="/payment-details">Pay</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Checkout;
