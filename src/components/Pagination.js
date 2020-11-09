import React from "react";

const Pagination = ({ currentPage, reposPerPage, totalRepos, paginate }) => {
  const pageNumbers = []; // [1,2,3,4,5]
  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginationList = pageNumbers.map((number) => {
    // gives bold font to the current page number
    const boldFont = currentPage === number ? "font-weight-bold" : "";
    return (
      <li key={number} className="page-item">
        <a
          onClick={() => paginate(number)}
          href="#!"
          className={`page-link ${boldFont}`}
        >
          {number}
        </a>
      </li>
    );
  });
  return (
    <nav>
      <ul className="pagination">{paginationList}</ul>
    </nav>
  );
};

export default Pagination;
