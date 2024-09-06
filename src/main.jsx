import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDP0WcTvbviZcRu905vUGZ-6PilFOBf7GA",
  authDomain: "clean-soles-project.firebaseapp.com",
  projectId: "clean-soles-project",
  storageBucket: "clean-soles-project.appspot.com",
  messagingSenderId: "1319126470",
  appId: "1:1319126470:web:a444aa0c6ce34245b6dec7"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
