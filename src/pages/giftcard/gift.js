import React, { Fragment } from 'react'
import {BflGroupLogo,
    GoBack,Status,Visa,Discover,MasterCard, 
    GiftCard, Wallet,Line,Number1,Line2,Number2 ,Number3,UpDesignImg,
    PayDownImg,Down,AppleImg,GoogleImg,ArrowImg,CardMachine,GoButton,GiftMachine
} from "../../assets/images";
import "./index.css";

const Gift = () => {
  return (
    <Fragment>
    <section className="gift">
    <div className="gift-g">
    <a href='/payment' className='digit-card-button-g btn'><img className='' src={GoButton} alt="" /></a>
        
       <h1 className='gift-text-g-h1'>
           <span>Select Payment Mode</span>
       </h1>
       <hr />
       <StatusTick/>
       <img className='bgl-logo-gift-g' src={BflGroupLogo} alt="" />
       <img className='updesign-gift' src={UpDesignImg } alt="" />
       <img className='down-degin-gift-img-g' src={Down } alt="" />
       <div className='form-for-gift-g'> 
       <div className='gift-credit-g'><img className='' src={GiftCard } alt="" /></div>
       </div>
       <div className="arror-credit-card-g"><img className='' src={ArrowImg } alt="" /></div>
       <div className="card-machine-img-g"><img className='' src={GiftMachine } alt="" /></div>
    </div>
    </section>
  </Fragment>
  )
}

export default Gift

function StatusTick() {
    return (
      <div className="BackGround-g">
      <div className="StatusTick-pay-g ">
        <img className="vector-pay-g " src={Status} />
      </div>
      <div className="article-list-pay-g ">
      <span>Article List</span>
      <img className="line-1-pay-g " src={Line} />;
    </div>
    <img className="number-1-pay-g " src={Number1} />
    <div className="pay-list-pay-g ">
      <span>Pay</span>
      <img className="line-2-pay-g " src={Line2} />
    </div>
    <img className="number-1-pay-g " src={Number2} />
    <div className="pay-list-pay-g ">
      <span className='remove-tag-pay-g '>Remove Tag</span>
      <img className="line-3-pay-g " src={Line2} />
    </div>
    <img className="number-1-pay-g " src={Number3} />
    <div className="pay-list-receipt-g ">
      <span>Recipt</span>
    </div>
      
      </div> 
    );
  }