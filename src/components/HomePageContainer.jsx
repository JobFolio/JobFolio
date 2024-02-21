import React from "react";
import JobApp from './JobApp.jsx';

export default function HomePageContainer(){
      //loop through job applications
return (
    <div>
        <h1>Home Page</h1>
        <h1>Username</h1>
        <JobApp />
        <JobApp />
        <JobApp />
        <br/>
        <button id="newApp_button" type="submit">Add An App!</button>
    </div>
)
};