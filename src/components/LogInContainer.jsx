import React from "react";
import SignIn from "./SignIn";

export default function LogInContainer(){


    return(
        <div id="log_in_page_container">
            <div id='logIn_container'>
            <div id="username_input">
            <span>Username</span>
            <input placeholder="username"></input>
            </div>
            <div id='password_input'>
            <span>Password</span>
            <input placeholder="password"></input>
            </div>
            </div>
            <SignIn/>
        </div>
    )
}