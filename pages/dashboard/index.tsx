import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import FeaturedCard from '../../components/molecules/Featured'
import { useDispatch, useSelector } from 'react-redux';

import FilmCard from '../../components/molecules/FilmCard'
import Navbar from '../../components/molecules/Navbar'
import Sidebar from '../../components/molecules/Sidebar'
import { MoviesTypes } from '../../services/data-types/movies';
import { getDataGenresMovies, getDataMovies } from '../../redux/action/dashboard';

export default function dashboard() {
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const toggleNavbar = () => {
    setToggleViewMode(!toggleViewMode);
  };
  const imageBaseURL = "https://image.tmdb.org/t/p/"
  const dispatch: any = useDispatch();
  const { movies } = useSelector((state: any) => state.dashboardReducer);
  const { genres } = useSelector((state: any) => state.dashboardReducer);

//   function showGenres(movie, id, title) {  
//     console.log('movie id: ' + id + ', movie title: ' + title); 
//     movie.genre_ids.forEach((genres:any) => {
//         const {id, name} = genres;
//         console.log("genre id: " + id + ", genre name: " + name);
//     })
// }

  useEffect(() => {
    console.log("mana dataku", movies)
    dispatch(getDataMovies());
    dispatch(getDataGenresMovies());

  }, []);

  return (
    <div className="bg-streamDark font-poppins">
      {/* <!-- Desktop Only --> */}
      <div className="mx-auto max-w-screen flex">
        <Sidebar toggleViewMode={toggleViewMode}
          toggleNavbar={toggleNavbar} />
        <div className="content ml-[24px] lg: pr-[24px] overflow-hidden">
          <div className="py-[70px] flex flex-col gap-[50px]">
            {/* <!-- Navbar --> */}
            <Navbar toggleNavbar={toggleNavbar} />
            {/* <!-- /Navbar -->

                <!-- Featured --> */}
            <div>
              <div className="font-semibold text-[22px] text-white mb-[18px]">Featured</div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 xl:gap-12">
                {movies.slice(0, 2).map((itemMovie: MoviesTypes) => {
                  return (
                    <FeaturedCard
                      key={itemMovie.id}
                      title={itemMovie.title}
                      poster_path={itemMovie.poster_path}
                      backdrop_path={itemMovie.backdrop_path}
                      release_date={itemMovie.release_date}
                      
                    />
                  );
                })}
              </div>
           </div>
            <div>
              <div className="font-semibold text-[22px] text-white mb-[18px]">Continue Watching</div>
              <div className="flex flex-wrap justify-start items-center lg:-mx-3 -mx-1 watched-movies">
                {movies.map((itemMovie: MoviesTypes) => {
                  return (
                    <FilmCard
                      key={itemMovie.id}
                      title={itemMovie.title}
                      poster_path={itemMovie.poster_path}
                      backdrop_path={itemMovie.backdrop_path}
                      release_date={itemMovie.release_date}
                    />
                  );
                })}
                {/* <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
