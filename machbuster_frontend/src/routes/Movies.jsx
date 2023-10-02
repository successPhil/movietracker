import { getMovies, getNewMovies, addToWatchlist } from "../api/authApi"
import { useState, useEffect, useContext } from 'react'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MovieCard from "../muiComponents/MovieCard";
import WatchlistSnack from "../muiComponents/WatchlistSnack";
import Typography from "@mui/material/Typography";

export default function Movies() {

    const [movies, setMovies] = useState(null)
    const [movieSearch, setMovieSearch] = useState("")
    const [inputValue, setInputValue] = useState('')
    const [newMovies, setNewMovies] = useState([])
    const [watchlist, setWatchlist ] = useState([])
    
    useEffect(() => {
      const asyncNewMovieData = async () => {
        const newMoviesData = await getNewMovies()
        const unfiltered = newMoviesData.results
        const filtered = unfiltered.filter(movie => (movie.primaryImage !== null))
        const formatted = filtered.map((movie) => ({
          title: movie.originalTitleText.text,
          movieImg: movie.primaryImage.url,
          text: `Expected release: ${movie.releaseDate.year}/${movie.releaseDate.month}/${movie.releaseDate.day}`,
          id: movie.id,
        }))
        setNewMovies(formatted)
      }
      asyncNewMovieData()
    },[]);

    console.log(watchlist)
    
    const onClickHandler = async () => {
      setInputValue('')
      const searchMovies = await getMovies(movieSearch)
      const rawSearch = searchMovies.Search
      console.log(rawSearch)
      const filteredSearch = rawSearch.filter(movie => (movie.Poster !== 'N/A'))
      const formattedSearch = filteredSearch.map((movie)=>({
        title: movie.Title,
        movieImg: movie.Poster,
        text: movie.Year,
        id: movie.imdbID,

      }))
      setMovies(formattedSearch)
    }

    const onChangeHandler = (e) => {
        setInputValue(e.target.value)
        setMovieSearch(e.target.value)
      }
    
    const formatString = (str) => {
      const replacedString = str.replace(/ /g, '&');
      console.log(replacedString);
      return str
    }
    
    const handleKeyDown = async (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        let searchValue = e.target.value
        setMovieSearch(formatString(searchValue))
        setInputValue('')
        const searchMovies = await getMovies(movieSearch)
        const rawSearch = searchMovies.Search
      const filteredSearch = rawSearch.filter(movie => (movie.Poster !== 'N/A'))
      const formattedSearch = filteredSearch.map((movie)=>({
        title: movie.Title,
        movieImg: movie.Poster,
        text: movie.Year,
        id: movie.imdbID,
      }))
        setMovies(formattedSearch)
      }}

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



    return (
        <div>
      <Box className="movie-container">
       <TextField
        onChange={onChangeHandler}
        onKeyDown={handleKeyDown}
        value={inputValue}
        id="search-input"
        color="secondary"
        InputLabelProps={{
          style: { color: '#ffc107'},
          shrink: true, 
        }}
        InputProps={{
          style: { color: '#ffc107', backgroundColor: '#0e3fa9' }}}
        />
        <Button id="search-btn" color="secondary" onClick={onClickHandler} variant="contained">Search</Button>
        </Box>
        <Container >
          {movies ? (<h1></h1>) : (<Typography variant="h1" ml={20} mt={4}>Soon to be released!</Typography> )}
          <Grid container mt={3}>
            {movies ? (
              movies.map((movie, movieidx)=> (
                <MovieCard movie={movie} key={`movie${movieidx}`} toggleWatchlist={toggleWatchlist} handleAddToWatchlist={handleAddToWatchlist} />
              ))
            ) :
            newMovies.map((movie, movieidx)=>(
              <MovieCard movie={movie} toggleWatchlist={toggleWatchlist} handleAddToWatchlist={handleAddToWatchlist} key={`movie${movieidx}`}/>
            ))}
          </Grid>
        </Container>
            </div>
    )
}