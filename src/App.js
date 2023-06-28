import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Repos from "./Repository/Repos";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/repos" element={<Repos />} />
          <Route exact path="/repos/repo-name" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
