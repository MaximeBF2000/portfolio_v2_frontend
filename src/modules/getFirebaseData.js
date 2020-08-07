import { db } from "../firebaseConfig"

export function retrieveFirebaseCollectionData(collectionName) {
  const arr = []
  db.collection(collectionName)
    .get()
    .then(snap => {
      snap.docs.forEach(doc => arr.push(doc.data()))
    })
    .catch(err => console.log("FIREBASE RETRIEVE ERROR : ", err))
  return arr
}

export async function getFirebaseDocuments(){
  const projects = await retrieveFirebaseCollectionData("projects")
  const skills = await retrieveFirebaseCollectionData("skills")
  const skills_tags = await retrieveFirebaseCollectionData("skills_tags")
  const faq_content = await retrieveFirebaseCollectionData("faq")
  const parcours_step = await retrieveFirebaseCollectionData("parcours_step")

  return {
    projects,
    skills,
    skills_tags,
    faq_content,
    parcours_step
  }
}