import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import BestSellers from './pages/BestSellers.jsx'
import Book from './pages/Book.jsx'
import BestSeller from './pages/BestSeller.jsx'
import Favorites from './pages/Favorites.jsx'
import { AuthProvider } from "./context/AuthContext.jsx"

const paths = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/book/:id',
    element: <Book />
  },
  {
    path: '/bestseller/:id',
    element: <BestSeller />
  },
  {
    path: '/bestsellers',
    element: <BestSellers />
  },
  {
    path: '/favorites',
    element: <Favorites />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={paths} />
    </AuthProvider>
  </React.StrictMode>,
)
