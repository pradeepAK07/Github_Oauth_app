import React from "react";
import "./CardDetails.css";
import { RiGitRepositoryLine } from "react-icons/ri";
import { useSelector } from "react-redux/es/hooks/useSelector";

const CardDetails = () => {
  //getting the repo data
  const repo = useSelector((state) => state.RepoInfo.GetRepo);
  console.log(repo);
  const desc =
    repo.description == null ? "No description available" : repo.description;
  const language = repo.language == null ? "No data" : repo.language;
  return (
    <div className="card-flex">
      <div className="repo-card">
        <h1 className="repo-author-name">
          <RiGitRepositoryLine className="repo-icon" />
          {repo.full_name}
        </h1>
        <div className="p-details">
          <p className="repo-description">Description: {desc}</p>
          <p className="repo-lang">language : {language}</p>
          <p className="repo-commit">Forks : {repo.forks}</p>
          {/* <p className="repo-owner">owner : {repo.owner.login}</p> */}
          <p className="branch">Default branch : {repo.default_branch}</p>
          <p className="Profile">Profile URL : {repo.owner.html_url}</p>
          <p className="visibility">Visibility : {repo.visibility}</p>
          <p className="stars">Stars : {repo.stargazers_count}</p>
          <p className="repo-url"> Repository URL : {repo.svn_url}</p>
          <p className="updated_at">updated at : {repo.updated_at}</p>
        </div>
      </div>
    </div>
  );
};
export default CardDetails;
