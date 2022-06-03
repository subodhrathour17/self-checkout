import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Feedback from "./pages/feedback/Feedback";
const AppRoute = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default AppRoute;
