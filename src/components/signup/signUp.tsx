import "./signUp.css"
import logo from "../../assets/images/logo.svg"
import SecondaryButton from "../secondarybutton/secondaryButton"
import PrimaryButton from "../primarybutton/primaryButton"
function SignUp(){
    return(
        <div className="signup">
<header className="signup-header"><img src={logo} alt="logo"></img></header>
<section className="signup-middle-section">
    <div><input type="text" placeholder="College" className="college-input"></input></div>
    <div><input type="text" placeholder="Gender" className="college-input"></input></div>
    <div className="college-start-end-year-div">
        <div><input type="text" placeholder="Start Year" className="college-start-year"></input></div><div><input type="text" placeholder="End Year" className="college-start-year"></input></div>
    </div>
</section>
<section className="signup-page-last-section">
<div className="terms-privacy-policy">By moving forward, l agree <br></br>
to Terms of Service and Privacy Policy</div>
<SecondaryButton text="Start Rating" route="/rating"/>
<PrimaryButton text="Login" />
</section>
        </div>
    )
}

export default SignUp