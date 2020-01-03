import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  //   apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyDf8Xozy7XoV7RhU-7GeESstt_rTQITqzc",
  //   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  authDomain: "dev-hired.firebaseapp.com",
  //   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  databaseURL: "https://dev-hired.firebaseio.com",
  //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  projectId: "dev-hired",
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  storageBucket: "dev-hired.appspot.com",
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
  messagingSenderId: 773295905716
});

export default app;
