import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJkkw-l6ofSG21NoVJpgR-P-_QYj9U5qw",
  authDomain: "chat-app-f318c.firebaseapp.com",
  projectId: "chat-app-f318c",
  storageBucket: "chat-app-f318c.appspot.com",
  messagingSenderId: "448240133328",
  appId: "1:448240133328:web:1c1ff881538ce430236ad5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
