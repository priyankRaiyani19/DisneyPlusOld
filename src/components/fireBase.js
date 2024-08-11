import { initializeApp } from "firebase/app";
import { getFirestore, getAuth,GoogleAuthProvider,  } from "firebase/firestore";
import { getStorage } from "firebase/storage";
//


const firebaseConfig = {
    apiKey: "AIzaSyD9UYmc19bBwdww0s8I97BX10WGr2NI5Ug",
    authDomain: "disneyplus2-o.firebaseapp.com",
    projectId: "disneyplus2-o",
    storageBucket: "disneyplus2-o.appspot.com",
    messagingSenderId: "572469365446",
    appId: "1:572469365446:web:e772713c123412439165c7",
    measurementId: "G-F9P7X0SV9B"
};
const fireBaseApp = initializeApp (firebaseConfig);
const db = getFirestore(fireBaseApp);
const auth = getAuth(fireBaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(fireBaseApp);


export { auth,db,provider,storage,fireBaseApp};
