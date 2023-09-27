import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'; import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search'

  export const fetchMovies = async () => {
      const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
        headers: {
          'X-RapidAPI-Key': '213a184340msh5ae6dadd8394402p10911ajsn462a6d221ff6',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
      return response.data.results
      } catch (error) {
        console.error(error);
      }
    };

  const Movies = () => {
    const [ movieSearch, setMovieSearch ] = useState("")
    const [ searchData, setSearchData ] = useState(null)
    const movies = useLoaderData(fetchMovies)


    const goodMovies = movies.map((movie) => ({
      title: movie.titleText.text,
      imgUrl: movie.primaryImage
    }))
    console.log(goodMovies)
      

    const fetchSearch = async (searchData) => {
    const apiKey = import.meta.env.VITE_REACT_API_KEY;
    try {
      const response = await axios.get(`http://www.omdbapi.com/?t=${searchData}&apikey=${apiKey}&`)
      const data = response.data
      setMovieSearch('')
      setSearchData(data)

      

    } catch (error) {
      console.log("error fetching ", error)
  }
  }

  const cleanInput = (input) => {
    return input.replace(/\s/g, '&')
  }
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      fetchSearch(cleanInput(movieSearch))
      
    }

  }

    console.log(movies)
    console.log(searchData)
      
      
      // movies.map((movie) => )
      
    

    return (
      <div className='movie-container'>
        <h1 className='movie-title'>Movies</h1>
        <Box sx={{ textAlign: 'center', mt: 2}}>
          <TextField id='outlined-controlled' value={movieSearch} onChange={(e)=> {setMovieSearch(e.target.value)}} onKeyDown={handleEnter} sx={{ height: 550, width: '60%', mr: 1.5 }}></TextField>
          <Button variant="contained" color="primary" onClick={() => fetchSearch(cleanInput(movieSearch))} sx={{ height: '54px', width: '20%', color: '#b2ccff' }}>
          Search
          <SearchIcon />
        </Button>
        </Box>
      </div>
    );
  };

  export default Movies;
