import React, { Fragment } from "react";
import { BflGroupLogo, Logo } from "../../assets/images";
import GraySmily from "../../assets/images/main/gray-smily.png";
import GreenSmily from "../../assets/images/main/green-smily.png";
import "./index.scss";

const RecieptRating = () => {
  return (
    <Fragment>
      <section className="container-fluid">
      <div className="payment-nav ">
          <div className="container-fluid d-flex">
          <img src={Logo} alt="suntech logo" />
            <h3>Rate Your Experience</h3>
            <img src={BflGroupLogo} alt="logo-main" className="img-fluid" />
          </div>
        </div>
        <div className="main-section">
          <div className="feelings-contents">
            <h3>Happy with our Service?</h3>
            <div className="emogies-section">
              <img src={GreenSmily} alt="smily" className="m-4" />
              <img src={GraySmily} alt="smily" className="m-4" />
            </div>
            <h3>What did you like?</h3>
          </div>
          <div className="buttons-main">
            <button className="btn btn-light">Ambience</button>
            <button className="btn btn-light">Cost</button>
            <button className="btn btn-light">User Interface</button>
          </div>
          <div className="submit-field">
            <button className="btn btn-warning submit-button">Submit</button>
            <button className="btn btn-warning skip-button">Skip</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default RecieptRating;
