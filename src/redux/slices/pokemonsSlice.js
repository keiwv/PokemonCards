import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    isLoading: Boolean,
  },
  reducers: {
    addPokemon: (state, action) => {
      state.pokemons.push(action.payload)
    },
    removePokemon: (state, action) => {
      state.pokemons = state.pokemons.filter(pokemon => pokemon.name !== action.payload)
    },
    setPokemonList: (state, action) => {
      state.pokemons = action.payload
    },
    clearPokemonList: (state) => {
      state.pokemons= []
    },
  },
})

export const { addPokemon, removePokemon, setPokemonList, clearPokemonList } = pokemonSlice.actions

export default pokemonSlice.reducer
