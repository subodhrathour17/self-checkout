import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BflGroupLogo,Merge,Vector1,Vector2,Vector6,} from "../../assets/images";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();
  const[username,setUser]=useState("");
  const[password,setPassword]=useState("");
  const initialValues ={username:'',password:''};
  const[formvalues,setFormValues]=useState(initialValues);
  const[formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);
 
  const Validation =(values)=>{
    const errors={};
    if(!values.username){
      errors.username="username is required";
    } else if((values.username).length<=3){
      errors.username="username must be greater than 3";
    }
     else if((values.username).length>=20){
      errors.username=" Too Long username ";
    }

    if(!values.password){
      errors.password="password is required";
    }
    return errors;
  }
  const handleChange=(e)=>{
    // console.log(e.target);
    const {name,value}=e.target;
    setFormValues({...formvalues,[name]:value})
    console.log(formvalues);
    setUser(formvalues.username);
    setPassword(formvalues.password);
  }

  const FetchData=async ()=>{

    let item={username,password}; 
    console.log("In fetch Data Items are",item);
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
    if(result.token!=null){
      localStorage.setItem("user",JSON.stringify(result.user))
      localStorage.setItem("token",JSON.stringify(result.token))
    }
    else{
      alert("Username or Password is incorrect");
    }

  }

  const HandleLogin=(e)=>{
    e.preventDefault();
    setFormErrors(Validation(formvalues));
    setIsSubmit(true);
    
  }

  // useEffect(()=>{
  //   if(localStorage.getItem('user')){
  //     navigate("/register");
  //   }
  // },[])

  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length==0 && isSubmit){
      console.log(formvalues);
      FetchData();
     if(localStorage.getItem('user')){
      navigate("/register");
     }
    }
  },[formErrors])

  return (
    <Fragment>
      <section className="login">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ">
              <div className="logo text-center ">
                <img src={BflGroupLogo} alt="bfl" className="img-fluid" />
              </div>
              <div className="login-sm text-center">
                <img src={Merge} alt="login-sm" className="img-fluid mergeImg" />
              </div>
            </div>
            <div className="col-lg-5 login-color">
              <div className="row">
              <div className="col-lg-auto">
              <div className="welcome"> <h2>Welcome Back</h2> </div>
              </div>

             <div className="col-lg-12">

              <form type="form" onSubmit={HandleLogin} autoComplete="off">
                <div className="login-main">
                  <div className="login-box">
                    <div className="login-icon">
                      <img src={Vector2} alt="profile" className="img-fluid" />
                    </div>
                    <input type="text"
                    pattern="^[a-z]+$"
                     onChange={handleChange} 
                     placeholder="Enter Username"
                     name="username"
                    value={formvalues.username}
                    />
                    <p className="errors">{formErrors.username}</p>
                  </div>
                  <div className="login-box">
                    <div className="login-icon">
                      <img src={Vector1} alt="password" className="img-fluid" />
                    </div>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleChange}
                      value={formvalues.password}
                      
                    />
                    <p className="errors">{formErrors.password}</p>
                  </div>

                  <div className="login-btn text-center pt-2">
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

          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
