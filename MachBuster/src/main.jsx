import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import Movies, {fetchMovies} from './routes/Movies.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "Movies/",
        element: <Movies />,
        loader:fetchMovies,
      },
      {
        path: "Contact/",
        element: <Contact />,
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
