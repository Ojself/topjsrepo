import React from "react";
import "../App.css";

const Repositories = ({ reposPerPage, currentPage, repos }) => {
  const repoList = repos.map((repo, i) => {
    const {
      created_at,
      description,
      html_url,
      id,
      name,
      open_issues,
      stargazers_count,
    } = repo;
    const listPosition = (currentPage - 1) * reposPerPage + i + 1;
    return (
      <tr className="d-flex" key={id} title={description}>
        <th className="col-1" scope="col">{listPosition}</th>
        <td className="col-4">
          <a id="url" href={html_url} rel="noreferrer" target="_blank">
            {name}
          </a>
        </td>
        <td className="col-2 text-center">{stargazers_count.toLocaleString()}</td>
        <td className="col-2 text-right">{open_issues.toLocaleString()}</td>
        <td className="col-3 text-center">{new Date(created_at).getFullYear()}</td>
      </tr>
    );
  });

  

  const ghStarSvg =(<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>)

  return (
    <div className="table-responsive bg-white rounded shadow my-5">
    <table className="table table-fixed">
      <thead>
        <tr className="d-flex">
          <th className="col-1" scope="col">
            #
          </th>
          <th className="col-4" scope="col">
            Name
          </th>
          <th className="col-2 text-center" scope="col">
            {ghStarSvg}
          </th>
          <th className="col-2 text-right pr-0" scope="col">
            Open issues
          </th>
          <th className="col-3 text-center" scope="col">
            Created
          </th>
        </tr>
      </thead>
      <tbody>{repoList}</tbody>
    </table>
    </div>
  );
};

export default Repositories;
