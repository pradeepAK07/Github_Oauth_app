import React from "react";
import "./RepoCard.css";
import { RiGitRepositoryLine } from "react-icons/ri";
import { VscGitCommit } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RepoInfo } from "../feature/RepoSlice";

const RepoCard = ({ repos }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CardClick = () => {
    navigate(`/repos/${repos.name}`);
    //dsipatch the repo information to store
    dispatch(RepoInfo(repos));
  };
  return (
    <div className="card" onClick={() => CardClick()}>
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
