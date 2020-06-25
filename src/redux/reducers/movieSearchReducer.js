import { searchAPI } from "./../../api";

const initialaState = {
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
  searchText: "",
};

const movieSearchReducer = (state = initialaState, action) => {
  switch (action.type) {
    case SET_MOVIES_FULL_INFO:
      return {
        ...state,
        ...action.payload,
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.searchText,
      };
    default:
      return state;
  }
};
export default movieSearchReducer;

const SET_MOVIES_FULL_INFO = "SET_MOVIES_FULL_INFO";
const setMoviesFullInfoAC = (page, results, total_results, total_pages) => ({
  type: SET_MOVIES_FULL_INFO,
  payload: { page, results, total_results, total_pages },
});

const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";
export const setSearchTextAC = (searchText) => ({
  type: SET_SEARCH_TEXT,
  searchText,
});

export const getMovies = () => (dispatch, getState) => {
  const searchText = getState().movieSearchReducer.searchText;
  searchAPI
    .searchMovies(searchText)
    .then((response) => {
      let { page, results, total_results, total_pages } = response.data;
      dispatch(setMoviesFullInfoAC(page, results, total_results, total_pages));
    })
    .catch((err) => {
      alert(err);
    });
};
