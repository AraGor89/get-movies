import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const searchAPI = {
  searchMovies(movieName, page = 1) {
    return axios.get(
      `${baseURL}search/movie?query=${movieName}&api_key=${apiKey}&page=${page}`
    );
  },
};
