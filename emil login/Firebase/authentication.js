import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-p1ClfCkWAbbIvukwBeSQ8BsoG-ePPpw",
  authDomain: "reviceapp-f1218.firebaseapp.com",
  projectId: "reviceapp-f1218",
  storageBucket: "reviceapp-f1218.appspot.com",
  messagingSenderId: "408596741353",
  appId: "1:408596741353:web:4167b568662fc8bcf98478",
  measurementId: "G-ML8ZRCXQBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;