import React from "react";
// import LogInContainer from "./LogInContainer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { confirmLogIn } from '../reducers/logInSlice.js'

export default function SignIn(){
  const { isClicked }  = useSelector((state) => state.confirmLogIn || { isClicked: false });
  // console.log('isClicked off state: ', isClicked);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if(isClicked) navigate('/home');
  //post username and password to back end
return (
<div className="signIn-signUp">
    <button onClick={() => dispatch(confirmLogIn())} id="signIn_button" type="submit">Sign In</button>
    {/* <button onClick={() => dispatch(confirmLogIn())} id="signUp_button" type="submit">Sign Up</button> */}
    <button  id="signUp_button" type="submit">Sign Up</button>
</div>

)
}

