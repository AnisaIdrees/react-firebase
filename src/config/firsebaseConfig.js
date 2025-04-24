import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, } from "firebase/auth";
import { getFirestore , doc, setDoc} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB6gv7SD79cfZoYTyDYcT7JgCTb1BU89Vw",
    authDomain: "practice-d43eb.firebaseapp.com",
    projectId: "practice-d43eb",
    storageBucket: "practice-d43eb.firebasestorage.app",
    messagingSenderId: "965602897208",
    appId: "1:965602897208:web:583415a96036c129c9e5cd"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export{
    auth,
    createUserWithEmailAndPassword,
    db, doc, setDoc
  }