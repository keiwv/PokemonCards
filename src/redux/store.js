import { configureStore } from '@reduxjs/toolkit'
import  pokemonList  from './slices/pokemonsSlice'

export default configureStore({
  reducer: {
    pokemon: pokemonList,
  },
})