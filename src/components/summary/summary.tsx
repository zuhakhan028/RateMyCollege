import React from "react";
import "./summary.css"
import OverAllAvg from "../overallAvg/overallAvg";
import SecondaryButton from "../secondarybutton/secondaryButton";
import PrimaryButton from "../primarybutton/primaryButton";
import logo from "../../assets/images/logo.svg"
import avg_rating_img from "../../assets/images/ratings.svg"

function Summary(){
    return(
<div className="summary-div">
<header className="ratings-header">
<img className="ratings-header-logo" src={logo}></img>
<div className="primary-button-rating-page">
<PrimaryButton  text="Home"/>
</div>
</header>
<div className="summary-inner-div">
    <img className="avg-rating-img"src={avg_rating_img} alt="rating img">
    </img>
    <div className="avg-rating">
{"3.5/5"}
    </div>
    <div className="university-name dept-title" >
    {"Gitam University"}
    </div>
    <div className="university-location">
    {"Vizag/Hyderabad"}
    </div>
    <OverAllAvg score={4.5}/>
    <div className="over-all-avg-span">
        *Overall Average
    </div>
    <div className="share-with-friends-caption">
        Ask your {"Gitam"} <br></br>friends to rate their opinions
    </div>
    <SecondaryButton text="Share With Friends" route="/"/>
</div>
    </div>
    )
}
export default Summary