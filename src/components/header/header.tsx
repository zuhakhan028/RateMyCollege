import React from "react";
import "./header.css"
import logo from "../../assets/images/logo.svg"
import PrimaryButton from "../primarybutton/primaryButton";

function Header() {
    return (

        <header className="header">
            <img className="logo-image" src={logo} alt="logo"></img>

            <PrimaryButton text="Profile" />
        </header>


    )
}
export default Header