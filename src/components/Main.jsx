import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Pagination from "./Pagination";
import SearchInput from "./SearchInput";
import Lists from "./Lists";
import Error from "./Error";
import NoResult from "./NoResult";
import Loading from "./Loading";
import { resetAC, getMovies, setSearchTextAC } from "../redux/actions";

const Main = ({
  error,
  movies,
  resetAC,
  isResult,
  getMovies,
  totalPages,
  isFetching,
  searchText,
  currentPage,
  total_results,
  setSearchTextAC,
}) => {
  return (
    <div className="main">
      <Header />
      <Pagination
        getMovies={getMovies}
        totalPages={totalPages}
        searchText={searchText}
        currentPage={currentPage}
      />
      <SearchInput
        resetAC={resetAC}
        getMovies={getMovies}
        searchText={searchText}
        total_results={total_results}
        setSearchTextAC={setSearchTextAC}
      />
      {error ? (
        <Error error={error} />
      ) : (
        <div>
          {isFetching ? (
            <Loading />
          ) : (
            <div>{isResult ? <Lists movies={movies} /> : <NoResult />}</div>
          )}
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  error: state.movieSearchReducer.error,
  movies: state.movieSearchReducer.results,
  currentPage: state.movieSearchReducer.page,
  isResult: state.movieSearchReducer.isResult,
  searchText: state.movieSearchReducer.searchText,
  isFetching: state.movieSearchReducer.isFetching,
  totalPages: state.movieSearchReducer.total_pages,
  total_results: state.movieSearchReducer.total_results,
});

export default connect(mapStateToProps, {
  resetAC,
  getMovies,
  setSearchTextAC,
})(Main);
