import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Pagination from "./../Pagination";
import SearchInput from "./SearchInput";
import Lists from "./Lists";
import Error from "./Error";
import NoResult from "./NoResult";

import {
  getMovies,
  setSearchTextAC,
} from "../redux/reducers/movieSearchReducer";

const Main = (props) => {
  return (
    <div className="main">
      <Header />
      <Pagination {...props} />
      <SearchInput {...props} />
      <br />
      {props.error ? (
        <Error {...props} />
      ) : (
        <div> {props.isResult ? <Lists {...props} /> : <NoResult />}</div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  searchText: state.movieSearchReducer.searchText,
  currentPage: state.movieSearchReducer.page,
  movies: state.movieSearchReducer.results,
  totalPages: state.movieSearchReducer.total_pages,
  totalResults: state.movieSearchReducer.total_results,
  isResult: state.movieSearchReducer.isResult,
  error: state.movieSearchReducer.error,
});

export default connect(mapStateToProps, { getMovies, setSearchTextAC })(Main);
