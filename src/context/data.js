import img_project_moi_v2 from "../assets/img_project/vitrine_moi_v2.png"
import img_project_moi_v1 from "../assets/img_project/vitrine_moi_v1.png"
import img_videozz from "../assets/img_project/videozz.png"
import img_rent4aWeek from "../assets/img_project/rent4aWeek.png"
import img_siteVitrineAntoinePavy from "../assets/img_project/siteVitrine_antoinePavy.png"
import img_foodtruckOnline from "../assets/img_project/foodtruckOnline.jpg"
import img_autowriteJs from "../assets/img_project/autowrite_js.png"
import img_3wcode from "../assets/img_project/3w_code.png"
import img_paretoConstats from "../assets/img_project/pareto_constats.png"
import img_providus from "../assets/img_project/providus.png"
import img_bookey from "../assets/img_project/bookey.png"
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
    name: "Rent4aWeek | Luxurious cars",
    description: `
      Rent4aWeek est une plateforme ayant pour objectif de mettre en relation des propriétaires de voitures de luxes et des personnes cherchant à en louer une pour un temps court. La plateforme traitera les nouvelles voitures pour les classer par marques, qualité, préférences... Afin d'offrir une expérience unique et simple aux utilisateurs.
    `,
    img: img_rent4aWeek,
    tags: ["ReactJS", "Google Firebase", "Web design", "UI / UX"],
    link: "https://rent4aweek.netlify.app/",
    github: "https://github.com/MaximeBF2000/Rent4aWeek"
  },
  {
    id: uuid(),
    name: "Site vitrine | Antoine PAVY",
    description: `
      Site vitrine d'Antoine PAVY, commercial et développeur de stratégie marketing, composé d'une landing page et d'une about page.
    `,
    img: img_siteVitrineAntoinePavy,
    tags: ["SCSS", "Flexbox", "React-router"],
    link: "https://antoine-pavy.netlify.app/",
    github: ""
  },
  {
    id: uuid(),
    name: "Foodtruck Online",
    description: `
      Participation au développement du site web de Foodtruck Online, un projet ayant pour objectif de mettre en relation des organisateurs d'événement et des foodtrucks. Scrum Team composé de 2 développeur front-end, 3 back-end, 1 designer et 2 exécutif marketing. (ps: le projet à été abandonné après 1 an)
    `,
    img: img_foodtruckOnline,
    tags: ["HTML5", "CSS3", "SASS", "Javascript", "SCRUM"],
    link: "https://www.facebook.com/Foodtruckonline-466504170419269/?ref=page_internal",
    github: ""
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
    name: "Pareto's Constats",
    description: `
      Service permettant de faire des constats de rapport de productivité. L'application est basée sur la loi de Pareto, qui indique que 80% des résultats sont provoquées par 20% des entrées. L'application permet de créer, modifier ou supprimer des constats et de les visualisés sur des graphiques.
    `,
    img: img_paretoConstats,
    tags: ["Google Firebase", "ChartJS", "ReactJS", "Context API", "Saas"],
    link: "https://pareto-constats.netlify.app/",
    github: "https://github.com/MaximeBF2000/ParetoConstats__web"
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
    name: "Providus",
    description: `
      Réalisation d'une plateforme ecommerce pour apprendre à manipuler Redux.js et Typescript (PS: Plateforme non fonctionnelle)
    `,
    img: img_providus,
    tags: ["ReactJS", "ReduxJS", "Typescript", "SASS"],
    link: "https://providus.netlify.app/",
    github: "https://github.com/MaximeBF2000/Providus_Fake_EcommStore_redux_typescript"
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
    name: "DevJobLister",
    description: `
      Application de recherches de job pour les développeur (utilisation du MERNstack)
    `,
    img: img_devJobLister,
    tags: ["Javascript", "MERNstack", "ReactJS", "NodeJS", "MongoDB"],
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
    tags: ["Javascript", "Open source", "VanillaJS"],
    link: "https://autowritejs.netlify.app",
    github: "https://github.com/MaximeBF2000/autoWriteJS"
  }
]

/* SKILLS __________________________________________________________________________________  */
export const skills = [
  {
    id: uuid(),
    name: "HTML5 / CSS3",
    color: "#2D7DD2",
    level: 95
  },
  {
    id: uuid(),
    name: "Javascript",
    color: "#f2df11",
    level: 95
  },
  {
    id: uuid(),
    name: "ReactJS",
    color: "#27DCFA",
    level: 90
  },
  {
    id: uuid(),
    name: "ReduxJS",
    color: "#6e1bf5",
    level: 65
  },
  {
    id: uuid(),
    name: "NodeJS",
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
    name: "SCSS",
    color: "slateblue",
    level: 95,
  },
  {
    id: uuid(),
    name: "Adobe XD",
    color: "#e835e2",
    level: 55,
  },
]

export const skills_tags = [
  "Git",
  "Responsive design",
  "Typescript",
  "React Hooks",
  "Context API",
  "Python",
  "SEO",
  "SEM",
  "Django",
  "Firebase",
  "Photoshop",
  "Illustrator",
  "Premiere Pro",
  "Digital marketing"
]


/* PARCOURS ________________________________________________________________________________  */
export const parcours_step = [
  {
    date: "2019-2020",
    name: "Développeur Javascript / React.js Freelance",
    description: "Développement de nombreux projets en freelance & en continuant mon apprentissage de nouvelle technologies et méthodes de travail. En cours de création d'une entreprise de services digitaux."
  },
  {
    date: "2019-2020",
    name: "Formation Développeur web en ligne",
    description: "Apprentissage en ligne du développement web fullstack en profondeur avec Javascript, ReactJS, NodeJS et MongoDB. Développement de projets et auto apprentissage + expérience en entreprenariat dans le domaine du e-commerce."
  },
  {
    date: "2018-2019",
    name: "Développeur Frontend / Marketing - Foodtrucks Online",
    description: "Développeur frontend pour le site web / application foodtrucksOnline. Apprentissage de la gestion de projet en équipe, de la création et gestion d'un évènement, du préprocesseur CSS SASS, et d'outils de travails tel que git, github, trello..."
  },
  {
    date: "2018-2019",
    name: "Bachelor Informatique général - Ynov Lyon",
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