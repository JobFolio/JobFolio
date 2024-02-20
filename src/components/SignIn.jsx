import React, { useEffect, useState } from "react";
import LogInContainer from "./LogInContainer";
import { Link } from "react-router-dom";


export default function SignIn(){
const [isClicked, setIsClicked] = useState(false);
const handleClick = () => {
    setIsClicked(true);
}
useEffect(() => {
    handleClick()
}, []);

    return (
        <div className="signIn-signUp">
        {/* {isClicked?  <Link to='/home'/> : <Link to='/' />}; */}
        <button onClick={handleClick} id="signIn_button" type="submit">Sign In</button>
        <button onClick={handleClick} id="signUp_button" type="submit">Sign Up</button>
        </div>
  )
};
