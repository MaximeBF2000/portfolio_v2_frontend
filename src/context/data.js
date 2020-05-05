import img_project_moi from "../assets/img_project/vitrine_moi_v1.png"
import img_autowriteJs from "../assets/img_project/autowrite_js.png"
import img_devJobLister from "../assets/img_project/devJobLister.jpg"
import img_leafletMap from "../assets/img_project/leafletMap.png"
import img_djangoListApp from "../assets/img_project/django_list_app.jpg"
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
    link: "https://maxime-bounaasferret-v1.netlify.app/",
    github: "https://github.com/MaximeBF2000/portfolio_vanilla"
  },
  {
    id: uuid(),
    name: "AutowriteJS",
    description: `
      Librairie javascript open source permettant de créer un texte animé
    `,
    img: img_autowriteJs,
    tags: ["Javascript", "Open source", "Vanilla JS"],
    link: "https://autowritejs.netlify.app",
    github: "https://github.com/MaximeBF2000/autoWriteJS"
  },
  {
    id: uuid(),
    name: "DevJobLister",
    description: `
      Application de recherches de job pour les développeur (utilisation du MERNstack)
    `,
    img: img_devJobLister,
    tags: ["Javascript", "MERNstack", "React JS", "Node JS", "MongoDB"],
    link: "",
    github: "https://github.com/MaximeBF2000/devJobLister_MERN"
  },
  {
    id: uuid(),
    name: "Where Am I",
    description: `
      Application permettant d'obtenir les coordonées GPS de n'importe quel endroit sur une map
    `,
    img: img_leafletMap,
    tags: ["Map API", "Leaflet API", "Javascript", "Fast Build"],
    link: "https://leaflet-get-coords.netlify.app/",
    github: "https://github.com/MaximeBF2000/Leaflet_GPS_coordinates_getter"
  },
  {
    id: uuid(),
    name: "Planning list",
    description: `
      Application permettant de créer des listes de tâches pour rester organisé et productif
    `,
    img: img_djangoListApp,
    tags: ["Python", "Django", "Restful API", "SQL", "SQLite"],
    link: "",
    github: "https://github.com/MaximeBF2000/django_list_app"
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

/* FAQ __________________________________________________________________________________  */
export const faq_content = [
  {
    question: "Pourquoi faire appel à un développeur ?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi accusamus quis nostrum adipisci eaque, corporis esse sequi iusto architecto eum in tenetur dolore dicta."
  },
  {
    question: "Combien ça coûte de créer un site web ?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi accusamus quis nostrum adipisci eaque, corporis esse sequi iusto architecto eum in tenetur dolore dicta."
  }
]