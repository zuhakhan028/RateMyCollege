import React from "react";
import "./overallavg.css"

interface OverallAvg{
    score:number
}
function OverAllAvg(props:OverallAvg){
return(
<div className="overall-avg-component">
{`${props.score}/5`}
    </div>
)
}
export default OverAllAvg