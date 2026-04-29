import { useId, useState } from "react";
import './Navbar.css'
import { useSearchTitle } from "../hooks/SearchTitleContext";
import lupa from '../icons/lupa.svg'
import menu from '../icons/menu.svg'
import logo from '../logos/logo.png'
import usuario from '../icons/usuario.svg'
import bolso from '../icons/bolso.svg'
import { Cart } from "./Cart";
import { MenuPanel } from "./MenuPanel";
import { useTheme } from "../hooks/UseTheme";
import { UserModals } from "./UserModals";




export function Navbar() {
const { searchTitle, setSearchTitle } = useSearchTitle();
const {theme,toggleTheme} = useTheme()
const searchTitleId = useId()
const [isCartOpen,setIsCartOpen] = useState(false)
const [isMenuOpen,setIsMenuOpen] = useState(false)
const [isUserOpen,setIsUserOpen] = useState(false)


return (
    <>
<nav className="navbar">

    <div className="navbar-left">
    <img src={menu} alt="menu" className="menu"onClick={()=> setIsMenuOpen(true)} />
    <img src={logo} alt="logo" className="logo" />

    <ul>
        <li><a href="/">INICIO</a></li>
        <li><a href="/">HOMBRE</a></li>
        <li><a href="/">MUJER</a></li>
        <li><a href="/">NIÑOS</a></li>
        <li><a href="/">DEPORTE</a></li>
    </ul>
    </div>

    <div className="navbar-center">
    <form className="navbar-search">

        <label htmlFor={searchTitleId}></label>
    <input type="text"
    placeholder="Buscar"
    id={searchTitleId}
    value={searchTitle}
    onChange={(e)=> setSearchTitle(e.target.value)}
        />
        <img src={lupa} alt="lupa" />
    </form>
    </div>

   
    <div className="navbar-right">
        <button onClick={toggleTheme} className="theme-btn">
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    <ul>
        <li>
        <img src={usuario} 
        alt="usuario" 
        onClick={()=>setIsUserOpen(true)}
        style={{cursor: 'pointer'}}
        />
        </li>
        <li className="navbar-shopping"
        onClick={()=> setIsCartOpen(prev => !prev)}
        >
        <img src={bolso} alt="compras" />
        </li>
    </ul>
    </div>

</nav>
        {isCartOpen && <Cart onClose={()=> setIsCartOpen(false)}/>}
            {isMenuOpen && (
                <MenuPanel onClose={()=>setIsMenuOpen(false)}/>
            )}
            {isUserOpen &&(
                <UserModals onClose={()=>setIsUserOpen(false)}/>
            )}
</>
);
}