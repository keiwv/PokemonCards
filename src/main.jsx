import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/AppContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Pokemons from './views/Pokemons.jsx'
import { Provider } from 'react-redux'
import {store} from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Provider store={store}>
          <Routes>
            <Route index element={<App />} />
            <Route path='/pokemons' element={<Pokemons />}></Route>
            {/* <Route path='/pokemon/:id' element={Pokemon />}></Route> */}
          </Routes>
        </Provider>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
)
