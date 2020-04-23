import React from 'react'
import profilPic from "../assets/profil_pic.png"
import { MdLocationOn } from "react-icons/md"
import { FaCode } from "react-icons/fa"

export default function About() {
  return (
    <>
      <section id="aboutText">
        <div className="grid">
          <div className="grid_el photo">
            <img src={profilPic} alt="profil" />
            <div className="grid">
              <p>
                <span><MdLocationOn /></span>
                <span>Lyon</span>
              </p>
              <p>
                <span><FaCode /></span>
                <span>Développeur Javascript</span>
              </p>
            </div>
          </div>
          <div className="grid_el text">
            <h2>A propos de moi</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ipsa exercitationem nihil temporibus voluptatem error nostrum enim ipsam distinctio! Et facere voluptate ratione quasi eveniet ea nisi odit culpa quidem minus accusamus numquam obcaecati possimus doloribus, voluptatum consequatur delectus beatae quae, voluptatibus id velit aspernatur laborum? Quidem neque suscipit dolor natus, nesciunt animi repellat. Debitis facilis non qui deserunt reprehenderit quasi ex assumenda sunt laboriosam consequatur eligendi, necessitatibus, a dolores, rem recusandae porro voluptas doloribus totam incidunt! In vel culpa iste, laudantium iure eligendi quasi enim repellendus similique, ab perspiciatis accusantium! Nihil quisquam, quis quia vero ad sunt veniam beatae?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
