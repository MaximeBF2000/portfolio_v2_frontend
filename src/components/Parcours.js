import React, { useContext } from 'react'
import { GeneralContext } from "../context/AppState"
import Parcours_step from "./Parcours_step"

export default function Parcours() {
  const { parcours_step } = useContext(GeneralContext)

  return (
    <section id="parcours">
      <h2 className="title_deco">Mon parcours</h2>
      <ul className="parcours_list">
        {parcours_step.map(step => <Parcours_step step={step} />)}
      </ul>
    </section>
  )
}
