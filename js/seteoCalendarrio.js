// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
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

const addInput = document.querySelector(".addInput");
addInput.onclick = () =>{
    document.querySelector(".input").style.display = "flex";
}

const closeBtn = document.querySelector("#closeButton");
closeBtn.onclick = () =>{
    document.querySelector(".input").style.display = "none";
}

const arrayMonth = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

let d = "";
let m = "";
let celeb = "";
let img = "";

const addButton = document.querySelector("#addButton");
addButton.onclick = addData();

function addData(e){
    e.preventDefault();
    d = document.querySelector("#dayInput").value;
    m = document.querySelector("#monthInput").value;
    celeb = document.querySelector("#celebInput").value;

    if((d > 31 || m > 31) || (d > new Date(new Date().getFullYear(), 2 , 0).getDate() && m == 2) || (d > 30 && [4,6,9,11].includes(m))){
        document.querySelector(".msj").innerHTML = "Fecha NO valida.";
    } else {
        let id = toString(arrayMonth[m]) + toString(d);

        await setDoc(doc(db, "Celebration", id), {
            celebration: "Los Angeles",
            img: "",
          });

        document.querySelector(".msj").innerHTML = "Agregado."; // agrega db.


    }

    console.log(d + m + celeb);
}

document.querySelector("#dayInput").addEventListener("change", limpiar);
document.querySelector("#monthInput").addEventListener("change", limpiar);
document.querySelector("#celebInput").addEventListener("change", limpiar);

function limpiar() {
    document.querySelector(".msj").innerHTML = "";
}