import "./signUp.css"
import logo from "../../assets/images/logo.svg"
import SecondaryButton from "../secondarybutton/secondaryButton"
import PrimaryButton from "../primarybutton/primaryButton"
import YearDropdown from "../startyeardropdown/yearDropDown"
import EndYearDropdown from "../endyeardropdown/endYearDropDown"
function SignUp() {

    
    return (
        <div className="signup">
            <header className="signup-header"><img src={logo} alt="logo"></img></header>
            <section className="signup-middle-section">
                <form className="signup-middle-section">
                    <input type="text" placeholder="College" className="college-input"></input>
                    <select name="gender" className="custom-select" >
                        <option   className="placeholder" value="" disabled selected >Gender</option>
                        <option className="college-input">male</option>
                        <option className="college-input">female</option>
                    </select>
                 
                    <div className="college-start-end-year-div">
                        <YearDropdown />
                        <EndYearDropdown />
                    </div>
                </form>

            </section>
            <section className="signup-page-last-section">
                <div className="terms-privacy-policy">By moving forward, l agree <br></br>
                    to Terms of Service and Privacy Policy</div>
                <SecondaryButton text="Start Rating" route="/ratings" />
                <PrimaryButton text="Login" />
            </section>
        </div>
    )
}

export default SignUp