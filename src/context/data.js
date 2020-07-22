import img_project_moi_v2 from "../assets/img_project/vitrine_moi_v2.png"
import img_project_moi_v1 from "../assets/img_project/vitrine_moi_v1.png"
import img_videozz from "../assets/img_project/videozz.png"
import img_autowriteJs from "../assets/img_project/autowrite_js.png"
import img_3wcode from "../assets/img_project/3w_code.png"
import img_bookey from "../assets/img_project/bookey.png"
import img_drawIt from "../assets/img_project/draw_it.png"
import img_devJobLister from "../assets/img_project/devJobLister.jpg"
import img_leafletMap from "../assets/img_project/leafletMap.png"
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
    link: "https://maxime-bounaas.netlify.app/",
    github: "https://github.com/MaximeBF2000/portfolio_v2_frontend"
  },
  {
    id: uuid(),
    name: "VideOzz | Netflix Like Show",
    description: `
      Développement design et frontend d'une platforme regroupant une grande quantité de films et séries. Le but de l'application est de fournir un maximum d'informations sur le film ou la série recherchée par l'utilisateur, ainsi que de donner une possibilité de visionner la vidéo en question, sur la plateforme ou par une redirection extérieure.
    `,
    img: img_videozz,
    tags: ["ReactJS", "Web design", "Fast build"],
    link: "https://videozz.netlify.app/",
    github: "https://github.com/MaximeBF2000/Videozz"
  },
  {
    id: uuid(),
    name: "Where Am I",
    description: `
      Application permettant d'obtenir les coordonées GPS de n'importe quel endroit sur une map, ou de transformer une adresse en coordonnées GPS
    `,
    img: img_leafletMap,
    tags: ["Map application", "Leaflet API", "Javascript", "Algolia Places API"],
    link: "https://where-i-am.netlify.app/",
    github: "https://github.com/MaximeBF2000/Leaflet_GPS_coordinates_getter"
  },
  {
    id: uuid(),
    name: "3W-CODE",
    description: `
      Développement frontend et marketing du site de 3w-code, un projet de bootcamp en ligne de développement web.
    `,
    img: img_3wcode,
    tags: ["Frontend", "ReactJS", "SASS", "Marketing"],
    link: "https://3w-code.netlify.app/",
    github: ""
  },
  {
    id: uuid(),
    name: "BOOKEY, The pocket librairy",
    description: `
      Application de recherche de livres, résumé, autheurs...
      Possibilité de noter les livres lus et suggestion de livre par intelligence artificiel.
    `,
    img: img_bookey,
    tags: ["ReactJS", "State Management", "SASS"],
    link: "https://bookey-librairy.netlify.app/",
    github: "https://github.com/MaximeBF2000/BOOKEY"
  },
  {
    id: uuid(),
    name: "Draw it !",
    description: `
      Création d'une application de dessin simplifié, déposez vos idées et enregistrez les en 3 clicks !
    `,
    img: img_drawIt,
    tags: ["Javascript", "Parcel", "Fast build", "Drawing app"],
    link: "https://draw-this.netlify.app/",
    github: "https://github.com/MaximeBF2000/Draw-it"
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
    level: 90
  },
  {
    id: uuid(),
    name: "React JS",
    color: "#27DCFA",
    level: 80
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
    level: 85
  },
  {
    id: uuid(),
    name: "SASS",
    color: "slateblue",
    level: 95,
  },
  {
    id: uuid(),
    name: "Adobe XD",
    color: "#e835e2",
    level: 40,
  },
]

export const skills_tags = [
  "SEO",
  "Git",
  "Responsive design",
  "Parcel.js",
  "Photoshop",
  "Illustrator",
  "Python",
  "Django",
  "Flask",
  "SQL"
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
    answer: "Avec le nombre d'outils disponibles actuellement pour créer facilement son site web, on peut se demander si il est vraiment utile de faire appel à un développeur. La réponse à cette question dépend de ce que vous souhaiter créer, voulez vous créer un site web à allure professionel, optimisée et adaptée à tout appareils ? Dans ce cas, il est préférable de passer par un professionel, qui pourra vous apportez ces possibilités en plus de ses conseils."
  },
  {
    question: "Combien ça coûte de créer un site web ?",
    answer: "Le prix d'un site web varie énormément et dépend des fonctionnalités que vous souhaitez apporter à celui-ci. C'est pourquoi je vous invite à me contacter afin que l'on discute de votre projet et que vous puissiez obtenir un devis TOTALEMENT GRATUIT et sans engagements de votre part."
  }
]