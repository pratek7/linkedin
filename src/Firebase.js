import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoJvdAiUWXTCDcN3F5nVqh0jd6HLM0_gM",
  authDomain: "linkedin-clone-yt-d61f2.firebaseapp.com",
  projectId: "linkedin-clone-yt-d61f2",
  storageBucket: "linkedin-clone-yt-d61f2.appspot.com",
  messagingSenderId: "436627904955",
  appId: "1:436627904955:web:65cef74cd387c3e0020c9e",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
