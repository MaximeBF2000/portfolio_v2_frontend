import img_project_moi from "../assets/img_project/vitrine_moi_v1.png"
import { v4 as uuid } from 'uuid'

/* PROJECTS ________________________________________________________________________________  */
export const projects = [
  {
    id: uuid(),
    name: "Maxime BOUNAAS-FERRET V1",
    description: `
      Première version du site vitrine de Maxime BOUNAAS-FERRET, freelance en développement web
    `,
    img: img_project_moi,
    tags: ["HTML5", "CSS3", "SASS", "Vanilla JS", "Adobe XD"],
    link: "https://maxime-bounaasferret-v1.netlify.app/"
  },
  {
    id: uuid(),
    name: "AutowriteJS",
    description: `
      Open source javascript lightweight library for creating typing effect
    `,
    img: "",
    tags: ["Javascript", "Open source", "Vanilla JS"],
    link: ""
  },
  {
    id: uuid(),
    name: "DevJobLister",
    description: `
      Job listing application for developpers, using the MERN stack
    `,
    img: "",
    tags: ["Javascript", "MERNstack", "React JS", "Node JS", "MongoDB"],
    link: ""
  }
]

/* SKILLS __________________________________________________________________________________  */
export const skills = [
  {
    id: uuid(),
    name: "HTML5 / CSS3",
    color: "#2D7DD2",
    level: 90
  },
  {
    id: uuid(),
    name: "Javascript",
    color: "#f2df11",
    level: 88
  },
  {
    id: uuid(),
    name: "ReactJS",
    color: "#27DCFA",
    level: 65
  },
  {
    id: uuid(),
    name: "Node JS",
    color: "#3e6e14",
    level: 70
  },
  {
    id: uuid(),
    name: "MongoDB",
    color: "#4DA14B",
    level: 80
  },
  {
    id: uuid(),
    name: "SASS",
    color: "slateblue",
    level: 85,
  },
  {
    id: uuid(),
    name: "Adobe XD",
    color: "#e835e2",
    level: 36,
  },
]