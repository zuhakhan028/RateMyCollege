import React from "react";
import Ratings from "../ratings/ratings";
function Infrastructure(){
    return(
        <Ratings  dept="Infrastructure"
        dept_check_1="Class Rooms"
        dept_check_2="Laboratories"
        dept_check_3="Auditorium"
        dept_check_4="Canteens/Pubs"
        route="/summary"/>
    )
}
export default Infrastructure