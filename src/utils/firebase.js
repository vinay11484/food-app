// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9RhdQvKjGys7q2BThjCbSD2nv6X1sjYQ",
  authDomain: "food-app-bf62b.firebaseapp.com",
  projectId: "food-app-bf62b",
  storageBucket: "food-app-bf62b.appspot.com",
  messagingSenderId: "506998804311",
  appId: "1:506998804311:web:7aca79caae4e40fd37f812",
  measurementId: "G-WDJQ0S76C9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
