import React from "react";
import Logo from "../../assets/images/main/bfl-group-logo.png";
import Suntech from "../../assets/images/main/suntech-logo.png";
import Tshirt from "../../assets/images/remove/tshirt.png";
import Greenbutton from "../../assets/images/remove/buttongreen.png";
import Removetag from "../../assets/images/remove/remove-tag.png";
import { Link } from "react-router-dom";
import "./index.scss";
import Sidebar from "../../Sidebar/Sidebar";

const RemoveBox = () => {
  return (
    <>
      <div className="payment-nav-main d-flex">
        <img src={Suntech} alt="logo" className="img-fluid" />
        <h3>Remove Tag</h3>
        <img src={Logo} alt="logo" className="img-fluid" />
      </div>
      <Sidebar/>
      <section className="remove-main">
      <div className="main-bg">
      <div className="payment-sucess-main-box">
        <h3 className="security-tag">Please Remove the Security Tag</h3>
        <div className="product-detail">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="product-details-main">
                <div className="product-box d-flex">
                  <img src={Tshirt} alt="tshirt" className="img-fluid" />
                  <div className="product-box-details">
                    <h4>T-Shirt</h4>
                    <h5>Roadster</h5>
                    <p>Men White Pure Cotton T-shirt</p>
                  </div>
                  <Link to="/receipt"> <img  src={Greenbutton}  alt="tshirt" className="img-fluid red-button" /> </Link>
                </div>
                <div className="product-box d-flex">
                  <img src={Tshirt} alt="tshirt" className="img-fluid" />
                  <div className="product-box-details">
                    <h4>T-Shirt</h4>
                    <h5>Roadster</h5>
                    <p>Men White Pure Cotton T-shirt</p>
                  </div>
                  <Link to="/receipt"> <img  src={Greenbutton}  alt="tshirt" className="img-fluid red-button" /> </Link>
                </div>
                <div className="product-box d-flex">
                  <img src={Tshirt} alt="tshirt" className="img-fluid" />
                  <div className="product-box-details">
                    <h4>T-Shirt</h4>
                    <h5>Roadster</h5>
                    <p>Men White Pure Cotton T-shirt</p>
                  </div>
                  <Link to="/receipt"> <img  src={Greenbutton}  alt="tshirt" className="img-fluid red-button" /> </Link>
                </div>
                <div className="product-box d-flex">
                  <img src={Tshirt} alt="tshirt" className="img-fluid" />
                  <div className="product-box-details">
                    <h4>T-Shirt</h4>
                    <h5>Roadster</h5>
                    <p>Men White Pure Cotton T-shirt</p>
                  </div>
                  <Link to="/receipt"> <img  src={Greenbutton}  alt="tshirt" className="img-fluid red-button" /> </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-image-bg">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="product-main-image">
                        <div className="remove-main-image">
                          <img
                            src={Removetag}
                            alt="tshirt"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="product-main-image">
                        <div className="remove-main-image">
                          <img
                            src={Removetag}
                            alt="tshirt"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="product-main-image">
                        <div className="remove-main-image">
                          <img
                            src={Removetag}
                            alt="tshirt"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
    </>
  );
};

export default RemoveBox;
