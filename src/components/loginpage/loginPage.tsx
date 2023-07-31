import React from "react";
import signup_img from "../../assets/images/login_img.svg"
import logo from "../../assets/images/logo.svg"
import "./loginPage.css"
import SecondaryButton from "../secondarybutton/secondaryButton";
import PrimaryButton from "../primarybutton/primaryButton";

function LoginPage(){
    return(
    <div  className="login-page" >
      
  
       <img className="login-page-logo" src={logo} alt="logo"></img>
     
      <div className="login-page-middle-section">
        <img className="sign-up-img" src={signup_img} alt="signup_img"></img>
     
      <SecondaryButton text="Sign Up With Gmail" route={""}/>
      <div>
        <PrimaryButton text="Login With Gmail"/>
      </div>
      <div className="official_mail_id">
        {`Select your Institution ${`official Email ID` } to standout  (name@college.edu & more)`}
      </div>
      </div> 
      
    </div>
      
    )
}
export default LoginPage;