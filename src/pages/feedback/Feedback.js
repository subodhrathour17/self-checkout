import React from 'react'
import './feedback.css'
import { BflGroupLogo, Happy,sad,Logo } from '../../assets/images'
const Feedback = () => {
  return (
      <div>
        <div class="card fcard">
  <div class="card-body">
  <div className='ftop'>
      <img src={Logo} alt="logo" srcset="" />
    <h5 class="card-title ft">Rate Your Experience</h5>
    <img className='flogo' src={BflGroupLogo} alt="logo" srcset="" />
    </div>
    <p class="card-text ft ft2">Happy With Our Service?</p>
    <img className='fhappy' src={Happy} alt="happy" srcset="" />
    <img src={sad} className="fsad" alt="sad" srcset="" />
    <p class="card-text ft ft3">What did you Like?</p>
    <div className='btngroup'>

    <a href="/" class="btn btn-warning fb">Ambience</a>
    <a href="/" class="btn btn-warning fb">User Interface</a>
    <a href="/" class="btn btn-warning fb">Cost</a>
    </div>
    <div>

    <div className='btngroup2'>

    <a href="/" class="btn btn-warning  fsubmit">Submit</a>
    <a href="/" class="btn btn-warning  fskip">Skip</a>
    </div>
    </div>
  </div>
        </div>
    </div>
  )
}

export default Feedback