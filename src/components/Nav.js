import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">MBF</Link></div>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>A propos</li></Link>
        <Link to="/projects"><li>Réalisations</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </nav>
  )
}
