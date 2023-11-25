// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCBCn8zsfd10qDrbNvREgS6ZmbmQXMj7rA",

  authDomain: "conquizt-f7b8c.firebaseapp.com",

  projectId: "conquizt-f7b8c",

  storageBucket: "conquizt-f7b8c.appspot.com",

  messagingSenderId: "470632064496",

  appId: "1:470632064496:web:6c37dc4e994fa55306a935"

};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db}