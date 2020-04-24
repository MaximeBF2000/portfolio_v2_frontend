import React from 'react'

export default function Skillbar(props) {
  const { skill } = props
  const { name, color, level } = skill


  return (
    <div className="skillbar">
      <div className="skillbar_title">{name.toUpperCase()}</div>
      <div className="skillbar_bar" style={{
        width: level+"%",
        backgroundColor: color
      }}>{level}%</div>
    </div>
  )
}
