import React, { useContext } from 'react'
import { GeneralContext } from "../context/AppState"
import ParcoursStep from "./ParcoursStep"

export default function Parcours() {
  const { parcours_step } = useContext(GeneralContext)

  return (
    <section id="parcours">
      <h2 className="title_deco">Mon parcours</h2>
      <ul className="parcours_list">
        {parcours_step.map(step => <ParcoursStep step={step} key={Math.random()} />)}
      </ul>
    </section>
  )
}
