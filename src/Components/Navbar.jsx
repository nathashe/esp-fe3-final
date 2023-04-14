import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ModoDarkContext } from '../context/ModoDarkContext';

const Navbar = () => {
  const {  isDark, setIsDark } = useContext(ModoDarkContext);
  const handleModoDark = () => {
    if (isDark) {
      setIsDark(false)
    } else {
      setIsDark(true)
    }
  }
  return (
    <nav className={isDark ? "dark" : "app"}>
      <div className='nav'>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>

        <button onClick={handleModoDark}>
          boton modo Dark
        </button>


      </div>
    </nav>
  )
}
export default Navbar
