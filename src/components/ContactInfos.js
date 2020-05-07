import React from 'react'
import { FaGithub } from "react-icons/fa"
import { MdPhone } from "react-icons/md"
import { IoIosMail } from "react-icons/io"

export default function ContactInfos() {
  return (
    <div className="grid_el infos">
      <div className="info_container">
        <div className="info">
          <MdPhone className="logo" />
          <div className="content">
            <span className="text">Téléphone : </span>
            <a className="link" href="tel:+33665692685" target="blank">06.65.69.26.85</a>
          </div>
        </div>

        <div className="info">
          <IoIosMail className="logo" />
          <div className="content">
            <span className="text">Mail : </span>
            <a className="link" href="mailto:maxime.bounaas@gmail.com" target="blank">maxime.bounaas@gmail.com</a>
          </div>
        </div>

        <div className="info">
          <FaGithub className="logo" />
          <div className="content">
            <span className="text">Github : </span>
            <a className="link" href="https://github.com/MaximeBF2000" target="blank">github.com/MaximeBF2000</a>
          </div>
        </div>
      </div>
    </div>
  )
}
