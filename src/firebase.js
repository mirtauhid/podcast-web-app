import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCSzGAF_LEx87HZRvEZRDEzN1dAI26hWLE",
    authDomain: "podcastsite-1bedc.firebaseapp.com",
    projectId: "podcastsite-1bedc",
    storageBucket: "podcastsite-1bedc.appspot.com",
    messagingSenderId: "191188888302",
    appId: "1:191188888302:web:4e5f6279876f18c30f61ff"
  };
  
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore()

export { db }