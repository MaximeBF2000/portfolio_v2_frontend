import React, { useState } from 'react'
import ReactHtmlParser from "react-html-parser"
import firebase, { googleAuthProvider } from "../modules/firebase"
import useFirestore from "../modules/useFirestore"
import { useParams, Link } from "react-router-dom"
import defaultArticlePic from "../assets/default_articlePic.jpg"
import EditArticle from '../components/EditArticle'

export default function ArticlePage() {
  const { title } = useParams()
  const { docs } = useFirestore("articles")

  const [admin, setAdmin] = useState(false)
  const [showEditPostPopup, setShowEditPostPopup] = useState(false)

  const article = docs.find(article => article.title.split(" ").map(el => el[0].toUpperCase()+el.slice(1, el.length)).join("").replace(/[^a-z0-9]/gi,'').toLowerCase() === title.toLowerCase())
  
  const [isValidImg, setIsValidImg] = useState(true)


  const signInToEdit = () => {
    if(!admin){
      const verif = prompt("Etes vous l'administrateur du site ?")
      if(verif === "69600mbfEdit"){
        setAdmin(true)
        setShowEditPostPopup(true)
      } else {
        alert("Seul l'administrateur du site peut modifier des articles")
      }
    } else {
      setShowEditPostPopup(true)
    }
  }
  

  return (
    <article className="articlePage">
      {showEditPostPopup && (
        <EditArticle
          close={() => setShowEditPostPopup(false)}
          article={article}
        />
      ) }
      <div className="article">
        <Link to="/articles">
          <button className="backBtn">Retour</button>
        </Link>
        <div className="bannerImg">
          <img src={isValidImg ? article?.img || defaultArticlePic : defaultArticlePic} onError={() => setIsValidImg(false)} alt="article banner"/>
        </div>
        <div className="article_content">
          <h2 className="title">{article?.title}</h2>
          <div className="content">
            {ReactHtmlParser(article?.content)}
          </div>
        </div>
      </div>
      <button className="editBtn" onClick={signInToEdit}>Vous êtes l'admin du site ? Editez cette article ici</button>
    </article>
  )
}
