import React, { useState } from 'react'
import ReactDom from 'react-dom'
import RichTextEditor from 'react-rte'
import ReactHtmlParser from "react-html-parser"
import { timestamp, firestore } from "../modules/firebase"
import useFirestorage from "../modules/useFireStorage"

import defaultArticleImage from "../assets/default_articlePic.jpg"


export default function AddArticle({ close }) {
  const [imageFile, setImageFile] = useState(null)
  const [title, setTitle] = useState(``)
  const [content, setContent] = useState(RichTextEditor.createEmptyValue())

  const { url } = useFirestorage(imageFile)

  const handleChange = (e, setValue) => {
    setValue(e.target.value)
  }

  const handleEditorChange = value => {
    setContent(value)
  }


  const handleSubmit = e => {
    e.preventDefault()

    firestore.collection("articles").add({ 
      title, 
      content: content.toString("html"), 
      img: url, 
      createdAt: timestamp()
    })
  }

  return ReactDom.createPortal(
    <div className="postPopup">
      <form className="actionBox" onSubmit={handleSubmit}>
        <div className="formControl">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" onChange={e => setImageFile(e.target.files[0])} />
        </div>
        <div className="formControl">
          <label htmlFor="title">Titre</label>
          <input type="text" name="title" value={title} onChange={e => handleChange(e, setTitle)} />
        </div>
        <div className="formControl">
          <label htmlFor="content">Contenu</label>
          {/* <textarea name="content" cols="30" rows="10" value={content} onChange={e => handleChange(e, setContent)}>
            
          </textarea> */}
          <RichTextEditor
            value={content}
            onChange={handleEditorChange}
          />
        </div>
        <button type="submit">Ajouter l'article</button>
      </form>
      <div className="previewBox">
        <h3 className="previewTitle">Preview 👇</h3>
        <div className="preview">
          {ReactHtmlParser(content.toString("html"))}
        </div>
      </div>
      <div className="closeBtn" onClick={() => close()}>❌</div>
    </div>,
    document.querySelector("#portalRoot")
  )
}
