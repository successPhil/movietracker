import PersistentDrawerLeft from "./muiComponents/Drawer"
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./routes/Login";
import About from "./routes/About"
import Contact from "./routes/Contact"
import Movies from "./routes/Movies";
import MovieDetails from "./routes/MovieDetails";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Watchlist from "./components/Watchlist";
import blockbusterTheme from "./muiComponents/BlockBusterTheme";
import { Typography } from "@mui/material";
import machbuster from "./images/machbuster.jpeg"


function App() {

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [userToken, setUserToken] = useState(null)
  const [checked, setChecked] = useState(false)
  const [signUp, setSignUp ] = useState(false)

  useEffect( () => {
    const token = localStorage.getItem("token")
    console.log(token)
    if(token) {
      setUserToken(token)
    }

  }, [])

  const handleToken = (token) => {
    setFormData({ username: '', password: '' })
    localStorage.setItem("token", token)
    setUserToken(token)
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnClick = (prev) => {
    setChecked(!prev);
  }

  const handleSignUp = () => {
    setSignUp(true)
  }

  const handleLogout = () => {
    var keyToRemove = 'token';
  localStorage.removeItem(keyToRemove);
  setUserToken(false)
  setSignUp(false)
  }

  const theme = blockbusterTheme




  return (
    <>
    <ThemeProvider theme={theme}>
        <CssBaseline />
    <Router>
    <PersistentDrawerLeft handleLogout={handleLogout} theme={theme}/>
     <Routes>
      <Route path="/" element={<Login checked={checked} handleOnClick={handleOnClick} handleInputChange={handleInputChange} formData={formData} handleToken={handleToken} token={userToken} signUp={signUp} handleSignUp={handleSignUp} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id/details" element={<MovieDetails />} />
      <Route path="/watchlist" element={<Watchlist />} />
     </Routes>
     </Router>
     </ThemeProvider>
     
     
    </>
  )
}

export default App
