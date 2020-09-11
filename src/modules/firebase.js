import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBq8F059a_H4-ou-qQUuk9kB1nPhduPBfU",
  authDomain: "personal-website-c8c59.firebaseapp.com",
  databaseURL: "https://personal-website-c8c59.firebaseio.com",
  projectId: "personal-website-c8c59",
  storageBucket: "personal-website-c8c59.appspot.com",
  messagingSenderId: "912797288772",
  appId: "1:912797288772:web:923ef34974b615c23d6f11",
  measurementId: "G-ND45SZJ945"
}


firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export const fireStorage = firebase.storage()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp
export default firebase