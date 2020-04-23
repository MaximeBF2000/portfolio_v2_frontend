import React, { useContext } from 'react'
import Skillbar from "./Skillbar"
import { GeneralContext } from "../context/AppState"

export default function Skills_bars() {
  const { skills } = useContext(GeneralContext)

  return (
    <section id="skillbars">
      <h2 className="title_deco">Mes compétences</h2>
      <div className="grid">
        {skills.map(skill => <Skillbar skill={skill} key={Math.random()} />)}
      </div>
    </section>
  )
}
