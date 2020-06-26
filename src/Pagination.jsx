import React, { useState, useEffect } from "react";
import "./App.css";

const Pagination = ({
  getMovies,
  totalPages,
  currentPage,
  searchText,
  movies,
}) => {
  let [portionSize, setPortionSize] = useState(10);
  let portion = Math.ceil(currentPage / portionSize);
  let portionCount = Math.ceil(totalPages / portionSize);
  let [portionNumber, setPortionNumber] = useState(portion);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  const resizeHandler = () => {
    window.innerWidth <= 900 ? setPortionSize(5) : setPortionSize(10);
  };
  useEffect(() => {
    resizeHandler();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const handlePageChange = (page) => {
    if (searchText) {
      getMovies(page);
    }
  };

  return (
    <div className="paginationContainer">
      <b>
        <p className="paginatioLabel">MOVIES DB SEARCH</p>
      </b>
      <div className="pagination">
        {" "}
        {portionNumber > 1 && (
          <button
            className="prev"
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            PREV
          </button>
        )}
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <span
                className={[
                  currentPage === p ? "selectedPage" : "",
                  "pagesSpan",
                ].join("  ")}
                key={p}
                onClick={() => {
                  handlePageChange(p);
                }}
              >
                {p}
              </span>
            );
          })}
        {portionCount > portionNumber && (
          <button
            className="next"
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            NEXT
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
