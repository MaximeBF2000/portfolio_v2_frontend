import img_project_moi_v2 from "../assets/img_project/vitrine_moi_v2.png"
import img_project_moi_v1 from "../assets/img_project/vitrine_moi_v1.png"
import img_autowriteJs from "../assets/img_project/autowrite_js.png"
import img_devJobLister from "../assets/img_project/devJobLister.jpg"
import img_leafletMap from "../assets/img_project/leafletMap.png"
import img_djangoListApp from "../assets/img_project/django_list_app.jpg"
import { v4 as uuid } from 'uuid'

/* PROJECTS ________________________________________________________________________________  */
export const projects = [
  {
    id: uuid(),
    name: "Maxime BOUNAAS-FERRET V2",
    description: `
    Deuxième version du site vitrine de Maxime BOUNAAS-FERRET, freelance en développement web
    `,
    img: img_project_moi_v2,
    tags: ["ReactJS", "State managment", "Context API", "SASS"],
    link: "https://maxime-bounaasferret-v2.netlify.app/",
    github: "https://github.com/MaximeBF2000/portfolio_v2_frontend"
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
    name: "Maxime BOUNAAS-FERRET V1",
    description: `
      Première version du site vitrine de Maxime BOUNAAS-FERRET, freelance en développement web
    `,
    img: img_project_moi_v1,
    tags: ["HTML5", "CSS3", "SASS", "Vanilla JS", "Adobe XD"],
    link: "https://maxime-bounaasferret-v1.netlify.app/",
    github: "https://github.com/MaximeBF2000/portfolio_vanilla"
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
    name: "React JS",
    color: "#27DCFA",
    level: 68
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
    level: 40,
  },
]


/* PARCOURS ________________________________________________________________________________  */
export const parcours_step = [
  {
    date: "2019-2020",
    title: "Formation Développeur web en ligne",
    description: "Apprentissage en ligne du développement web fullstack en profondeur avec Javascript, ReactJS, NodeJS et MongoDB. Développement de projets et auto apprentissage + expérience en freelance"
  },
  {
    date: "2018-2019",
    title: "Développeur Frontend / Marketing - Foodtrucks Online",
    description: "Développeur frontend pour le site web / application foodtrucksOnline. Apprentissage de la gestion de projet en équipe, de la création et gestion d'un évènement, du préprocesseur CSS SASS, et d'outils de travails tel que git, github, trello..."
  },
  {
    date: "2018-2019",
    title: "Bachelor Informatique général - Ynov Lyon",
    description: "1ère année de bachelor informatique général à Ynov Lyon. Découverte du développement web, apprentissage de la méthode de travail SCRUM, de la gestion de projets et réalisations de 2 applications."
  }
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