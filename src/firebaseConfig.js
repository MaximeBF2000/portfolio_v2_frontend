import firebase from "firebase"
import "firebase/firestore"
import "firebase/analytics"

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

firebase.analytics()

export const db = firebase.firestore()