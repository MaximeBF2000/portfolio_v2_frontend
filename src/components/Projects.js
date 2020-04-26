import React, { useContext, useState, Fragment } from 'react'
import { GeneralContext } from "../context/AppState"
import project_defaultImg from "../assets/img_project/project_default.jpg"

import ProjectPopup from "./ProjectPopup"

export default function Projects() {
  const { projects } = useContext(GeneralContext)
  const [showFullProject, setShowFullProject] = useState(false)

  return (
    <section id="projects">
      <div className="text_block">
        <h2 className="title_deco">Quelques une de mes réalisations</h2>
        <i>Ces informations peuvent être modifiées à tout moment</i>
      </div>
      <div className="grid">
        {projects.map(project => {
          return (
            <Fragment key={Math.random()}>
              {showFullProject ? <ProjectPopup project={project} setShowFullProject={setShowFullProject}/> : <></>}
              <div className="grid_el" onClick={() => setShowFullProject(true)}>
                <div className="img">
                  <img src={project.img || project_defaultImg} alt="project"/>
                </div>
                <div className="text">
                  <h3>{project.name}</h3>
                  <p>
                    {project.description}
                  </p>
                  <div className="tags">
                    {project.tags.map(tag => (
                      <div className="tag" title={`tag: ${tag}`} key={Math.random()}>{tag}</div>
                    ))}
                  </div>
                </div>
              </div>
            </Fragment>
          )
        })}
      </div>
    </section>
  )
}
