import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBp56WH5hLBD8jDT0bFSRysx_QkHY19Kso",
  authDomain: "genius-car-service-88645.firebaseapp.com",
  projectId: "genius-car-service-88645",
  storageBucket: "genius-car-service-88645.appspot.com",
  messagingSenderId: "988466378733",
  appId: "1:988466378733:web:4b39ed1ef44b79679a19e4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;