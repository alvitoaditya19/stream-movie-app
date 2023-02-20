import axios from "axios";
import { useSelector } from "react-redux";

const apiKey = "2e68950377f4884733ac3251e138ad90";
const imageBaseURL = "https://image.tmdb.org/t/p/";

const MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
// const { movies } = useSelector((state: any) => state.dashboardReducer);

export const getDataMovies = () => (dispatch: any) => {
  axios.get(`${MOVIES_URL}`)
    .then((res) => {
      dispatch({ type: 'SET_MOVIES', value: res.data.results });

    })
    .catch((err) => {
      console.log(err)
    });
};

export async function getDataMoviess() {
  const response = await axios.get(`${MOVIES_URL}`)
    .then((res) => {
      return res.data

    })
    .catch((err) => {
      console.log(err)
    });
  const axiosResponse = response.results;
  return axiosResponse;
};

export const getDataGenresMovies= () => (dispatch: any) => {

   axios.get(`${GENRE_URL}`)
    .then((res) => {
      const genres = res.data.genres.reduce((genres : any, gen :any) => {
        const { id, name } = gen
        genres[id] = name
        return genres
      }, [])
      dispatch({ type: 'SET_GENRES_MOVIES', value:genres });

    })
    .catch((err) => {
      console.log(err)
    });
};