import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyARidr58H6t0p8bocQYmFF3LFN96Z-ElD8",
    authDomain: "disney-plus-5150f.firebaseapp.com",
    projectId: "disney-plus-5150f",
    storageBucket: "disney-plus-5150f.appspot.com",
    messagingSenderId: "363242390214",
    appId: "1:363242390214:web:440aa10f537400e94fcdc7",
    measurementId: "G-WHDM9QHXCS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;