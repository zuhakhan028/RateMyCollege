import React from "react";
import "./primaryButton.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface primarybutton{
    text:string;
}
function PrimaryButton(props:primarybutton){
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
  
      if(props.text=="Next"){
        return(
            <div className="primary-button" onClick={goBack}>
            {props.text}
        </div>
        )
      }

      else if(props.text=="Login With Gmail"){
        return(
            <Link to="/" className="link-tag">
            <div className="primary-button-login" >
    {props.text}
    </div>
    </Link>
        )

      }
      else if(props.text=="Profile"){
        return(
            <Link to="/profile" className="link-tag">
            <div className="primary-button" >
    {props.text}
    </div>
    </Link>
        )

      }
      else{
return(
    <Link to="/" className="link-tag">
            <div className="primary-button" >
    {props.text}
</div>
    </Link>

)
      }



    

}

export default PrimaryButton
