import React, { Fragment } from 'react'
import {BflGroupLogo,
    GoBack,Status,Visa,Discover,MasterCard, 
    GiftCard, Wallet,Line,Number1,Line2,Number2 ,Number3,UpDesignImg,PayDownImg 
} from "../../assets/images";
import "./index.css";
const PaymentSuccess = () => {
  return (
    <Fragment>
      <section className="payment">
      <div className="pay-done">
         <h1 className='title-pay-done'>
             <span>Payment Successful</span>
         </h1>
         <hr />
         <StatusTick/>
         <img className='bgl-logo-pay-done' src={BflGroupLogo} alt="" />
         <img className='bgl-logo-pay-done-down-img' src={PayDownImg } alt="" />
        <div className='subtract'>
           <div className='total-amount'>Total Amount</div>
           <div className='AED'>AED</div>
           <div className='price'>150.08</div>
           
           <div className='Paymenthasbeenrecivedfrom'>Payment has been recived from:</div>
           <div className='visa-img-pay-done'> <img src={Visa} alt="" /></div>
           
           <div className='No'>No: 5421********8574</div>
           <div className='AED2'>AED</div>
           <div className='Final-price'>150.8</div>

         
        </div>
      </div>
      </section>
    </Fragment>
  )
}

export default PaymentSuccess
function StatusTick() {
    return (
      <div className="BackGround-pay">
      <div className="StatusTick-pay">
        <img className="vector-pay" src={Status} />
      </div>
      <div className="article-list-pay">
      <span>Article List</span>
      <img className="line-1-pay" src={Line} />;
    </div>
    <img className="number-1-pay" src={Status} />
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
    <div className="pay-list-pay">
      <span>Recipt</span>
    </div>
      
      </div> 
    );
  }