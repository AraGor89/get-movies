import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Pagination from "./Pagination";
import SearchInput from "./SearchInput";
import Lists from "./Lists";
import Error from "./Error";
import NoResult from "./NoResult";
import Loading from "./Loading";
import {
  getMovies,
  setSearchTextAC,
} from "../redux/reducers/movieSearchReducer";

const Main = ({
  searchText,
  currentPage,
  movies,
  totalPages,
  isResult,
  error,
  setSearchTextAC,
  getMovies,
  isFetching,
}) => {
  return (
    <div className="main">
      <Header />
      <Pagination
        searchText={searchText}
        getMovies={getMovies}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      <SearchInput
        searchText={searchText}
        setSearchTextAC={setSearchTextAC}
        getMovies={getMovies}
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
  searchText: state.movieSearchReducer.searchText,
  currentPage: state.movieSearchReducer.page,
  movies: state.movieSearchReducer.results,
  totalPages: state.movieSearchReducer.total_pages,
  isResult: state.movieSearchReducer.isResult,
  error: state.movieSearchReducer.error,
  isFetching: state.movieSearchReducer.isFetching,
});

export default connect(mapStateToProps, { getMovies, setSearchTextAC })(Main);
