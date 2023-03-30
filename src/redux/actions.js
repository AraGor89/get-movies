import { searchAPI } from "../api";
import {
  RESET,
  IS_RESULT,
  SET_ERROR,
  SET_SEARCH_TEXT,
  TOGGLE_IS_FETCHING,
  SET_MOVIES_FULL_INFO,
} from "./types";

const setMoviesFullInfoAC = (page, results, total_results, total_pages) => ({
  type: SET_MOVIES_FULL_INFO,
  payload: { page, results, total_results, total_pages },
});

const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

const isResultAC = (isResult) => ({ type: IS_RESULT, isResult });

const setErrorAC = (error) => ({ type: SET_ERROR, error });

export const setSearchTextAC = (searchText) => ({
  type: SET_SEARCH_TEXT,
  searchText,
});

export const resetAC = () => ({ type: RESET });

export const getMovies = (currentPage) => (dispatch, getState) => {
  const searchText = getState().movieSearchReducer.searchText;
  dispatch(toggleIsFetchingAC(true));
  searchAPI
    .searchMovies(searchText, currentPage)
    .then((response) => {
      let { page, results, total_results, total_pages } = response.data;
      // NOTE: don't know why but even when there is no results the total_pages length is 1
      const totalPages = total_pages > 1 ? total_pages : 0;
      dispatch(setMoviesFullInfoAC(page, results, total_results, totalPages));
      dispatch(setErrorAC(""));
      dispatch(toggleIsFetchingAC(false));
      response?.data?.total_results
        ? dispatch(isResultAC(true))
        : dispatch(isResultAC(false));
    })
    .catch((errors) => {
      dispatch(setErrorAC(errors.message));
    });
};
