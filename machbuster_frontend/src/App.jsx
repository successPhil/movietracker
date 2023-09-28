import PersistentDrawerLeft from "./muiComponents/PDrawer"
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./routes/Login";
import About from "./routes/About"
import Contact from "./routes/Contact"
import Movies from "./routes/Movies";
// import { create } from "zustand"

// const useTokenStore = create((set) => ({
//   token: null,
//   setToken: (newToken) => set({ token: newToken }),
//   clearToken: () => set({ token: null }),
// }));

function App() {
  


  return (
    <>
    <Router>
    <PersistentDrawerLeft />
     <Routes>
      <Route path="/" element={<Login  />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/movies" element={<Movies />} />
     </Routes>
     </Router>
     
     
    </>
  )
}

export default App
