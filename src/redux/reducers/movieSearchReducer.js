import { searchAPI } from "./../../api";

const initialaState = {
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
  searchText: "",
  isResult: true,
  error: "",
  isFetching: false,
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
        results: [],
        total_pages: 0,
        page: 1,
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
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
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

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
const IS_RESULT = "IS_RESULT";
const isResultAC = (isResult) => ({ type: IS_RESULT, isResult });
const SET_ERROR = "SET_ERROR";
const setErrorAC = (error) => ({ type: SET_ERROR, error });

export const getMovies = (currentPage) => (dispatch, getState) => {
  const searchText = getState().movieSearchReducer.searchText;
  dispatch(toggleIsFetching(true));
  searchAPI
    .searchMovies(searchText, currentPage)
    .then((response) => {
      let { page, results, total_results, total_pages } = response.data;
      dispatch(setMoviesFullInfoAC(page, results, total_results, total_pages));
      dispatch(setErrorAC(""));
      dispatch(toggleIsFetching(false));
      response.data.total_pages
        ? dispatch(isResultAC(true))
        : dispatch(isResultAC(false));
    })
    .catch((errors) => {
      dispatch(setErrorAC(errors.message));
    });
};
