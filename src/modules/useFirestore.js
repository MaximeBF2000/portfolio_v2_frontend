import { useState, useEffect } from "react"
import { firestore, timestamp } from "./firebase"

export default function useFirestore(collectionName){
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const unsub = firestore.collection(collectionName)
      .orderBy("createdAt", "desc")
      .onSnapshot(snap => {
        let documents = []
        snap.docs.map(doc => documents.push({ id: doc.id, ...doc.data(), createdAt: timestamp() }))
        setDocs(documents)
      })

    return () => unsub()

  }, [collectionName])

  return { docs }
}