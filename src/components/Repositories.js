import React from "react";
import "../App.css";

const Repositories = ({ reposPerPage, currentPage, repos }) => {
  const repoList = repos.map((repo, i) => {
    const { name, description, html_url, stargazers_count, created_at } = repo;
    const listPosition = (currentPage - 1) * reposPerPage + i + 1;
    return (
      <tr key={i} title={description}>
        <th scope="col">{listPosition}</th>
        <td>
          <a id="url" href={html_url} rel="noreferrer" target="_blank">
            {name}
          </a>
        </td>
        <td>{stargazers_count.toLocaleString()}</td>
        <td>{created_at.slice(0, 4)}</td>
      </tr>
    );
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th className="w-15" scope="col">
            #
          </th>
          <th className="w-50" scope="col">
            Name
          </th>
          <th className="w-25" scope="col">
            Stars
          </th>
          <th className="w-30" scope="col">
            Created
          </th>
        </tr>
      </thead>
      <tbody>{repoList}</tbody>
    </table>
  );
};

export default Repositories;
