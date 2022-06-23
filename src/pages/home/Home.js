import React ,{ Fragment} from 'react'
import {BflGroupLogo,Logo,TopDesign,WhiteDesign,DarkDubi,Cashier
} from "../../assets/images";

import "./home.css";

const Home = () => {
  return (
    <Fragment>
      <section className="home">
      <div className="home-main">
        <div className="home-content">
        <img className="top-degin" src={TopDesign} alt="top-design"  />
        <img className="white-degin" src={WhiteDesign} alt="white-design"  /> 
        <img className="mask-degin" src={DarkDubi} alt="mask-design"  /> 
      
       <a href="/login">
        <img className="cashier-degin" src={Cashier} alt="cashier-design"  />
        </a>
        <div className="languageOptin">
          <h1>الرجاء تحديد أي لغة</h1>
          <h2>Please Select any Language</h2>
        </div>
        <div className='home-screen-button'>
          <button className='button-english-home'>English</button>
          <button className='button-arabic-home'>عربي</button>
        </div>
        <div className="welcome-text-home">
          <h1>مرحبا بك </h1>
          <h2>Welcome To</h2>
        <img className="bfl-degin" src={BflGroupLogo} alt="cashier-design"  />
        <img className="suntech-logo-degin" src={Logo} alt="cashier-design"  />

        </div>
        </div>
        
      </div>
      </section>
    </Fragment>
  )
}

export default Home