// import firebase from "firebase";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDOVuR_YHBzkdf1fmO9Z07AYsjCw8MYqHk",
//   authDomain: "institue-app.firebaseapp.com",
//   projectId: "institue-app",
//   storageBucket: "institue-app.appspot.com",
//   messagingSenderId: "846745975263",
//   appId: "1:846745975263:web:6c2f5fb148bf8dabd7ec6a",
//   measurementId: "G-RNKJ95QRE0",
// };
// <>
//   <script src="https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"></script>
//   <script src="https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js"></script>
// </>;
// const fire = firebase.initializeApp(firebaseConfig);

// export default fire;
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite";

// const firebaseConfig = {
//   apiKey: "AIzaSyDOVuR_YHBzkdf1fmO9Z07AYsjCw8MYqHk",
//   authDomain: "institue-app.firebaseapp.com",
//   projectId: "institue-app",
//   storageBucket: "institue-app.appspot.com",
//   messagingSenderId: "846745975263",
//   appId: "1:846745975263:web:6c2f5fb148bf8dabd7ec6a",
//   measurementId: "G-RNKJ95QRE0",
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const fire = getFirestore(firebaseApp);

// export default fire;
// import firebase from "firebase/compat/app";
// import * as firebase from "firebase/app";

// import firebase from "firebase";
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
