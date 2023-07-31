import React from "react"
import "./eachRatingSection.css"
import gold_star from "../../assets/images/gold_start.svg"
import gray_star from "../../assets/images/gray_start.svg"
import { useState } from "react"

interface EachRatingSection{
    rating:any;
}
function EachRatingSection(props:EachRatingSection){
 const [ratecount,setRateCount]=useState(0)
    return(
        <div className="each-rating-section">
            <div className="rating-dept-catogery">{props.rating}</div>
            <div className="stars-div">
            <div className="each-star-div">
                <img  className="star-img"src={gray_star} onClick={(()=>{setRateCount(1)})}></img>
            </div>
            <div className="each-star-div">
                <img  className="star-img" src={gray_star} onClick={(()=>{setRateCount(2)})}></img>
            </div>
            <div className="each-star-div">
                <img  className="star-img" src={gray_star} onClick={(()=>{setRateCount(3)})}></img>
            </div>
            <div className="each-star-div">
                <img  className="star-img" src={gray_star} onClick={(()=>{setRateCount(4)})}></img>
            </div>
            <div className="each-star-div">
                <img src={gray_star} onClick={(()=>{setRateCount(5)})}></img>
            </div>
            </div>
            
                        

            

          


        </div>
    )
}
export default EachRatingSection;