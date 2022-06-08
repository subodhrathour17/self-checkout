import React from "react";
import { Link } from "react-router-dom";
import { BflGroupLogo, Cart, ClothStore, Logo } from "../../assets/images";
import "./index.scss";

const DropItems = () => {
  return (
    <>
      <section className="drop-item-main container-fluid">
        <div className="item-main">
          <div className="row">
            <div className="col-sm-8 bfl-main-logo">
              <img src={BflGroupLogo} alt="" className="img-fluid" />
            </div>
            <div className="col-sm-4">
              <div className="logo-main">
                <img src={Logo} alt="bfl logo" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="cart-main">
            <img src={Cart} alt="logo" className="img-fluid"/>
            </div>
            </div>
            <div className="col-sm-6">
              <div className="cloth-main">
            <Link to="/checkout"><img src={ClothStore} alt="cloth-main" className="img-fluid"  /></Link>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DropItems;
