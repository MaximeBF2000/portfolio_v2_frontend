import { useState, useEffect } from "react"
import { fireStorage } from "../modules/firebase"

export default function useFireStorage(file) {
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    const storageRef = fireStorage.ref(file?.name)

    if(file){
      storageRef.put(file).on("state_changed", _ => {
        return
      }, err => {
        setError(err)
      }, async () => {
        const newUrl = await storageRef.getDownloadURL()
        setUrl(newUrl)
      })
    }

  }, [file])

  return { error, url }
}