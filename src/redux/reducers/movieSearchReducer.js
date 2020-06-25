import { searchAPI } from "./../../api";

const initialaState = {
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
  searchText: "",
  isResult: true,
  error: "",
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
    case IS_RESULT:
      return {
        ...state,
        isResult: action.isResult,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
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

const IS_RESULT = "IS_RESULT";
const isResultAC = (isResult) => ({ type: IS_RESULT, isResult });
const SET_ERROR = "SET_ERROR";
const setErrorAC = (error) => ({ type: SET_ERROR, error });

export const getMovies = (currentPage) => (dispatch, getState) => {
  const searchText = getState().movieSearchReducer.searchText;
  searchAPI
    .searchMovies(searchText, currentPage)
    .then((response) => {
      let { page, results, total_results, total_pages } = response.data;
      dispatch(setMoviesFullInfoAC(page, results, total_results, total_pages));
      dispatch(setErrorAC(""));
      response.data.total_pages
        ? dispatch(isResultAC(true))
        : dispatch(isResultAC(false));
    })
    .catch((errors) => {
      dispatch(setErrorAC(errors.message));
    });
};
