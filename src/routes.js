import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Feedback from "./pages/feedback/Feedback";
import Securitytag from "./pages/security_tag/Securitytag";
import Securitysuccess from "./pages/security_tag/Securitysuccess";
import Addtocart from "./pages/addtocart/Addtocart";
import Home from "./pages/home/Home";

// import Payment from "./pages/payment/payment";
// import Credit from "./pages/creditcardpayment/credit";
// import DigitalWallet from "./pages/digitalwallet/digitalwallet";
// import Gift from "./pages/giftcard/gift";
// import PaymentSuccess from "./pages/payment-success/payment-success";
// import Recipt from "./pages/reciept/recipt";


const AppRoute = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/addtocart" element={<Addtocart />} />
          <Route exact path="/feedback" element={<Feedback />} />
          <Route exact path="/security" element={<Securitytag />} />
          <Route exact path="/securitysuccess" element={<Securitysuccess />} />
          
          {/* <Route exact path="/payment" element={<Payment/>} />
          <Route exact path="/recipt" element={<Recipt/>} />
          <Route exact path="/paymentsuccess" element={<PaymentSuccess/>} />
          <Route exact path="/credit" element={<Credit/>} />
          <Route exact path="/gift" element={<Gift/>} />
          <Route exact path="/digitalwallet" element={<DigitalWallet/>} /> */}
        </Routes>
      </Router>
    </Fragment>
  );
};

export default AppRoute;
