import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LogInContainer from "./LogInContainer";
import HomePageContainer from "./HomePageContainer";


export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LogInContainer/>}></Route>
          <Route path="/home" element={<HomePageContainer/>}></Route>
      </Routes>
    </Router>
  );
};
