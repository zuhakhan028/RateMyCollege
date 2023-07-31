import React from "react";
import Ratings from "../ratings/ratings";
function Hostel(){
    return(
        <Ratings  dept="Hostel/Dorm"
        dept_check_1="Room Furniture"
        dept_check_2="Food"
        dept_check_3="Cleanliness"
        dept_check_4="Gym/Park"
        route="/infrastructure"/>
    )
}
export default Hostel