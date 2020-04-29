import React, { useState } from 'react'
import { Link } from "react-router-dom"


export default function Nav() {
  const [navShow, setNavShow] = useState(false)
  const unshowNav = () => setNavShow(false)

  return (
    <nav className="navbar">
      <div className="logo"><Link to="/" onClick={unshowNav}>MBF</Link></div>
      <ul className={navShow ? "open" : ""}>
        <Link to="/" onClick={unshowNav}><li>Accueil</li></Link>
        <Link to="/about" onClick={unshowNav}><li>A propos</li></Link>
        <Link to="/projects" onClick={unshowNav}><li>Réalisations</li></Link>
        <Link to="/contact" onClick={unshowNav}><li>Contact</li></Link>
      </ul>
      <div className="hamburger" onClick={() => setNavShow(!navShow)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  )
}
