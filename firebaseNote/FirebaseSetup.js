import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCfNXAOzOz3f5ThZRLpTRtXwMdb34TLwN8",
  authDomain: "dentalportal-dfd85.firebaseapp.com",
  projectId: "dentalportal-dfd85",
  storageBucket: "dentalportal-dfd85.appspot.com",
  messagingSenderId: "124045575514",
  appId: "1:124045575514:web:793eb31059f40ef96b5f63"
};

const app = initializeApp(firebaseConfig);
export default app;
