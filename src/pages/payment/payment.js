import React ,{ Fragment, useState} from 'react'
import {BflGroupLogo,
    GoBack,Status,MaskGroup,Down,Visa,Discover,MasterCard, GiftCard, Wallet,
    Line,Number1,Line2,Number2 ,Number3,UpDesignImg,LoyalCustomer
} from "../../assets/images";
import "./index.css";
import LoyalReceiptOpen from '../../popup/loyal'
const Payment = () => {
  return (
    <Fragment>
      <section className="payment">
      <div className="gobutton-btn text-left pt-10 ">
        <button className='go-btn  login-color'  type="submit"><img src={GoBack} alt="vector" className="img-goback" /></button>
        <Paytext1 />
        <StatusTick/>
        <Cards/>
        
      </div>
      </section>
    </Fragment>
  )
}

export default Payment

function Paytext1() {
    return (
      <div className="Paytext1 Paytext-M-text Paytext-s-scr-text bfl-logo-m-pa bfl-logo-s-pa">
        <h1 className="title Paytext-full-text  Paytext-s-text">
          <span className='pa-tex-sc'>Select Payment Mode</span>
        </h1>
        <img className="bfl-logo bfl-logo-full bfl-logo-m bfl-lo-sc" src={BflGroupLogo} />
        <UpDesign/>
        
      </div>
    );
  }
  function StatusTick() {
    return (
      <div className="BackGround BackGround-p">
      <div className="StatusTick">
        <img className="vector" src={Status} />
      </div>
      <div className="article-list">
      <span>Article List</span>
      <img className="line-1" src={Line} />;
    </div>
    <img className="number-1" src={Number1} />
    <div className="pay-list">
      <span>Pay</span>
      <img className="line-2" src={Line2} />
    </div>
    <img className="number-1" src={Number2} />
    <div className="pay-list">
      <span className='remove-tag'>Remove Tag</span>
      <img className="line-3" src={Line2} />
    </div>
    <img className="number-1" src={Number3} />
    <div className="pay-list">
      <span>Recipt</span>
    </div>
      <DownDesign/>
      </div> 
    );
  }
  function UpDesign() {
    return (
      <div className=" back-design-pyment back-design-m-screen  back-design-main form-backsmall-p background-img-s">
        <img className='top-image top-img-s bi-im-s' src={UpDesignImg} />
        
      </div>
    );
  }
  function DownDesign() {
    return (
    <div className="downdesign">
    <img className="down-design " src={Down}/>
    
    </div>
    
    );
  }
 
  const Cards = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
    };
  
    const handleOpen = () => {
      setShow(true);
    };
    
    return (
      <div className='cardmain cardmain-payment card-full card-m card-m-pay card-s'>
    <div className="form-back form-full form-m form-m-cd-text form-s-p" >
    <a href='/credit'>    <h1 className='tex-h1 text-s-h1'>Credit / Debit Card</h1></a>
      <div className="card-design-all card-design-all-full card-design-all-m  card-design-all-s">
      <img
        className="card-visa"
        src={Visa}
        />
      <div className="flex-row">
        <img
          className="card-discover"
          src={Discover}
          />
        <img className="card-mastercard " src={MasterCard}/>
      </div>
      
    </div>
   
    </div>
    <div className="form-back form-back-text-full form-m form-s-p" onClick={handleOpen}>
        <h3 className='text-s-h3'>Loyalty Customer</h3>
      <div className="card-design-all card-design-all-full-gift card-design-all-m-gift card-design-all-s-gift">
      <img
        className="gift-card-img"
        src={LoyalCustomer}
        />
      
      
    </div>
    
    </div>
    {/* <div className="form-back form-back-text-full form-m form-s-p">
        <a href="/digitalwallet"><h2 className='wallet-text text-s-h2'>Wallet</h2></a>
      <div className="card-design-all  card-design-all-full-w card-design-all-m-wallet card-design-all-s-wallet">
      <img
        className="wallet-img"
        src={Wallet}
        />
      
    </div>
    
    
    </div> */}
    <LoyalReceiptOpen show={show} handleClose={handleClose}/>
    </div>
    
    )
  }
