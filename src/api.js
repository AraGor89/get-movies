import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";
const apiKey = "1b8033f1e7b194b6febf10ac6410336b";

// export const searchMovies = (movieName) => {
//   return axios.get(
//     `${baseURL}search/movie?query=${movieName}&api_key=${apiKey}&page=1`
//   );
// };

export const searchAPI = {
  searchMovies(movieName, page = 1) {
    return axios.get(
      `${baseURL}search/movie?query=${movieName}&api_key=${apiKey}&page=${page}`
    );
  },
};
