import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetail, addToWatchlist } from "../api/authApi"
import { useEffect, useState } from "react";
import DetailMovieCard from "../muiComponents/DetailMovieCard";

const MovieDetails = () => {
    let { id } = useParams(); // Access the movie ID from route parameters
    const [movieDetail, setMovieDetail] = useState(null)
    const [watchlist, setWatchlist ] = useState([])
    const navigate = useNavigate()

    const toggleWatchlist = (moviepick) => {
      const alreadyAdded = watchlist.some((movie) => (movie.id === moviepick.id))
      if (!alreadyAdded){
        setWatchlist((prev)=> [
          ...prev, {id: moviepick.id, title: moviepick.title, img: moviepick.movieImg}
        ])
      }
      
    }

    const handleAddToWatchlist = async (movieId, movieName, movieImg) => {
      await addToWatchlist(movieId, movieName, movieImg);
      console.log(`${movieName} added to list`)
    };

    useEffect(() => {
        const fetchMovieDetail = async () => {
            const movieData =  await getMovieDetail(id)
            console.log(movieData)
            const formattedMovieData = {
              id: movieData.imdbID,
              title: movieData.Title,
              movieImg: movieData.Poster,
              plot: movieData.Plot,
              duration: movieData.Runtime,
              rating: movieData.imdbRating,
              rated: movieData.Rated,
              metascore: movieData.Metascore,
            }
        setMovieDetail(formattedMovieData)
    }  
        fetchMovieDetail()
      },[]); 


      

      const handleBack = () => {
        console.log('calling handleBack')
        return navigate("/movies")
      }
      console.log(movieDetail)
    return (
    <>
    {movieDetail && (<>
    <DetailMovieCard movie={movieDetail} toggleWatchlist={toggleWatchlist} handleAddToWatchlist={handleAddToWatchlist} />

</>)}
</>)
}

export default MovieDetails