import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LogInContainer from "./LogInContainer";
import HomePageContainer from "./HomePageContainer";
import EditPage from "./EditPage";


export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LogInContainer/>}></Route>
          <Route path="/home" element={<HomePageContainer/>}> </Route>
          <Route path="/editPage" element={<EditPage/>}> </Route>
      </Routes>
    </Router>
  );
};
