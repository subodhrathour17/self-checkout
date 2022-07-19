import React, { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Button, Modal, Image, Col, Row } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { Logo } from "../assets/images";
import { GoArrowRight } from "react-icons/go";
import Otp from "../assets/images/payment-mode/otp.png";

import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/UserAuthContext";
import { useTranslation } from "react-i18next";
import Verification from "./Verification";


const PhoneSignUp = ({ MobileNumber, closeVerification }) => {
  const { t } = useTranslation();

  const [showVerification, setShowVerification] = useState(false);

  const closeOtpVerification = () => {
    setShowVerification(false);
  }

  const notificationHanler = () => {
    setShowVerification(true);
  }

  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  // const verifyOtp = async (e) => {
  //   e.preventDefault();
  //   setError(" Please Enter A Vaild OTP");
  //   if (otp === "" || otp === null) return;
  //   try {
  //     await result.confirm(otp);
  //     navigate("/drop-your-items");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  return (
    <>
      <Fragment>
        <Modal show={MobileNumber} onHide={closeOtpVerification}>
          <Modal.Header closeButton>
            <Image src={Logo} alt="suntech-logo" />
          </Modal.Header>
          <Modal.Body>
            <div className="">
              <p className="mobile-number">
                if you are loyalty customer, Please enter your Mobile number
                otherwise press SKIP.
              </p>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form
              onSubmit={getOtp}
              style={{ display: !flag ? "block" : "none" }}
            >
              <Form.Group
                className="mb-3 mobile-number"
                controlId="formBasicEmail"
              >
                <PhoneInput
                  defaultCountry="IN"
                  value={number}
                  onChange={setNumber}
                  placeholder="Enter Phone Number"
                />
                <div id="recaptcha-container"></div>
              </Form.Group>
              <div className="button-right">
                &nbsp;
                <Button type="submit" variant="primary" onClick={() => notificationHanler(showVerification)}>
                  Continue
                  <GoArrowRight />
                </Button>
                <Link to="/drop-your-items">
                  <Button variant="secondary">Skip</Button>
                </Link>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
        
      <Verification show={showVerification} handleClose={closeOtpVerification} /> 
      </Fragment>
    </>
  );
};

export default PhoneSignUp;
