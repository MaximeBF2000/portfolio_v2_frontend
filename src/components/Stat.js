import React from 'react'
import MacAndIphone from "../assets/png_stat_sitePerso.png"

export default function Stat() {
  return (
    <section id="stat">
      <div className="grid">
        <div className="grid_el text">
          <h2>Comment le web peut vous aider ?</h2>
          <i>(Ces chiffres peuvent évoluer avec le temps)</i>
          <ul>
            <li>
              <b>57% de la population mondiale</b> utilise internet
            </li>
            <li>
              <b>65% des recherches Google</b> sont faites sur smartphone
            </li>
            <li>
              <b>60% des recherches internet</b> sont faites sur Google
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
