import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Credit from "./pages/creditcardpayment/credit";
import DigitalWallet from "./pages/digitalwallet/digitalwallet";
import Gift from "./pages/giftcard/gift";
import Home from "./pages/home/home";
import Login from "./pages/login";
import PaymentSuccess from "./pages/payment-success/payment-success";
import Payment from "./pages/payment/payment";
import Recipt from "./pages/reciept/recipt";
import Register from "./pages/register";
// import PaymentSuccess from "./pages/payment-success"

const AppRoute = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/payment" element={<Payment/>} />
          <Route exact path="/recipt" element={<Recipt/>} />
          <Route exact path="/paymentsuccess" element={<PaymentSuccess/>} />
          <Route exact path="/credit" element={<Credit/>} />
          <Route exact path="/gift" element={<Gift/>} />
          <Route exact path="/digitalwallet" element={<DigitalWallet/>} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default AppRoute;
