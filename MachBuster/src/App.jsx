import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "./muiComponents/AppBar";
import { Outlet } from "react-router-dom";
import axios from 'axios'


function App() {
  const apiKey = import.meta.env.VITE_REACT_API_KEY;

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`http://www.omdbapi.com/?t=Forrest&Gump&apikey=${apiKey}&`)
  //     const data = response.data
  //     console.log(data)

  //   } catch (error) {
  //     console.log("error fetching ", error)

  //   }
  // }
  // fetchData()
  
  return (
    <>
      <ResponsiveAppBar/>
      <Outlet  />
    </>
  );
}

export default App;
