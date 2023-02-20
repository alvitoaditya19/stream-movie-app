import React from 'react'
import { MoviesTypes } from '../../../services/data-types/movies';

export default function FeaturedCard(props: Partial<MoviesTypes>) {
    const { title, voteAverage, overview, release_date,genres, backdrop_path, poster_path } = props
    const imageBaseURL = "https://image.tmdb.org/t/p/";
    

    const linkPoster = `${imageBaseURL}/w500/${backdrop_path ?? poster_path}`
    return (
        <div className="col-span-1 relative overflow-hidden group">
            <img src={linkPoster} className="object-cover block w-full rounded-[30px]" alt="" />
            <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px] z-10 translate-y-0 group-hover:translate-y-[300px] transition ease-in-out duration-500 group-hover:bg-transparent">
                <div className="px-7 pb-7">
                    <div className="font-medium text-xl text-white">{title}</div>

                    <p className="mb-0 text-streamGray text-base mt-[10px]">{genres}</p>
                    <p className="mb-0 text-streamGray text-base mt-[10px]">{release_date}</p>

                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
                  -translate-x-1/2 z-20 transition ease-in-out duration-500">
                <img src="/images/ic_play.svg" className="" width="80" alt="" />
            </div>
            <a href="" className="inset-0 absolute z-50"></a>
        </div>
    )
}
