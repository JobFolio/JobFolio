import React from "react";
import JobApp from './JobApp.jsx';

export default function HomePageContainer(){
      //loop through job applications
return (
    <div>
        <div>
        <JobApp />
        <JobApp />
        <JobApp />
        </div>
        <button id="newApp_button" type="submit">Add An Application!</button>
    </div>
)
};