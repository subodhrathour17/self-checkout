import React ,{ Fragment } from 'react'
import {BflGroupLogo,
    GoBack,Status,MaskGroup
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
      
      </div>
      
    );
  }
  function UpDesign() {
    return (
      <div className="back-design">
        <img src={MaskGroup} />
      </div>
    );
  }