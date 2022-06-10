import React, { Fragment } from 'react'
import {BflGroupLogo,
    GoBack,Status,Visa,Discover,MasterCard, 
    GiftCard, Wallet,Line,Number1,Line2,Number2 ,Number3,UpDesignImg,
    PayDownImg,Down,AppleImg,GoogleImg,ArrowImg,CardMachine,GoButton
} from "../../assets/images";
import "./index.css";

const Credit = () => {
  return (
    <Fragment>
    <section className="credit">
    <div className="credit-c">
        <button className='credit-card-button'><img className='' src={GoButton} alt="" /></button>
       <h1 className='cresit-text-c'>
           <span>Select Payment Mode</span>
       </h1>
       <hr />
       <StatusTick/>
       <img className='bgl-logo-pay-done-c' src={BflGroupLogo} alt="" />
       <img className='updesign-c' src={UpDesignImg } alt="" />
       <img className='down-degin-credit-img' src={Down } alt="" />
       <div className='form-for-tender'> 
       <div className='visa-credit'><img className='' src={Visa } alt="" /></div>
       <div className='discover-credit'><img className='' src={Discover } alt="" /></div>
       <div className='master-credit'><img className='' src={MasterCard } alt="" /></div>
       <div className='apple-credit'><img className='' src={AppleImg } alt="" /></div>
       <div className='google-pay-credit'><img className='' src={GoogleImg } alt="" /></div>
       </div>
       <div className="arror-credit-card"><img className='' src={ArrowImg } alt="" /></div>
       <div className="card-machine-img"><img className='' src={CardMachine } alt="" /></div>
    </div>
    </section>
  </Fragment>
  )
}

export default Credit

function StatusTick() {
    return (
      <div className="BackGround-c">
      <div className="StatusTick-pay">
        <img className="vector-pay" src={Status} />
      </div>
      <div className="article-list-pay">
      <span>Article List</span>
      <img className="line-1-pay" src={Line} />;
    </div>
    <img className="number-1-pay" src={Number1} />
    <div className="pay-list-pay">
      <span>Pay</span>
      <img className="line-2-pay" src={Line2} />
    </div>
    <img className="number-1-pay" src={Number2} />
    <div className="pay-list-pay">
      <span className='remove-tag-pay'>Remove Tag</span>
      <img className="line-3-pay" src={Line2} />
    </div>
    <img className="number-1-pay" src={Number3} />
    <div className="pay-list-receipt">
      <span>Recipt</span>
    </div>
      
      </div> 
    );
  }