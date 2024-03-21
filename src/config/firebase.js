

import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword} from 'firebase/auth'

import { collection, deleteDoc, getDocs, getFirestore, setDoc, updateDoc} from 'firebase/firestore/lite'


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };


  const app = initializeApp(firebaseConfig);

  // Inicializacion de la Authentication y Firestore
  export const auth = getAuth(app)
  export const db = getFirestore(app)

  
  // Metodos Authentication
  export const login =({email ,password}) => signInWithEmailAndPassword(auth ,email ,password)

  export const register = ({email,password}) => createUserWithEmailAndPassword(auth,email ,password)

  export const logout = ()=> signOut(auth)



  // Metodos FireStore
  export const getData = () => getDocs(collection(db,'tasks'))

  export const addNewTask = ({docRef, newTask}) => setDoc(docRef,newTask)

  export const updateTask = (docRef , newTask) => updateDoc(docRef,newTask)

  export const deleteTask = ({docRef}) => deleteDoc(docRef)