import axios from 'axios';

const apiKey = "2e68950377f4884733ac3251e138ad90";
const imageBaseURL = "https://image.tmdb.org/t/p/";

const MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`

export async function getMovies() {


  const response = await axios.get(MOVIES_URL);
  const axiosResponse = response.data.results;

  return axiosResponse;
}

export async function getGenres() {

  const response = await axios.get(GENRE_URL);
  const axiosResponse = response.data.genres;

  return axiosResponse;
}
