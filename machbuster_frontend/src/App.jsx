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

  // const theme = createTheme({
  //   typography: {
  //     h1: {
  //       fontSize: '5rem', // Very large font size for h1
  //     },
  //     h2: {
  //       fontSize: '3.5rem', // Very large font size for h2
  //     },
  //     h3: {
  //       fontSize: '1.8rem', // Large font size for h3
  //     },
  //     h4: {
  //       fontSize: '1.5rem', // Medium-large font size for h4
  //     },
  //     h5: {
  //       fontSize: '1.3rem', // Medium font size for h5
  //     },
  //     h6: {
  //       fontSize: '1rem', // Medium font size for h6
  //     },
  //   },
  //   // Add other theme configurations
  //   palette: {
  //     mode: 'dark',
  //     primary: {
  //       main: '#7e57c2',
  //     },
  //     // Add more palette options as needed
  //   },
  // });

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
