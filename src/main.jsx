import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Pokemons from './views/Pokemons.jsx'
import {store} from './redux/store.js'
import Pokemon from './views/Pokemon.jsx'
import { Provider } from 'react-redux'
import Login from './views/Login.jsx'
import Favorite from './views/Favorite.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/PokemonCards'>
        <Provider store={store}>
          <Routes>
            <Route index element={<App />} />
            <Route path='/pokemons' element={<Pokemons />}></Route>
            <Route path='/pokemons/:id' element={<Pokemon />}></Route> 
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/pokemons/favorite' element={<Favorite>404</Favorite>}></Route>
            <Route path='*' element={<h1>404</h1>}></Route>
          </Routes>
        </Provider>
    </BrowserRouter>
  </StrictMode>
)
