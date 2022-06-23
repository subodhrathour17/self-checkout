import React from 'react'
import './security.css'
import Navlayout from './Navlayout'
import { detag, pant1, pant2, security, shirt,tag4 } from '../../assets/images'
const Securitytag = () => {
  return (
    <>
      <Navlayout>
       </Navlayout>
       <h4 className='stop'>Remove Tag</h4>
      
      <div className='shead'>
      <span>Please Remove the Security Tag</span>
      </div>

      <div className="scontainer scontainer-s scontainer-m">
        <div className='sitems' >
          <div>
        <img className='scloths scloths-sub'  src={shirt} alt="" srcset="" />
        <span className='sclothtitle'>Tshirt</span>
        <span className='sclothname'>Roadstar</span>
          <img className='sstatustag' src={tag4} alt="" srcset="" />
          </div>
          <hr />
          <div>
        <img className='scloths' src={pant1} alt="" srcset="" />
        <span className='sclothtitle'>Tshirt</span>
        <span className='sclothname'>Roadstar</span>
        <img className='sstatustag' src={tag4} alt="" srcset="" />

          </div>
          <hr />
          <div>
        <img className='scloths' src={pant2} alt="" srcset="" />
        <span className='sclothtitle'>Tshirt</span>
        <span className='sclothname'>Roadstar</span>
        <img className='sstatustag' src={tag4} alt="" srcset="" />

          </div>
          <hr />
        </div>
        <img className='stag stag-s' src={detag} alt="" srcset="" />
        <img className='sbg sbg-s' src={security} alt="" srcset="" />
      </div>
    </>
  )
}

export default Securitytag