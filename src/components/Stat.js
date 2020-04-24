import React from 'react'
import MacAndIphone from "../assets/png_stat_sitePerso.png"

export default function Stat() {
  return (
    <section id="stat">
      <div className="grid">
        <div className="grid_el text">
          <h2>Comment le web peut vous aider ?</h2>
          <i>(Chiffres inventées pour le moment)</i> {/* A MODIFIER EN CHIFFRE VARIABLES */}
          <ul>
            <li>
              <b>75% des gens</b> utilisent internet sur Terre
            </li>
            <li>
              <b>56% des recherches</b> sont faites sur un smartphone
            </li>
            <li>
              Google est le moteur de recherche <b>utilisé par 82% des utilisateurs d'internet</b>
            </li>
          </ul>
        </div>
        <div className="grid_el img" data-aos="fade-up" data-aos-duration="1000">
          <img src={MacAndIphone} alt="Mac and Iphone with website in it"/>
        </div>
      </div>
    </section>
  )
}
