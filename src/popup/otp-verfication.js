import React, { Fragment, useState } from "react";
import { Button, Modal, Image, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Logo } from "../assets/images";
import Verification from "./Verification";
import Gold from "../assets/images/payment-mode/gold.png"
import { useTranslation } from 'react-i18next';

const OtpVerification = ({showOtp, closeOtp}) => {
  const [showVerification, setShowVerification] = useState(false);
  const { t } = useTranslation();

  const closeVerification = () => {
    setShowVerification(false);
  }

  const notificationHanler = () => {
    setShowVerification(true);
  }
  
  return (
    <Fragment>
      <Modal show={showOtp} onHide={closeOtp}>
      <Modal.Header closeButton>
          <Image src={Logo} alt="suntech-logo" />
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3 otp-main-box">
            <Form.Label column md="6">
            {t("name")}
            </Form.Label>
            <Col md="6" className="mt-4">
              <Form.Control type="number" placeholder={"Benjamin (" + t("active") + ")"} /> 
            </Col>     
            <Form.Label column md="6" className="mt-4">
            {t("membership-type")}
            </Form.Label>
            <Col md="6" className="mt-4">
              <div className="gold d-flex">
              <img src={Gold} alt="opt" className="img-fluid"/>
              <p>{t("gold")}</p>
              </div>
            
            </Col>
            <Form.Label column md="6" className="mt-4">
            {t("accumulated-points")}
            </Form.Label>
            <Col md="6" className="mt-4">
              <Form.Control type="text" placeholder="250" />
            </Col>
            <Form.Label column md="6" className="mt-4">
            {t("accumulated-points")}
            </Form.Label>
            <Col md="6" className="mt-4">
              <Form.Control type="text" placeholder={t ("100-aed")} />
            </Col>
            <Form.Label column md="6" className="mt-4">
            {t("accumulated-points")}
            </Form.Label>
            <Col md="6" className="mt-4">
              <Form.Control type="text" placeholder=""  required/>
            </Col>
            <p>{t("redeem-points")}</p>
          </Form.Group>
          <div className="button-section-main">
           <Button variant="warning" onClick={() => notificationHanler(showVerification)}>
              {t("yes")}
            </Button>
            <Link to="/payments">
           <Button variant="warning" >
              {t("no")}
            </Button></Link>
          </div>
        </Modal.Body>
      </Modal>
      
      <Verification show={showVerification} handleClose={closeVerification} /> 
    </Fragment>
  );
};

export default OtpVerification;
