import React, { Fragment } from 'react'
import {BflGroupLogo,
    GoBack,Status,Visa,Discover,MasterCard, 
    GiftCard, Wallet,Line,Number1,Line2,Number2 ,Number3,UpDesignImg,
    PayDownImg,Down,AppleImg,GoogleImg,ArrowImg,CardMachine,GoButton,GiftMachine,ScanQr,Paytm,PhonePe,AmazonPay
} from "../../assets/images";
import "./index.css";
const DigitalWallet = () => {
  return (
    <Fragment>
    <section className="digit">
    <div className="digitalwallet">
        <button className='digit-card-button-g'><img className='' src={GoButton} alt="" /></button>
       <h1 className='digit-text-g-h1'>
           <span>Select Payment Mode</span>
       </h1>
       <hr />
       <StatusTick/>
       <img className='bgl-logo-digit-w' src={BflGroupLogo} alt="" />
       <img className='updesign-digit' src={UpDesignImg } alt="" />
       <img className='down-degin-digit-img-w' src={Down } alt="" />
       <div className='form-for-digit-w'> 
       <div className='digit-credit-w'><input className='radriobutton' type="radio" name='r'/><img className='' src={PhonePe } alt="" /></div>
       <div className='digit-credit-w'><input className='radriobutton' type="radio"name='r'/><img className='' src={Paytm } alt="" /></div>
       <div className='digit-credit-w'><input className='radriobutton' type="radio"name='r'/><img className='' src={AmazonPay } alt="" /></div>
       </div>
       <div className="arror-credit-card-digit"><img className='' src={ArrowImg } alt="" /></div>
       <div className="card-machine-img-digit"><img className='' src={ScanQr } alt="" /></div>
    </div>
    </section>
  </Fragment>
  )
}

export default DigitalWallet


function StatusTick() {
    return (
      <div className="BackGround-wallet">
      <div className="StatusTick-pay-wallet ">
        <img className="vector-pay-wallet " src={Status} />
      </div>
      <div className="article-list-pay-wallet">
      <span>Article List</span>
      <img className="line-1-pay-wallet" src={Line} />;
    </div>
    <img className="number-1-pay-wallet" src={Number1} />
    <div className="pay-list-pay-wallet">
      <span>Pay</span>
      <img className="line-2-pay-wallet" src={Line2} />
    </div>
    <img className="number-1-pay-wallet" src={Number2} />
    <div className="pay-list-pay-wallet ">
      <span className='remove-tag-pay-wallet'>Remove Tag</span>
      <img className="line-3-pay-wallet" src={Line2} />
    </div>
    <img className="number-1-pay-wallet" src={Number3} />
    <div className="pay-list-receipt-wallet">
      <span>Recipt</span>
    </div>
      
      </div> 
    );
  }