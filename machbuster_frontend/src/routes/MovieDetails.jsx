import { useParams } from "react-router-dom";

const MovieDetails = () => {
    let { id } = useParams(); // Access the movie ID from route parameters
      
    return (
        <div className="route-text">
        <h1>This is a FUCK {id}page</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, molestiae?</p>
        </div>
    )
}

export default MovieDetails