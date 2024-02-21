import React from "react";
import { useNavigate } from "react-router-dom";
import { editClicked } from "../reducers/editPageSlice";
import { useDispatch, useSelector } from 'react-redux';

export default function JobApp(){
    const { isClicked }  = useSelector((state) => state.editClicked || { isClicked: false });
    const dispatch = useDispatch();
    console.log('isClicked in JobApp: ', isClicked);
    const navigate = useNavigate();
    if(isClicked) navigate('/editPage');
return (
    <div>
        <div id='job_airbnb' style={{display : 'inline-block'}}>
            <p>Company: <span>AirBnb</span></p>
            <p>Job Ttile: <span>Software Developer 1</span></p>
            <p>Industry: <span>Hospitality</span></p>
            <p>Due Date: <span>1/1/11</span></p>
            <p>Start Date: <span>2/2/22</span></p>
            <p>Location: <span>In-Person NYC</span></p>
            <p>Salary: <span>200k</span></p>
            <p>Connection: <span>my friend</span></p>
            <button id="editPage_button" type="submit" onClick={() => dispatch(editClicked())}>Job Application Edit Page!</button>
            <button id="delete_button" type="submit">Delete App</button>
    </div>
        <div id='job_google' style={{display : 'inline-block'}}>
        <p>Company: <span>Google</span></p>
        <p>Job Ttile: <span>Software Developer 2</span></p>
        <p>Industry: <span>FANG</span></p>
        <p>Due Date: <span>2/2/22</span></p>
        <p>Start Date: <span>3/3/33</span></p>
        <p>Location: <span>Flex, Silicon Valley</span></p>
        <p>Salary: <span>500k</span></p>
        <p>Connection: <span>no one</span></p>
        <button id="editPage_button" type="submit" onClick={() => dispatch(editClicked())}>Job Application Edit Page!</button>
        <button id="delete_button" type="submit">Delete App</button>
    </div>
    <div id='job_startup' style={{display : 'inline-block'}}>
        <p>Company: <span>Startup</span></p>
        <p>Job Ttile: <span>Software Developer 3</span></p>
        <p>Industry: <span>EdTech</span></p>
        <p>Due Date: <span>4/4/44</span></p>
        <p>Start Date: <span>5/5/55</span></p>
        <p>Location: <span>Remote, the Beach</span></p>
        <p>Salary: <span>123k</span></p>
        <p>Connection: <span>classmate</span></p>
        <button id="editPage_button" type="submit" onClick={() => dispatch(editClicked())}>Job Application Edit Page!</button>
        <button id="delete_button" type="submit">Delete App</button>
    </div>
 </div>
)
};