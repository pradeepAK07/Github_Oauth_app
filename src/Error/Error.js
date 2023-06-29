import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <h2 className="error-heading">Oops! Something went wrong.</h2>
      <p className="error-message">
        We apologize for the inconvenience. Please try again later.
      </p>
    </div>
  );
};

export default Error;
