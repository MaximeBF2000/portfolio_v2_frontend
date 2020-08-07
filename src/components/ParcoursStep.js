import React from 'react'

export default function Parcours_step({ step }) {
  const { date, name, description } = step

  return (
    <li className="parcours_listItem" data-aos="fade-up" data-aos-duration="1000">
      <div className="date"> {date} </div>
      <h3 className="title"> {name} </h3>
      <p className="description"> {description} </p>
    </li>
  )
}
