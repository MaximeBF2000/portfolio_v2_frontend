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
          <p>
            Vous possédez déjà la maquette de votre site parfait ? Il ne nous reste plus qu'à la transformer en projet réel déployé en ligne, à la vue de tout vos clients et accessible sur tout les moteurs de recherches.
          </p>
        </div>
        <div className="grid_el">
          <FaDatabase className="icon"/>
          <h3>Développement fullstack</h3>
          <p>
            Faisons de votre site web une plateforme performante, moderne et maintenable dans le temps avec des technologies actuelles et efficaces. Votre site d'aujourd'hui, mais aussi de demain.
          </p>
        </div>
        <div className="grid_el">
          <MdPhoneIphone className="icon"/>
          <h3>Responsive design</h3>
          <p>
            Créons une plateforme adaptée à tout les appareils de vos clients. Qu'ils visitent votre site web sur un smartphone, une tablette ou encore un ordinateur, acceuillons les avec le design adapté.  
          </p>
        </div>
      </div>
    </section>
  )
}
