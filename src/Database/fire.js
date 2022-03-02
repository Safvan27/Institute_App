import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOVuR_YHBzkdf1fmO9Z07AYsjCw8MYqHk",
  authDomain: "institue-app.firebaseapp.com",
  projectId: "institue-app",
  storageBucket: "institue-app.appspot.com",
  messagingSenderId: "846745975263",
  appId: "1:846745975263:web:6c2f5fb148bf8dabd7ec6a",
  measurementId: "G-RNKJ95QRE0",
};
const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fire, db };
