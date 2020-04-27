import React from 'react'
import project_defaultImg from "../assets/img_project/project_default.jpg"

export default function ProjectPopup({project, setShowFullProject}) {
  const { name, description, img, tags } = project

  console.log(tags)

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
          <div className="tags">
            {tags.map(tag => (
              <div className="tag">{tag}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
