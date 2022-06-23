import React ,{ Fragment } from 'react'
import {BflGroupLogo,Line,Line2,one,two,three,four,
} from "../../assets/images";
import "../security_tag/navlayout.css";
import "./navlayout.css";
const Navforcart = () => {
    
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

export default Navforcart

function Paytext1() {
    return (
      <div className="Paytext1 ">
        <h1 className="titlesegoeui-semi-bold-tundora-44-5px">
        </h1>
        <img className="bfl-logoforcart" src={BflGroupLogo} />
        
      </div>
    );
  }
  function StatusTick() {
    return (
      <div className="sidebaratc">
      <div className="StatusTick">
        <img className="vector" src={one} />
      </div>
      <div className="article-list">
      <span>Article List</span>
      <img className="line-1" src={Line} />
    </div>
    <img className="number-1" src={two} />

    <div className="pay-list">
      <span>Pay</span>
      <img className="line-2" src={Line2} />
    </div>
    <img className="number-1 number-3" src={three} />

    <div className="pay-list">
      <span className='remove-tag'>Remove Tag</span>
      <img className="line-3" src={Line2} />
    </div>
    <img className="number-1 number-4" src={four} />
    <div className="pay-list">
      <span className='recipt'>Recipt</span>
    </div>
      </div> 
    );
  }
  