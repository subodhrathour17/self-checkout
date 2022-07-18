import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Credit from "./pages/creditcardpayment/credit";
import PaymentSuccess from "./pages/payment-success/payment-success";
import Payment from "./pages/payment/payment";
import Recipt from "./pages/reciept/recipt";
import PrintData from "./pages/print-data/printdata";

const AppRoute = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/payment" element={<Payment/>} />
          <Route exact path="/recipt" element={<Recipt/>} />
          <Route exact path="/paymentsuccess" element={<PaymentSuccess/>} />
          <Route exact path="/credit" element={<Credit/>} />
          <Route exact path="/printdata" element={<PrintData />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default AppRoute;
