import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BflGroupLogo,
  Merge,
  Vector1,
  Vector2,
  Vector6,
} from "../../assets/images";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();
  const[username,setUser]=useState("");
  const[password,setPassword]=useState("");

  const HandleLogin=async (e)=>{
    e.preventDefault();
    let item={username,password};
    console.log(username ,password);
    let result = await fetch("http://103.86.176.93:9696/Self_Checkout/v1/auth/token/SignIn",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Access-Control-Allow-Origin" :'*',
      },
      body:JSON.stringify(item)
    });
    result=await result.json();
    console.log(result);
    localStorage.setItem("user",JSON.stringify(result))
  }
  // const submitHandler = () => {
  //   navigate("/register");
  // };
  useEffect(()=>{
    if(localStorage.getItem('user')){
      navigate("/");
    }
  })
  return (
    <Fragment>
      <section className="login">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-7 position-relative">
              <div className="logo text-center pb-5">
                <img src={BflGroupLogo} alt="bfl" className="img-fluid" />
              </div>
              <div className="login-sm text-center pb-3">
                <img src={Merge} alt="login-sm" className="img-fluid" />
              </div>
            </div>
            <div className="col-sm-5 position-relative login-color">
              <div className="welcome">
                <h2>Welcome Back</h2>
              </div>

              <form type="form" onSubmit={(e)=>{HandleLogin(e)}}>
                <div className="login-main">
                  <div className="login-box pb-3">
                    <div className="login-icon">
                      <img src={Vector2} alt="profile" className="img-fluid" />
                    </div>
                    <input type="text" onChange={(e)=>setUser(e.target.value)} placeholder="Enter User Id" required />
                  </div>
                  <div className="login-box">
                    <div className="login-icon">
                      <img src={Vector1} alt="password" className="img-fluid" />
                    </div>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      onChange={(e)=>setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="login-btn text-center pt-5">
                    <button type="submit">LOGIN</button>
                  </div>
                  <div className="login-image">
                    <img src={Vector6} alt="vector" className="img-fluid" />
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
