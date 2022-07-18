import React, { Fragment } from 'react'
import CreditDebitOpen from "../../popup/debitCredit"
import {BflGroupLogo,
    GoBack,Status,Visa,Discover,MasterCard, 
    GiftCard, Wallet,Line,Number1,Line2,Number2 ,Number3,UpDesignImg,PayDownImg, 
} from "../../assets/images";
import "./index.css";


const PaymentSuccess = () => {
 
  let totalAmo=localStorage.getItem("totalamount")
  let payableamt=localStorage.getItem("payable")
  let payableamt2=localStorage.getItem("payable2")
  let due=localStorage.getItem("dueamo")
  // if(payableamt2==0){
   
  // }
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
           <div className='price'>{payableamt}</div>
           
           <div>
           <div className='price2'>{payableamt2==0?'':payableamt2}</div>
           <div className='AED'>{payableamt2==0?'':"AED"}</div>
           {/* <div style={{marginLeft:"10px"}}>{payableamt2==0?'':"No:"}</div> */}
           </div>
           
           <div className='visa-img-pay-done'> <img src={localStorage.getItem('card1type')} alt={'visa'}/></div>
           
           
           <div className='No'>No:{localStorage.getItem('card1')}</div>
           
           <div className='No1'>{localStorage.getItem('card2')}</div>
           <div className='master-img-pay-done'> <img src={localStorage.getItem('card2ype')} /></div>

           <div className='AED2'>Blance Due</div>
           <div className='due-price'>{due}</div>
           <div className='AED1'>AED</div>
           <div className='success-dot'></div>
           <div className='Final-price'>{totalAmo}</div>
           <div className='Final-price-ade'>AED</div>
           <img className='check-mark-verified' src={Status}/>
        </div>
        <h3 className='YourPaymentwasSuccessful'>Your Payment was Successful</h3>
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
      <img className="line-2-pay" src={Line} />
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