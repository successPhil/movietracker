import PersistentDrawerLeft from "./muiComponents/PDrawer"
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./routes/Login";
import About from "./routes/About"
import Contact from "./routes/Contact"
import Movies from "./routes/Movies";
import MovieDetails from "./routes/MovieDetails";



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

  const handleOnClick = () => {
    setChecked(prev => !prev);
  }

  const handleLogout = () => {
    var keyToRemove = 'token';
  localStorage.removeItem(keyToRemove);
  setUserToken(null)
  }

  console.log(formData)
  console.log(userToken, "this is user token")
  
  


  return (
    <>
    <Router>
    <PersistentDrawerLeft handleLogout={handleLogout} />
     <Routes>
      <Route path="/" element={<Login checked={checked} handleOnClick={handleOnClick} handleInputChange={handleInputChange} formData={formData} handleToken={handleToken} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id/details" element={<MovieDetails />} />
     </Routes>
     </Router>
     
     
    </>
  )
}

export default App
