import React, { useEffect, useState } from "react";
import LogInContainer from "./LogInContainer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { confirmLogIn } from '../reducers/logInSlice.js'

export default function SignIn(){
  const { isClicked }  = useSelector((state) => state.logIn);
  const dispatch = useDispatch();


    const navigate = useNavigate();
    const handleClick = () => {
      setIsClicked(true);
    }
      useEffect(() => {
        if (isClicked) {
        navigate('/home');
      }
    }, [isClicked, navigate]);

return (

<div className="signIn-signUp">
    <button onClick={handleClick} id="signIn_button" type="submit">Sign In</button>
    <button onClick={handleClick} id="signUp_button" type="submit">Sign Up</button>
</div>

)};

