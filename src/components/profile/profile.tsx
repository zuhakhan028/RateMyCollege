import React from "react";
import PrimaryButton from "../primarybutton/primaryButton";
import logo from "../../assets/images/logo.svg"
import "./profile.css"
import ProfileRatingCard from "../profileratingcard/profileRatingCard";
import SecondaryButton from "../secondarybutton/secondaryButton";
function Profile() {
    return (
        <>

            <header className="ratings-header">
                <img className="ratings-header-logo" src={logo} alt="logo"></img>
                <div className="primary-button-rating-page">
                    <PrimaryButton text="back" />
                </div>
            </header>
            <div className="profile">
                <div>
                    <div className="profile-discover-ratings"><span className="profile-discover-ratings-span">Discover Your Ratings,</span> <br></br>All in One Place!</div>
                </div>
             
              <div>
                    <ProfileRatingCard rating={3.5} />
                    <ProfileRatingCard rating={3.5} />
                    <ProfileRatingCard rating={3.5} />
                    <ProfileRatingCard rating={3.5} />
                </div>
                <div className="profile-home-button">
                <SecondaryButton text="Home" route="/"/>
                </div>
               
              
               
            </div></>

    )
}
export default Profile