import React ,{ Fragment, useState } from 'react'

import {BflGroupLogo,
    GoBack,Status,MaskGroup,Down,Line,Digital,PrintReciept,NoReciept,Number4,UpDesignImg
} from "../../assets/images";
import "./index.css";
import DegitalReceiptOpen from '../../popup/digital-receipt'
const Recipt = () => {
  
    
  return (
    <Fragment>
      <section className="payment">
      <div className="gobutton-btn ">
        <button className='go-btn'  type="submit"><img src={GoBack} alt="vector" className="img-goback" /></button>
        <Paytext1 />
        <StatusTick/>
        <Cards/>
        
      </div>
      </section>
    </Fragment>
  )
}

export default Recipt

function Paytext1() {
    return (
      <div className="Paytext1-r Paytext1-r-s">
        <h1 className="title-r title-small">
          <span>Print Your Receipt</span>
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
    <img className="number-1" src={Status} />
    <div className="pay-list">
      <span>Pay</span>
      <img className="line-2" src={Line} />
    </div>
    <img className="number-1" src={Status} />
    <div className="pay-list">
      <span className='remove-tag'>Remove Tag</span>
      <img className="line-3" src={Line} />
    </div>
    <img className="number-1" src={Number4} />
    <div className="pay-list recipt">
      <span>Recipt</span>
    </div>
      <DownDesign/>
      </div> 
    );
  }
  function UpDesign() {
    return (
      <div className="back-design">
        <img className='top-image' src={UpDesignImg} />
      </div>
    );
  }
  function DownDesign() {
    return (
    <div className="downdesign downdesign-992 ">
    <img className="down-design-r" src={Down}/>
    
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
    <div className='cardmain p-card  card-small'>
      <div className="form-back form-backbig text1-d text1-1400 form-backsmall " onClick={handleOpen}>
        <h1>Digital Receipt</h1>
          <div className="png-all png-all-dig png-small ">
            <img className="digital-img digital-small" src={Digital} />
            </div>
        </div>
      <div className="form-back text1-d text2 form-backsmall ">
        <h3>Print Receipt</h3>
          <div className="png-all print-all-print print-small">
          <img
            className="print-reciept"
            src={PrintReciept}
            />
        </div>
    </div>

    <div className="form-back text1-d text3 form-backsmall">
        <h2 className='wallet-text'>I Don’t want Receipt</h2>
      <div className="png-all no-all-receipt no-re-small">
      <img
        className="no-reciept"
        src={NoReciept}
        />
      
    </div>
    
    </div>

    <DegitalReceiptOpen show={show} handleClose={handleClose}/>
          </div>
    )
  }