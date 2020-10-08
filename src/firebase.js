import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdK-cAjOq7xB-RcxtYS0jLG9lUOavttpc",
  authDomain: "ahmedrazaelectronics-17.firebaseapp.com",
  databaseURL: "https://ahmedrazaelectronics-17.firebaseio.com",
  projectId: "ahmedrazaelectronics-17",
  storageBucket: "ahmedrazaelectronics-17.appspot.com",
  messagingSenderId: "550417032163",
  appId: "1:550417032163:web:4f147e026f36809d7df6d6",
  measurementId: "G-EFDRBT3CYQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
