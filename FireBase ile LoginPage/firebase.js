// Import the functions you need from the SDKs you need



import firebase from "firebase/compat/app";
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa39Kudy85oyUeidU5el2Y4703LnAAhZs",
  authDomain: "login-207fb.firebaseapp.com",
  projectId: "login-207fb",
  storageBucket: "login-207fb.appspot.com",
  messagingSenderId: "1071741747850",
  appId: "1:1071741747850:web:34cd60b874873faf5d6373"
};

// Initialize Firebase

if(!firebase.apps.length){
    
    firebase.initializeApp(firebaseConfig)
}
const auth = firebase.auth() ;

export {auth}