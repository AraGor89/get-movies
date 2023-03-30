import {
  RESET,
  IS_RESULT,
  SET_ERROR,
  SET_SEARCH_TEXT,
  TOGGLE_IS_FETCHING,
  SET_MOVIES_FULL_INFO,
} from "../types";

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
      };
    case RESET:
      return {
        ...state,
        ...initialaState,
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
