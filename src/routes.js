import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Feedback from "./pages/feedback/Feedback";
import Securitytag from "./pages/security_tag/Securitytag";
import Securitysuccess from "./pages/security_tag/Securitysuccess";
const AppRoute = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/feedback" element={<Feedback />} />
          <Route exact path="/security" element={<Securitytag />} />
          <Route exact path="/securitysuccess" element={<Securitysuccess />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default AppRoute;
