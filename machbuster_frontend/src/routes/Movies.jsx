import { getMovies, getNewMovies } from "../api/authApi"
import { useState, useEffect, useContext } from 'react'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ImgMediaCard from "../muiComponents/Card"

export default function Movies() {

    const [movies, setMovies] = useState(null)
    const [selectedMovie, setSelectedMovie] = useState("")
    const [movieSearch, setMovieSearch] = useState("")
    const [inputValue, setInputValue] = useState('')
    const [newMovies, setNewMovies] = useState(null)
    
    useEffect(() => {
        const newMoviesData = getNewMovies()
        // setNewMovies(newMoviesData)


    },[]);

    console.log(newMovies)
    
    
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
    
    const onClickHandler = () => {
        getMovies(movieSearch)
    }

    const onChangeHandler = (e) => {
        setInputValue(e.target.value)
        setMovieSearch(e.target.value)
      }
      console.log(movieSearch, "this")
    
    const formatString = (str) => {
      const replacedString = str.replace(/ /g, '&');
      console.log(replacedString);
      return str
    }
    
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        let searchValue = e.target.value
        setMovieSearch(formatString(searchValue))
      }
    }
    
  
    
    
    
    return (
        <div>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
                    component="form"
                    sx={{
                        display: "flex",
                        justifyContent: "center", // Center horizontally
                        alignItems: "center", // Center vertically
                        flexDirection: "row", // Display items in a row
                        gap: "10px", // Add some spacing between items
                        margin: "20px", // Add margin to the container
                        
                    }}
                    noValidate
                    autoComplete="off"
                >
                        <TextField
                  onChange={onChangeHandler}
                  onKeyDown={handleKeyDown}
                  value={inputValue}
                  id="standard-size-small"
                  size="small"
                  variant="standard"
                />
                <Button sx={{ marginLeft: 5}}onClick={onClickHandler} variant="contained">Search</Button>
                </Box>
                

         
                  <Box                                         sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", // Center horizontally
                        gap: "20px", // Add spacing between elements
                        width: "50%", // Set the width of the container
                        margin: "0 auto", // Center the container horizontally
                    }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Movies</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value=""
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <ImgMediaCard />
            </ThemeProvider>
            
            </div>
    )
}