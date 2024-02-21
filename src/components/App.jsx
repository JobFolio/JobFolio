import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LogInContainer from "./LogInContainer";


export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LogInContainer/>}></Route>
      </Routes>
    </Router>
  );
};
