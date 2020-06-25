import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import SearchInput from "./SearchInput";
import Lists from "./Lists";
import {
  getMovies,
  setSearchTextAC,
} from "../redux/reducers/movieSearchReducer";

const Main = (props) => {
  return (
    <div className="main">
      <Header />
      <SearchInput {...props} />
      <br />
      <Lists {...props} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  searchText: state.movieSearchReducer.searchText,
  page: state.movieSearchReducer.page,
  movies: state.movieSearchReducer.results,
  totalPages: state.movieSearchReducer.total_pages,
  totalResults: state.movieSearchReducer.total_results,
});

export default connect(mapStateToProps, { getMovies, setSearchTextAC })(Main);
