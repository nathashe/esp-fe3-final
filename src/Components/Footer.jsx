import React, { useContext } from 'react'
import { ModoDarkContext } from '../context/ModoDarkContext';

const Footer = () => {
  const {  isDark } = useContext(ModoDarkContext);

  return (
        <footer className={isDark ? "dark footer" : "app footer"}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
