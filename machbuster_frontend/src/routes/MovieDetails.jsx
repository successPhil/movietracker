import { useParams } from "react-router-dom";
import { getMovieDetail } from "../api/authApi"
import { useEffect, useState } from "react";

const MovieDetails = () => {
    let { id } = useParams(); // Access the movie ID from route parameters
    const [movieDetail, setMovieDetail] = useState(null)

    useEffect(() => {
        const fetchMovieDetail = async () => {
            const movieData =  await getMovieDetail(id)
            
          
        
        setMovieDetail(movieData)
    }  
        fetchMovieDetail()
      },[]); 

      console.log(id)
      console.log(movieDetail)

    return (
        <div className="route-text">
        <h1>This is a FUCK {id}page</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, molestiae?</p>
        </div>
    )
}

export default MovieDetails