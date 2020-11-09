import React, { useState, useEffect } from "react";
import axios from "axios";
import ghlogo from "./ghlogo.png";

import "./App.css";
import Repositories from "./components/Repositories";
import Pagination from "./components/Pagination";

const REPO_PER_PAGE = 20;
const URL =
  "https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [currentPage, setCurrentPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  // Renders error to front page and prints error message if fetch fails
  const errHandler = (error) => {
    console.error(`An error occured:\n${error}`);
    setErrorMessage(JSON.stringify(error));
    setTimeout(() => {
      setErrorMessage("");
    }, 8000);
  };
  useEffect(() => {
    const getRepos = async () => {
      try {
        const result = await axios.get(URL);
        setRepos(result.data.items);
        setLoading(false);
      } catch (error) {
        errHandler(error);
      }
    };
    getRepos();
  }, []);

  const indexOfLastRepo = currentPage * REPO_PER_PAGE;
  const indexOffirstRepo = indexOfLastRepo - REPO_PER_PAGE;
  const currentRepos = repos.slice(indexOffirstRepo, indexOfLastRepo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const mainContent = loading ? (
    <img src={ghlogo} className="spinner-loading" alt="loading" />
  ) : (
    <>
      <Pagination
        currentPage={currentPage}
        reposPerPage={REPO_PER_PAGE}
        totalRepos={repos.length}
        paginate={paginate}
      />
      <Repositories
        reposPerPage={REPO_PER_PAGE}
        currentPage={currentPage}
        repos={currentRepos}
      />
      <Pagination
        currentPage={currentPage}
        reposPerPage={REPO_PER_PAGE}
        totalRepos={repos.length}
        paginate={paginate}
      />
    </>
  );

  return (
    <div className="container d-flex flex-column my-5 align-items-center">
      {errorMessage && <h4 id="errorMessage">{errorMessage}</h4>}
      {mainContent}
    </div>
  );
};

export default App;
