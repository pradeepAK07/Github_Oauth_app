import React from "react";
import "./CardDetails.css";

const CardDetails = () => {
  return (
    <div className="card">
      <h1 className="author-name">
        <RiGitRepositoryLine className="icon" />
        {repos.full_name}
      </h1>
      <p className="description"> {repos.description}</p>
      <div className="inner-div">
        <p className="lang">{repos.language}</p>
        <p className="commit">
          <VscGitCommit className="icon" />
          {repos.forks}
        </p>
        <p className="owner">{repos.owner.login}</p>
      </div>
    </div>
  );
};
export default CardDetails;
