import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBCNsAkLaOccakhOnmRhiiIUQff6c5fB3A",
    authDomain: "elon-musk-2f33a.firebaseapp.com",
    projectId: "elon-musk-2f33a",
    storageBucket: "elon-musk-2f33a.appspot.com",
    messagingSenderId: "282392609261",
    appId: "1:282392609261:web:786b066fcc4bd890eae7e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;