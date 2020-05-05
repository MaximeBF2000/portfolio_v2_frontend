import React from 'react'
import project_defaultImg from "../assets/img_project/project_default.jpg"

export default function ProjectPopup({project, setShowFullProject}) {
  const { name, description, img, tags, link, github } = project

  return (
    <div className="project_popup">
      <div className="popup_exit" onClick={() => setShowFullProject(false)}>x</div>
      <div className="box">
        <img src={img || project_defaultImg} alt="project" />
        <div className="text">
          <h3>{name}</h3>
          <p>
            {description}
          </p>
          <div className="links">
            <p className={link.length > 0 ? "link" : "emptyLink" }>
              <a href={link} target="blank">Visiter le site web</a>
            </p>
            <p className={github.length > 0 ? "link gitLink" : "emptyLink" }>
              <a href={github} target="blank">Visiter Github</a>
            </p>
          </div>
          <div className="tags">
            {tags.map(tag => (
              <div className="tag" title={`tag: ${tag}`}>{tag}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
