import React from 'react'
import ReactDOM from 'react-dom/client'
import mainstyles from './main-styles.scss'
import { PokeProvider } from './context/pokeContext'

import { Home } from './routes/Home'
import { Pokemons } from './routes/Pokemons'

import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom';
import { Login } from './routes/login';
import { Pokedex } from './routes/pokedex'
import { Region2 } from './routes/Region2'

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/pokedex',
        element: <Pokedex />
      },
      {
        path: '/mapa',
        element: <Home />
      },
      {
        path: '/mapa2',
        element: <Region2 />
      },
      {
        path: '/meus-pokemons',
        element: <Pokemons />
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokeProvider>
      <RouterProvider router={router} />
    </PokeProvider>
  </React.StrictMode>,
)