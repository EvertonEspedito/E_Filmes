import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
//Icones
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";
//Importar CSS
import './Navbar.css';


const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!search) return
    navigate(`/search?q=${search}`);
    setSearch("");
  }

  return (
        <nav id="navbar">
            <h2>
              <Link to="/"><BiCameraMovie/> E - Filmes</Link>
            </h2>
            <nav className='btns-menu'>
              <Link to="sobre">Sobre</Link>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Busque um Filmes'  onChange={(e)=>setSearch(e.target.value)} value={search}/>
                <button type='submit'>
                    <BiSearchAlt2/>
                </button>
              </form>
            </nav>

        </nav>
  );
}

export default Navbar
