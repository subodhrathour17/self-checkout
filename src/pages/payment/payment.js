import React ,{ Fragment } from 'react'
import {BflGroupLogo,
    GoBack,Status,MaskGroup,Down,Visa,Discover,MasterCard, GiftCard, Wallet,Line,Number1,Line2,Number2 ,Number3 
} from "../../assets/images";
import "./index.css";
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
      <div className="Paytext1 ">
        <h1 className="titlesegoeui-semi-bold-tundora-44-5px">
          <span className="segoeui-semi-bold-tundora-44-5px">Select Payment Mode</span>
        </h1>
        <img className="bfl-logo" src={BflGroupLogo} />
        <UpDesign/>
        
      </div>
    );
  }
  function StatusTick() {
    return (
      <div className="BackGround">
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
      <div className="back-design">
        <img className='top-image' src={MaskGroup} />
        
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
    return (
      <div className='cardmain'>
      <div className="form-back p1">
        <h1>Credit / Debit Card</h1>
      <div className="card-design-all ">
      <img
        className="card-visa"
        src={Visa}
        />
      <div className="flex-row">
        <img
          className="card-discover"
          src={Discover}
          />
        <img className="card-mastercard" src={MasterCard}/>
      </div>
      
    </div>
    
    </div>
    <div className="form-back">
        <h3>Gift Card</h3>
      <div className="card-design-all">
      <img
        className="gift-card-img"
        src={GiftCard}
        />
      
      
    </div>
    
    </div>
    <div className="form-back">
        <h2 className='wallet-text'>Wallet</h2>
      <div className="card-design-all ">
      <img
        className="wallet-img"
        src={Wallet}
        />
      
    </div>
    
    </div>
          </div>
    )
  }
