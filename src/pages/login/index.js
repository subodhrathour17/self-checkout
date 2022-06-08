import React, { Fragment } from "react";
import { useNavigate,Link } from "react-router-dom";
import {
  BflGroupLogo,
  Merge,
  Vector1,
  Vector2,
  Vector6,
} from "../../assets/images";
import "./index.scss";

const Login = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault()
    navigate("/register");
  };
  return (
    <Fragment>
      <section className="login">
        <div className="container-fluid">
          <div className="row login-section-main">
            <div className="col1 position-relative">
              <div className="bfl-main text-center pb-4">
                <img src={BflGroupLogo} alt="bfl" />
              </div>
              <div className="login-sm text-center">
                <img src={Merge} alt="login-sm" />
                <div className="welcome-mobile">
                  <h2>Welcome Back</h2>
                </div>
                </div>
            </div>
            <div className="position-relative login-color col2">
              <div className="welcome">
                <h2>Welcome Back</h2>
              </div>

              <form type="form" onSubmit={submitHandler}>
                <div className="login-main">
                  <div className="login-box pb-3 userId">
                    <div className="login-icon">
                      <img src={Vector2} alt="profile" className="img-fluid" />
                    </div>
                    <input type="text" placeholder="User ID" required />
                  </div>
                  <div className="login-box password">
                    <div className="login-icon">
                      <img src={Vector1} alt="password" />
                    </div>
                    <input
                      type="password"
                      placeholder="********"
                      required
                    />
                  </div>

                  <div className="login-btn text-center submit">
                    <button type="button"><Link to="/register">LOGIN</Link></button>
                  </div>
                  <div className="login-image">
                    <img src={Vector6} alt="vector" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
