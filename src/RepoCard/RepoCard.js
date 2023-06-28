import React from "react";
import "./RepoCard.css";
import { RiGitRepositoryLine } from "react-icons/ri";
import { VscGitCommit } from "react-icons/vsc";
import { GrLanguage } from "react-icons/gr";

const RepoCard = ({ repos }) => {
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
export default RepoCard;
