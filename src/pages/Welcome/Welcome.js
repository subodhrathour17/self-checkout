import "./Welcome.scss";
import profileImg from "../../assets/images/auth/girl.png";
import sunTechLogo from "../../assets/images/main/suntech-logo.png";
import bflLogo from "../../assets/images/main/bfl-group-logo.png";
import city from "./assets/city.svg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="Welcome">
      <div className="column1">
        <div className="profile-img">
          <Link to="/login">
            <img src={profileImg} alt="Profile" />
          </Link>
        </div>
        <div className="instruction">
          <p className="arabic">الرجاء تحديد أي لغة</p>
          <p className="english">Please Select any Language</p>
        </div>
        <div className="choices">
          <button className="english choice"><Link to="/drop-you-items">English</Link></button>
          <button className="arabic choice">عربي</button>
        </div>
      </div>


      <div className="separator"></div>
      <div className="column2">
        <div className="welcome-words">
          <div className="welcome-wrapper">
            <h1 className="arabic">مرحبا بك </h1>
            <h1 className="english">Welcome To</h1>
          </div>
          <div className="bflTech-logo">
            <img src={bflLogo} alt="BFL Group logo " />
          </div>
        </div>
        <div className="sunTech-logo">
          <img src={sunTechLogo} alt="Sun Tech logo " />
        </div>
        <div className="tilted-rectangle"></div>
      </div>
      <div className="city">
        <img src={city} alt="City building" />
      </div>

      <div className="Welcome-mobile">
        <div className="column2">
          <div className="welcome-words">
            <Link to="/login">
            <img src={profileImg} alt="Profile" />
          </Link>
            <div className="welcome-wrapper">
              <h1 className="arabic">مرحبا بك </h1>
              <h1 className="english">Welcome To</h1>
            </div>
            <div className="bflTech-logo">
              <img src={bflLogo} alt="BFL Group logo " />
            </div>
          </div>
        </div>
        <div className="column1">
          <div className="instruction">
            <p className="arabic">الرجاء تحديد أي لغة</p>
            <p className="english">Please Select any Language</p>
          </div>
          <div className="choices">
          <button className="english choice"><Link to="/drop-you-items">English</Link></button>
            <button className="arabic choice">عربي</button>
          </div>
        </div>
        <div className="sunTech-logo">
          <img src={sunTechLogo} alt="Sun Tech logo " />
        </div>
        <div className="city">
          <img src={city} alt="City building" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;

