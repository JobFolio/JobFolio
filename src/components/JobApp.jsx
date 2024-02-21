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
    <div style={{display : 'inline-block'}}>
        <p>Company: company</p>
        <p>Job Ttile: job title</p>
        <p>Industry: industry</p>
        <p>Due Date: 1/1/11</p>
        <p>Start Date: 2/2/22</p>
        <p>Location: In-Person NYC</p>
        <p>Salary: 200k</p>
        <p>Connection: my friend</p>
        <button id="editPage_button" type="submit" onClick={() => dispatch(editClicked())}>Job Application Edit Page!</button>
        <button id="delete_button" type="submit">Delete App</button>
    </div>
)
};