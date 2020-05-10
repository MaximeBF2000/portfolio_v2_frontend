import React from 'react'
import profilPic from "../assets/profil_pic.png"
import { MdLocationOn } from "react-icons/md"
import { FaCode } from "react-icons/fa"

export default function About() {
  return (
    <>
      <section id="aboutText">
        <div className="grid">
          <div className="grid_el photo">
            <img src={profilPic} alt="profil" />
            <div className="grid">
              <p>
                <span><MdLocationOn /></span>
                <span>Lyon</span>
              </p>
              <p>
                <span><FaCode /></span>
                <span>Développeur Javascript</span>
              </p>
            </div>
          </div>
          <div className="grid_el text">
            <h2 className="title_deco">A propos de moi</h2>
            <p>
              Développeur web fullstack autodidacte situé sur Lyon et addicte à l'apprentissage, je met mes compétences au service de vos projets pour vous aider à atteindre tout vos objectifs. Avec une maîtrise appronfondi des technologies web accompagnée par une expérience en marketing et en design, je vous accompagne sur le développement de votre présence sur le web.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
