import React ,{ Fragment } from 'react'
import {BflGroupLogo,
    Status,MaskGroup,Down,Line,Number1,Line2,Number2 ,Number3 
} from "../../assets/images";
import "./navlayout.css";
const Navlayout = () => {
    
  return (
    <Fragment>
      <section className="payment">
      <div className="gobutton-btn text-left pt-10 ">
        <Paytext1 />
        <StatusTick/>
        
      </div>
      </section>
    </Fragment>
  )
}

export default Navlayout

function Paytext1() {
    return (
      <div className="Paytext1 ">
        <h1 className="titlesegoeui-semi-bold-tundora-44-5px">
        </h1>
        <img className="bfl-logo bfl-logo-M bfl-logo-S" src={BflGroupLogo} />
        <UpDesign/>
        
      </div>
    );
  }
  function StatusTick() {
    return (
      <div className="BackGround-M BackGround-R BackGround-S">
      <div className="StatusTick">
        <img className="vector" src={Status} />
      </div>
      <div className="article-list">
      <span>Article List</span>
      <img className="line-1" src={Line} />
    </div>
    {/* <img className="number-1" src={Number1} /> */}
    <img className="number-1" src={Status} />

    <div className="pay-list">
      <span>Pay</span>
      <img className="line-2" src={Line2} />
    </div>
    <img className="number-1 number-3" src={Number1} />

    {/* <img className="number-1 number-3" src={Number2} /> */}
    <div className="pay-list">
      <span className='remove-tag'>Remove Tag</span>
      <img className="line-3" src={Line2} />
    </div>
    <img className="number-1 number-4" src={Number3} />
    <div className="pay-list">
      <span className='recipt'>Recipt</span>
    </div>
      <DownDesign/>
      </div> 
    );
  }
  function UpDesign() {
    return (
      <div className="back-design-r">
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
  