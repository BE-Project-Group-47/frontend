import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Submission from "./pages/Submission";
import Results from "./pages/Results";
import "./App.css";

function App() {
  return (
    <div>
      <div className="w-full h-20"></div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
