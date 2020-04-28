import React, { useContext } from 'react'
import { GeneralContext } from "../context/AppState"

import Project from "./Project"

export default function Projects() {
  const { projects } = useContext(GeneralContext)

  return (
    <section id="projects">
      <div className="text_block">
        <h2 className="title_deco">Quelques une de mes réalisations</h2>
        <i>Ces informations peuvent être modifiées à tout moment</i>
      </div>
      <div className="grid">
        {projects.map(project => <Project project={project} key={Math.random()}/>)}
      </div>
    </section>
  )
}
