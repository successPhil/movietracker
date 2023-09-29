import { getMovies, getNewMovies } from "../api/authApi"
import { useState, useEffect, useContext } from 'react'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ImgMediaCard from "../components/Card"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function Movies() {

    const [movies, setMovies] = useState(null)
    const [movieSearch, setMovieSearch] = useState("")
    const [inputValue, setInputValue] = useState('')
    const [newMovies, setNewMovies] = useState([])
    
    useEffect(() => {
      const asyncNewMovieData = async () => {
        const newMoviesData = await getNewMovies()
        const unfiltered = newMoviesData.results
        const filtered = unfiltered.filter(movie => (movie.primaryImage !== null))
        const formatted = filtered.map((movie) => ({
          title: movie.originalTitleText.text,
          movieImg: movie.primaryImage.url,
          text: `Expected release: ${movie.releaseDate.year}/${movie.releaseDate.month}/${movie.releaseDate.day}`

        }))
        setNewMovies(formatted)

      }
      asyncNewMovieData()
    },[]);

    console.log(newMovies)
    console.log(movies)
    
    
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
    
    const onClickHandler = async () => {
      setInputValue('')
      const searchMovies = await getMovies(movieSearch)
      const rawSearch = searchMovies.Search
      const filteredSearch = rawSearch.filter(movie => (movie.Poster !== 'N/A'))
      const formattedSearch = filteredSearch.map((movie)=>({
        title: movie.Title,
        movieImg: movie.Poster,
        text: movie.Year,
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
      }))
        setMovies(formattedSearch)
      }
    }
    
    return (
        <div>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box className="movie-container">
       <TextField
        onChange={onChangeHandler}
        onKeyDown={handleKeyDown}
        value={inputValue}
        id="search-input"
        variant="filled"
        />
        <Button id="search-btn" onClick={onClickHandler} variant="contained">Search</Button>
        </Box>
        <Container >
          <Grid container mt={3}>
            {movies ? (
              movies.map((movie, movieidx)=> (
                <ImgMediaCard movie={movie} key={`movie${movieidx}`} />
              ))
            ) :
            newMovies.map((movie, movieidx)=>(
              <ImgMediaCard movie={movie} key={`movie${movieidx}`}/>
            ))}
          </Grid>
        </Container>
            </ThemeProvider>
            </div>
    )
}