import React ,{ Fragment} from 'react'
import {BflGroupLogo,Logo,
    GoBack,Status,MaskGroup,Down,Visa,Discover,MasterCard, GiftCard, Wallet,
    Line,Number1,Line2,Number2 ,Number3,UpDesignImg,LoyalCustomer, TopDesign,WhiteDesign,Vector6,DarkDubi,Cashier
} from "../../assets/images";

import "./index.css";

const Home = () => {
  return (
    <Fragment>
      <section className="home">
      <div className="home-main">
        <div className="home-content home-content-f home-content-m">
        <img className="top-degin design-top-f" src={TopDesign} alt="top-design "  />
        <img className="white-degin white-degin-f white-degin-m" src={WhiteDesign} alt="white-design"  /> 
        <img className="mask-degin mask-degin-f mask-degin-m" src={DarkDubi} alt="mask-design"  /> 
      
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