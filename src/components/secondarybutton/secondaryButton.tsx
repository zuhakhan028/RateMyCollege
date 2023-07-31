import React from "react";
import "./secondaryButton.css"
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

interface SecondaryButton{
    text:string;
    route:string;
}
function SecondaryButton(props:SecondaryButton) {

    return (
        <Link to={props.route} className="link-tag">
       <div className="secondary-button" >
     
            <div>
                {props.text}
            </div>
       

        </div>
        </Link>
   
         
       
       
    )
}

export default SecondaryButton