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
    <div id='job_container' style={{display : 'inline-block'}}>
        <p>Company: <span>AirBnb</span></p>
        <p>Job Ttile: <span>job title</span></p>
        <p>Industry: <span>industry</span></p>
        <p>Due Date: <span>1/1/11</span></p>
        <p>Start Date: <span>2/2/22</span></p>
        <p>Location: <span>In-Person NYC</span></p>
        <p>Salary: <span>200k</span></p>
        <p>Connection: <span>my friend</span></p>
        {/* <button id="editPage_button" type="submit" onClick={clicked()}>Job Application Edit Page!</button>
        <button id="delete_button" type="submit">Delete App</button> */}
    </div>
)
};