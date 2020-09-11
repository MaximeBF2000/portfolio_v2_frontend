import React, { useState } from 'react'
import useFirestore from "../modules/useFirestore"
import firebase, { googleAuthProvider } from "../modules/firebase"

import Article from "../components/Article"
import AddArticle from "../components/AddArticle"

export default function BlogPage() {
  const { docs } = useFirestore("articles")
  const [admin, setAdmin] = useState(false)
  const [showAddPostPopup, setShowAddPostPopup] = useState(false)

  const signInToAdd = () => {
    if(!admin){
      const verif = prompt("Etes vous l'administrateur du site ?")
      if(verif === "69600mbfAdd"){
        setAdmin(true)
        setShowAddPostPopup(true)
      } else {
        alert("Seul l'administrateur du site peut ajouter des articles")
      }
    } else {
      setShowAddPostPopup(true)
    }
  }

  return (
    <section id="blog">
      {showAddPostPopup && <AddArticle close={() => setShowAddPostPopup(false)} />}
      <div className="text_block">
        <h2 className="title_deco">Mes articles</h2>
        <i>
          Retrouvez ici mes idées, apprentissages, et en règle général tout ce que j'apprécie partager sur le business en ligne, le digital, la tech...
        </i>
        <button className="addArticle" onClick={signInToAdd}>Ajouter un article</button>
      </div>

      <div className="articles">
        {docs.map(article => (
          <Article key={Math.random()} article={article}/>
        ))}
      </div>
    </section>
  )
}
