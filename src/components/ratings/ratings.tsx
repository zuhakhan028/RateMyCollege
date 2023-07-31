import "./ratings.css"
import logo from "../../assets/images/logo.svg"
import PrimaryButton from "../primarybutton/primaryButton"
import EachRatingSection from "../eachratingsection/eachRatingSection"
import SecondaryButton from "../secondarybutton/secondaryButton"
interface Ratings{
    dept:string;
    dept_check_1:string;
    dept_check_2:string;
    dept_check_3:string;
    dept_check_4:string;
    route:string;
}
function Ratings(props:Ratings){
    return(
        
<div className="ratings">
<header className="ratings-header">
<img className="ratings-header-logo" src={logo}></img>
<div className="primary-button-rating-page">
<PrimaryButton  text="back"/>
</div>
</header>
<div className="ratings-inner-div">
<div className="dept-title">
{props.dept}
</div>
<div>
    <div className="dept-check-title"><EachRatingSection rating={props.dept_check_1}/></div>
</div>
<div>
    <div className="dept-check-title"><EachRatingSection rating={props.dept_check_2}/></div>
</div>
<div>
    <div className="dept-check-title"><EachRatingSection rating={props.dept_check_3}/></div>
</div>
<div>
    <div className="dept-check-title"><EachRatingSection rating={props.dept_check_4}/></div>
</div>
<SecondaryButton text="Next" route={props.route}/>
</div>

</div>
    )
}

export default Ratings