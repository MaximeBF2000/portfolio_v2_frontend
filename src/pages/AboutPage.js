import React from 'react'
import CV from "../assets/CV_mbf.png"

import AboutText from "../components/AboutText"
import Skillbars from "../components/Skillbars"
import Parcours from "../components/Parcours"


export default function AboutPage() {
  return (
    <>
      <AboutText />
      <Skillbars />
      <Parcours />
      <div className="container">
        <a id="download_cv_button" href={CV} download>Télécharger mon CV</a>
      </div>
    </>
  )
}
