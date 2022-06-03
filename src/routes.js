import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Payment from "./pages/payment/payment";
import Recipt from "./pages/reciept/recipt";
import Register from "./pages/register";

const AppRoute = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/payment" element={<Payment/>} />
          <Route exact path="/recipt" element={<Recipt/>} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default AppRoute;
