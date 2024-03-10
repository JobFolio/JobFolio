import React from "react";
import SignIn from "./SignIn";

export default function LogInContainer(){

//post to backend with input info
    return(
        <div id='log_in_page_container'>
        <div id="log_in_page_button_container">
           <h1>Welcome</h1>
            <div id="username_input">
            <p>Username</p>
            <input placeholder="username"></input>
            </div>
            <div id='password_input'>
            <p>Password</p>
            <input placeholder="password"></input>
            </div>
            <SignIn/>
              
        </div>
        </div>
    )
}