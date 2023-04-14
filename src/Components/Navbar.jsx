import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ModoDarkContext } from '../context/ModoDarkContext';

const Navbar = () => {
  const { isModoOscuro, setIsModoOscuro } = useContext(ModoDarkContext);
  const handleModoDark = () => {
    if (isModoOscuro) {
      setIsModoOscuro(false)
    } else {
      setIsModoOscuro(true)
    }
  }
  return (
    <nav className={isModoOscuro ? "dark" : "app"}>
      <div className='navi'>
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
