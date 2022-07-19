import React, { Fragment, useState } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import Otp from "../assets/images/payment-mode/otp.png";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../assets/images";
import Pay from "./Payment";
import { useTranslation } from 'react-i18next';

const Verification = ({ show, handleClose }) => {
  // const [showPay, setShowPay] = useState(false);
  const { t } = useTranslation();

  // const closePay = () => {
  //   setShowPay(false);
  // };


  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();


  const verifyOtp = async (e) => {
    e.preventDefault();
    setError(" Please Enter A Vaild OTP");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/drop-your-items");
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
        {/* <Form as={Row} className="mb-3 verify-main-box"
              onSubmit={verifyOtp}
              style={{ display: flag ? "block" : "none" }}
            >
              <Form.Group as={Row} className="mb-3 verify-main-box">
                <Form.Label column sm="12">
                  <img src={Otp} alt="opt" className="img-fluid" />
                </Form.Label>
                <Form.Label column sm="12" className="mt-4">
                  {t("otp-verification")}
                </Form.Label>
                <Form.Label column sm="12" className="mt-4">
                  {t("enter-otp")}
                </Form.Label>
                <Form.Label
                  column
                  sm="10"
                  className="mt-4 justify-content-center"
                >
                  <Form.Control
                    type="otp"
                    placeholder="Enter OTP"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </Form.Label>
                <p>
                  {t("otp-not-received")}
                  <Link to="#">
                    <b>{t("resend")}</b>
                  </Link>
                </p>
                <div className="button-section-main">
                  <Button type="submit" variant="primary">
                    Verify
                  </Button>
                </div>
              </Form.Group>
            </Form> */}
            <Form.Group as={Row} className="mb-3 verify-main-box"
              onSubmit={verifyOtp}
              >
            <Form.Label column sm="12">
              <img src={Otp} alt="opt" className="img-fluid" />
            </Form.Label>
            <Form.Label column sm="12" className="mt-4">
              {t("otp-verification")}
            </Form.Label>
            <Form.Label column sm="12" className="mt-4">
              {t("enter-otp")}
            </Form.Label>
            <div className="enter-otp">
              <Form.Label
                  column
                  sm="10"
                  className="mt-4 justify-content-center"
                >
                  <Form.Control
                    type="otp"
                    placeholder="Enter OTP"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </Form.Label>
            </div>
            <p>
              {t("otp-not-received")}{" "}
              <Link to="#">
                <b>{t("resend")}</b>
              </Link>
            </p>
            <div className="button-section-main">
                  <Button type="submit" variant="primary">
                    {t("submit")}
                  </Button>
                </div>
          </Form.Group>
        </Modal.Body>
      </Modal>
      {/* <Pay show={showPay} handleClose={closePay} /> */}
    </Fragment>
  );
};

export default Verification;
