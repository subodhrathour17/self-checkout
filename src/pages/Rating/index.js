import React, { Fragment } from "react";
import { BflGroupLogo, Logo } from "../../assets/images";
import GraySmily from "../../assets/images/main/gray-smily.png";
import GreenSmily from "../../assets/images/main/green-smily.png";
import "./index.scss";

const RecieptRating = () => {
  return (
    <Fragment>
      <section className="container-fluid">
        <div className="row hedaer-main">
          <div className="col-sm-4">
            <img src={Logo} alt="suntech logo" />
          </div>
          <div className="col-sm-4">
            <h4>Rate Your Experience</h4>
          </div>
          <div className="col-sm-4 bflgroup-logo">
            <img src={BflGroupLogo} alt="bfl group logo" />
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
