import React, { useContext } from 'react'
import Skillbar from "./Skillbar"
import { GeneralContext } from "../context/AppState"

export default function Skills_bars() {
  const { skills, skills_tags } = useContext(GeneralContext)

  return (
    <section id="skillbars">
      <h2 className="title_deco">Mes compétences</h2>
      <div className="grid">
        {skills.map(skill => <Skillbar skill={skill} key={Math.random()} />)}
      </div>
      <div style={{ width: "40%", margin: "0 auto" }}>
        <div className="tags">
          {skills_tags.map(skill_tag => (
            <div className="tag" key={Math.random()}>{skill_tag}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
