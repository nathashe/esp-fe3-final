import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (

    <nav>
        <div className='navi'>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        
        <button >
          boton modo Dark
        </button>
       
       
      </div>
    </nav>
  )
}
export default Navbar
