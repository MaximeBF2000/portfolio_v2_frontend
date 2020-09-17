import React, { useState } from 'react'
import ReactHtmlParser from "react-html-parser"
import { Link } from "react-router-dom"
import defaultArticlePic from "../assets/default_articlePic.jpg"
import transformTitleToUrl from "../modules/articleUrl"


export default function Article({ article }) {
  const [imageUrl, setimageUrl] = useState(article.img || defaultArticlePic)

  const shortenContent = (content, length) => {
    if(content.length >= length) return content.slice(0, length) + "..."
    return content
  }

  const url = transformTitleToUrl(article.title)


  return (
    <Link to={`/articles/${url}`}>
      <div className="article">
        <div className="img">
          <img src={imageUrl} onError={e => setimageUrl(defaultArticlePic)} alt="article" />
        </div>
        <div className="content">
          <h3 className="title">{article.title}</h3>
          <div className="description">
            {ReactHtmlParser(shortenContent(article.content, 500))}
          </div>
        </div>
      </div>
    </Link>
  )
}
