import React from "react";

const Pagination = ({ currentPage, reposPerPage, totalRepos, paginate }) => {
  const pageNumbers = []; // [1,2,3,4,5]
  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number, i) => {
          // gives bold font to the current page number
          const boldFont = currentPage === number ? "font-weight-bold" : "";
          return (
            <li key={i} className={`page-item ${boldFont}`}>
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
