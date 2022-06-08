import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome/Welcome.js';
import Login from "./pages/login";
import Register from "./pages/register";
import Checkout from "./pages/checkout";
import DropItems from "./pages/drop-your-item";
import PaymentMode from "./pages/select-payment-mode/index.js";
import PaymentDetails from "./pages/select-payment-mode/PaymentMode.js";
import GiftVoucher from "./pages/select-payment-mode/GiftVoucher.js";
import DigitalWallet from "./pages/select-payment-mode/DigitalWallet.js";
import Receipt from "./pages/select-payment-mode/Receipt.js";
import PaymentSucess from "./pages/select-payment-mode/PaymentSucess.js";
import RemoveTag from "./pages/Remove-tag/index.js";
import RemoveBox from "./pages/Remove-tag/Remove.js";
import RecieptRating from "./pages/Rating/index.js";


const AppRoute = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/drop-you-items" element={<DropItems />} />
          <Route exact path="/payment" element={<PaymentMode />} />
          <Route exact path="/payment-details" element={<PaymentDetails />} />
          <Route exact path="/gift-voucher" element={<GiftVoucher />} />
          <Route exact path="/digital-Wallet" element={<DigitalWallet />} />
          <Route exact path="/receipt" element={<Receipt />} />
          <Route exact path="/sucessfull" element={<PaymentSucess/>}/>
          <Route exact path="/remove-tag" element={<RemoveTag/>}/>
          <Route exact path="/remove-green" element={<RemoveBox/>}/>
          <Route exact path="/rating" element={<RecieptRating/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
};

export default AppRoute;
