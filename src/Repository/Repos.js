import React, { useEffect, useState } from "react";
import axios from "axios";
import RepoCard from "../RepoCard/RepoCard";
import "./Repos.css";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

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
        console.log(repos);
      } catch (error) {
        console.error("Error fetching trending repositories:", error);
        setLoading(false);
      }
    };

    handleTrendingRepos();
  }, []);

  console.log(repos);
  return (
    <div>
      <div className="nav-bar">
        <h2 className="repos-heading">Trending Repositories</h2>
      </div>
      <div className="card-container">
        {loading ? (
          <p>Loading...</p>
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
