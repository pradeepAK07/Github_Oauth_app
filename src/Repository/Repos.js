import React, { useEffect, useState } from "react";
import axios from "axios";
import RepoCard from "../RepoCard/RepoCard";
import "./Repos.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import DropDown from "../Dropdown/DropDown";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  //getting the redux dropdown value
  const dropDownvalue = useSelector((state) => state.dropDown.value);

  //setting the state with api
  useEffect(() => {
    const handleTrendingRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/search/repositories",
          {
            params: {
              q: "created:>2023-06-21 sort:stars-desc",
              per_page: 20,
            },
          }
        );

        const trendingRepos = response.data.items;
        setRepos(trendingRepos);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    handleTrendingRepos();
  }, []);

  //filtering the dropdown
  useEffect(() => {
    const filterRepos = repos.filter((val) => {
      return val?.language === dropDownvalue;
    });
    console.log("use effect drop");
    setRepos(filterRepos);
  }, [dropDownvalue]);

  return (
    <div>
      <div className="nav-bar">
        <h2 className="repos-heading">Trending Repositories</h2>
        <DropDown />
      </div>
      <div className="card-container">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <>
            {repos.map((repo) => (
              <RepoCard key={repo.id} repos={repo} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Repos;
