import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Repos from "./Repository/Repos";
import CardDetails from "./CardDetails/CardDetails";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import RepoInfoReducer from "./feature/RepoSlice.js";
import dropdownReducer from "./feature/DropDownValue.js";
import Error from "./Error/Error";

const store = configureStore({
  reducer: {
    RepoInfo: RepoInfoReducer,
    dropDown: dropdownReducer,
  },
});
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/repos" element={<Repos />} />
            <Route exact path="/repos/:name" element={<CardDetails />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
