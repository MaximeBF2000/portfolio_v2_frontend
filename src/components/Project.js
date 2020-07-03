import React, { useState } from 'react'
import project_defaultImg from "../assets/img_project/project_default.jpg"

import ProjectPopup from "./ProjectPopup"

export default function Project({project}) {
  const [showFullProject, setShowFullProject] = useState(false)

  const shortenString = str => {
    if(str.length >= 100) return str.slice(0, 100) + "..."
    else return str
  }

  return (
    <>
      {showFullProject ? <ProjectPopup project={project} setShowFullProject={setShowFullProject} /> : <></>}
      <div className="grid_el" onClick={() => setShowFullProject(true)}>
        <div className="img">
          <img src={project.img || project_defaultImg} alt="project"/>
        </div>
        <div className="text">
          <h3>{project.name}</h3>
          <p>
            {shortenString(project.description)}
          </p>
          <div className="tags">
            {project.tags.map(tag => (
              <div className="tag" title={`tag: ${tag}`} key={Math.random()}>{tag}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
