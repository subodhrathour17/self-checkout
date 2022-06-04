import React from 'react'
import '../../App.css'
import Navlayout from '../../components/helper/navlayout/Navlayout'
import { circular, detag, pant1, pant2, security, shirt, tag1, tag4 } from '../../assets/images'
import './security.css'
import { greentag } from '../../assets/images'
 
const Securitysuccess = () => {
  return (
    <>
      <Navlayout>
       </Navlayout>
       <h4 className='stop'>Remove Tag</h4>
      <div className='shead'>
      <span>Please Remove the Security Tag</span>
      </div>
      <div className="scontainer">
        <div className='sitems' >
          <div>
        <img className='scloths'  src={shirt} alt="" srcset="" />
        <span className='sclothtitle'>Tshirt</span>
        <span className='sclothname'>Roadstar</span>
          <img className='sstatustag' src={greentag} alt="" srcset="" />
          </div>
          <hr />
          <div>
        <img className='scloths' src={pant1} alt="" srcset="" />
        <span className='sclothtitle'>Tshirt</span>
        <span className='sclothname'>Roadstar</span>
        <img className='sstatustag' src={greentag} alt="" srcset="" />

          </div>
          <hr />
          <div>
        <img className='scloths' src={pant2} alt="" srcset="" />
        <span className='sclothtitle'>Tshirt</span>
        <span className='sclothname'>Roadstar</span>
        <img className='sstatustag' src={greentag} alt="" srcset="" />

          </div>
          <hr />
        </div>
        <img className='stag2 App-logo' src={circular} alt="" srcset="" />
        <img className='sbg' src={security} alt="" srcset="" />
      </div>
    </>
  )
}


export default Securitysuccess