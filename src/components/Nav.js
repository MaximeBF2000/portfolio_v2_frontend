import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
  const showNav = e => {
    let ul
    if(e.target.classList.contains("hamburger")){
      e.target.previousSibling.classList.toggle("open")
    } else {
      e.target.parentNode.previousSibling.classList.toggle("open")
    }
  }

  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">MBF</Link></div>
      <ul>
        <Link to="/"><li>Accueil</li></Link>
        <Link to="/about"><li>A propos</li></Link>
        <Link to="/projects"><li>Réalisations</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
      <div className="hamburger" onClick={showNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  )
}
