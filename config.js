import firebase from "firebase"
require("@firebase/firestore")

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA7pH6A3KvWcbXqmHMEqx4bWZM9RI1ND6w",
    authDomain: "barter-1f0aa.firebaseapp.com",
    databaseURL: "https://barter-1f0aa.firebaseio.com",
    projectId: "barter-1f0aa",
    storageBucket: "barter-1f0aa.appspot.com",
    messagingSenderId: "76932584848",
    appId: "1:76932584848:web:1394e2943feff922848f15",
    measurementId: "G-HN6WRB982V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();