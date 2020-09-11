import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import RichTextEditor from 'react-rte'
import ReactHtmlParser from "react-html-parser"
import { firestore } from "../modules/firebase"
import useFireStorage from "../modules/useFireStorage"


export default function EditArticle({ close, article }) {
  const [newImageFile, setNewImageFile] = useState(null)
  const [newTitle, setNewTitle] = useState(article?.title)
  const [newContent, setNewContent] = useState(RichTextEditor.createValueFromString(article?.content, 'html'))

  const { url } = useFireStorage(newImageFile)

  const handleEditorChange = value => setNewContent(value)

  const handleSubmit = e => {
    e.preventDefault()
    firestore.collection("articles").doc(article?.id).update({
      title: newTitle,
      content: newContent.toString("html")
    })
    if(newImageFile){
      firestore.collection("articles").doc(article?.id).update({
        img: url
      })
    }
  }

  const handleDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    const verif = confirm("Etes vous sûre de vouloir supprimer l'article ?")
    if(verif){
      firestore.collection("articles").doc(article?.id).delete()
    }
  }

  return createPortal(
    <div className="postPopup">
      <form className="actionBox" onSubmit={handleSubmit}>
        <div className="formControl">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" onChange={e => setNewImageFile(e.target.files[0])} />
        </div>
        <div className="formControl">
          <label htmlFor="title">Titre</label>
          <input type="text" name="title" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
        </div>
        <div className="formControl">
          <label htmlFor="content">Contenu</label>
          <RichTextEditor
            value={newContent}
            onChange={handleEditorChange}
          />
        </div>
        <div className="row">
          <button className="deleteBtn" onClick={handleDelete}>Suppimer l'article</button>
          <button type="submit">Mettre l'article à jour</button>
        </div>
      </form>
      <div className="previewBox">
        <h3 className="previewTitle">Preview 👇</h3>
        <div className="preview">
          {ReactHtmlParser(newContent.toString("html"))}
        </div>
      </div>
      <div className="closeBtn" onClick={() => close()}>❌</div>
    </div>,
    document.querySelector("#portalRoot")
  )
}
