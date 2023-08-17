import React from "react"
import "./eachRatingSection.css"
import gold_star_img from "../../assets/images/gold_start.svg"
import gray_star_img from "../../assets/images/gray_start.svg"
import { useState } from "react"

interface EachRatingSection {
    rating: any;
}
function EachRatingSection(props: EachRatingSection) {
   



    const [rated, setRated] = useState(false);
    const [ratecount, setRateCount] = useState(0);

    const gray_star = gray_star_img
    const golden_star = gold_star_img

    const handleStarClick = (count:any) => {
        setRated(true); // Mark as rated
        setRateCount(count); // Update the rating count
    };        
    
    if (rated) {
        // Display the golden stars based on the ratecount
        const stars = Array.from({ length: 5 }, (_, index) => (
            <div className="each-star-div" key={index}>
                <img className="star-img" src={index < ratecount ? golden_star : gray_star} alt="Star"  onClick={() => handleStarClick(index + 1)} />
            </div>
        ));

        return (
            <div className="each-rating-section">
                <div className="rating-dept-catogery">{props.rating}</div>
                <div className="stars-div">{stars}</div>
            </div>
        );
    } else {
        // Display gray stars for rating
        const grayStars = Array.from({ length: 5 }, (_, index) => (
            <div className="each-star-div" key={index}>
                <img className="star-img" src={gray_star} alt="Gray Star" onClick={() => handleStarClick(index + 1)} />
            </div>
        ));

        return (
            <div className="each-rating-section">
                <div className="rating-dept-catogery">{props.rating}</div>
                <div className="stars-div">{grayStars}</div>
            </div>
        );
    }



}
export default EachRatingSection;