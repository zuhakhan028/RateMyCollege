import "./middleSection.css"
import graduation_icon from "../../assets/images/graduation_icon.svg"
import SecondaryButton from "../secondarybutton/secondaryButton"
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
function MiddleSection(){
    return(
        <section className="middle-section">
            <div>
                <img className="graduation-icon" src={graduation_icon} alt="graduation_icon"></img>
            </div>
            <div className="tagline">
                Rate At Your Best Views, <br></br><span className="tagline-span"> Help Your Juniors</span>
            </div>
            <>
            <input className="search-bar" type="text" placeholder="Find your college..." />
            </>
               
         
         
              
                 
            <SecondaryButton text="Start Rating" route="/Loginpage"/>
                    
           
             
               
            

        </section>
    )
}

export default MiddleSection