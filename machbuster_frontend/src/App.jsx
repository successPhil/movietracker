import PersistentDrawerLeft from "./muiComponents/PDrawer"
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



function App() {

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [userToken, setUserToken] = useState(null)
  const [checked, setChecked] = useState(false)

  useEffect( () => {
    const token = localStorage.getItem("token")
    console.log(token)
    if(token) {
      setUserToken(token)
    }

  }, [])

  // const handleCheckboxChange = (toggleCheck) => {
  //   setChecked(!toggleCheck)
  // }
  
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
    console.log(!prev, 'lasdgasdgSADGADS')
    setChecked(!prev);
    
  }
  console.log(checked, "from App")

  const handleLogout = () => {
    var keyToRemove = 'token';
  localStorage.removeItem(keyToRemove);
  setUserToken(null)
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  console.log(formData)
  console.log(userToken, "this is user token")
  
  


  return (
    <>
    
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        
    <Router>
    <PersistentDrawerLeft handleLogout={handleLogout } theme={darkTheme} />
     <Routes>
      <Route path="/" element={<Login checked={checked} handleOnClick={handleOnClick} handleInputChange={handleInputChange} formData={formData} handleToken={handleToken} token={userToken} />} />
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
