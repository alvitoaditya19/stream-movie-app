export interface GenresId{
    id:string,
    name:string
}

export interface MoviesTypes {
    id: string;
    title: string,
    voteAverage: number,
    overview: string,
    backdrop_path: string,
    poster_path: string,
    release_date: String,
    genres: GenresId
}
