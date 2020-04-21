import React, { useEffect } from 'react'
import Typed from "typed.js"
import profilPic from "../assets/profil_pic.png"
import { IoLogoGithub } from "react-icons/io"
import { FaLinkedin, FaFacebook } from "react-icons/fa"

export default function Header() {
  useEffect(() => {
    new Typed(".typed_status h1", {
      strings: [
        "Développeur web Lyon",
        "Créateur d'applications fullstack"
      ],
      typeSpeed: 45,
      backSpeed: 30,
      backDelay: 1000,
      loop: true
    })
  }, [])

  return (
    <header>
      <img src={profilPic} alt="Profil" />
      <div className="header_presentation">
        <div className="typed_status">
          <h1></h1>
        </div>
        <h2>Maxime BOUNAAS-FERRET</h2>
        <div className="socials">
          <a href="https://github.com/MaximeBF2000" target="blank" className="social_icon" data-tooltip="Github"><IoLogoGithub /></a>
          <a href="https://www.facebook.com/Maxime-Bounaas-2057664100953835/" target="blank" className="social_icon" data-tooltip="Facebook"><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/maximebounaasferret/" target="blank" className="social_icon" data-tooltip="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    </header>
  )
}
