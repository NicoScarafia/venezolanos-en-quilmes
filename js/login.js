// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, doc, collection, setDoc, getDoc, getDocs, updateDoc, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";


window.addEventListener('load', function() {

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyA_6C2O_DVAMjHbS-rrrgx1VLzSTHD1Jas",
        authDomain: "venezolanosenquilmes-2b1cf.firebaseapp.com",
        projectId: "venezolanosenquilmes-2b1cf",
        storageBucket: "venezolanosenquilmes-2b1cf.appspot.com",
        messagingSenderId: "253616014487",
        appId: "1:253616014487:web:f7eaa6893b13671bd815d2"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore();

    const hero = document.querySelector(".hero-section");
    hero.style.height = "8rem";
    hero.style.minHeight = "0rem";

    let userLog;
    let logTrue = false;
    

    const user = document.querySelector("#user");
    const pass = document.querySelector("#pass");

    const submit = document.querySelector("#submit")
    submit.onclick = () => {login(user, pass);}

    async function login(user, pass) {
        try {
            await getDoc(db, "Celebrations", user) 
                .then((resp) =>{
                    console.log(resp.data());
                    if(resp.data().pass == pass){
                        logTrue = true;
                    }
                    
                    console.log(days);
                })
        } catch (err){
            document.querySelector(".msj").innerHTML = "¡Hubo un error! Intentenlo otra vez.";
            console.error(err);
        }

    }

}, false)