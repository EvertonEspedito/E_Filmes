import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router-dom";
//Componentes
import './index.css'
  //Comp Principal
import App from './App.jsx'
  //Paginas
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import Movie from './pages/Movie.jsx'
import Sobre from './pages/About'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/"  element={<Home/>}></Route>
          <Route path="movie/:id"  element={<Movie/>}></Route>
          <Route path="search"  element={<Search/>}></Route>
          <Route path="sobre"  element={<Sobre/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
