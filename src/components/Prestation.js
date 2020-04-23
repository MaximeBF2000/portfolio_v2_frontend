import React from 'react'
import { FaDatabase, FaLaptopCode } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"

export default function Prestation() {
  return (
    <section id="prestation">
      <h2 className="title_deco">Prestations</h2>
      <div className="grid">
        <div className="grid_el">
          <FaLaptopCode className="icon"/>
          <h3>Intégration de maquettes</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae voluptates porro ipsam et dolorum corporis fuga illum reiciendis eligendi dicta excepturi libero error nobis, culpa velit magnam. Tempora, voluptate.</p>
        </div>
        <div className="grid_el">
          <FaDatabase className="icon"/>
          <h3>Développement fullstack</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae voluptates porro ipsam et dolorum corporis fuga illum reiciendis eligendi dicta excepturi libero error nobis, culpa velit magnam. Tempora, voluptate.</p>
        </div>
        <div className="grid_el">
          <MdPhoneIphone className="icon"/>
          <h3>Responsive design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae voluptates porro ipsam et dolorum corporis fuga illum reiciendis eligendi dicta excepturi libero error nobis, culpa velit magnam. Tempora, voluptate.</p>
        </div>
      </div>
    </section>
  )
}
