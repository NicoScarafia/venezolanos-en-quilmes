// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, doc, collection, setDoc, getDoc, getDocs, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

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

    const addInput = document.querySelector(".addInput");
    addInput.onclick = () =>{
        document.querySelector(".input").style.display = "flex";
    }

    const closeBtn = document.querySelector("#closeButton");
    closeBtn.onclick = () =>{        
        document.querySelector(".input").style.display = "none";
    }

    function Img() {
        const imgSet = document.createElement("img");
        imgSet.src =  document.querySelector("#imgInput").value;
        console.log(imgSet.src);
        if(document.querySelector("#imgSet").hasChildNodes()){
            document.querySelector("#imgSet").removeChild(document.querySelector("#imgSet").firstChild);
        }
        
        document.querySelector("#imgSet").appendChild(imgSet)
    }

    const arrayMonth = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    let d = "";
    let m = "";
    let celeb = "";
    let img = "";

    const addButton = document.querySelector("#addButton");
    addButton.onclick = addData;

    async function addData(event) {
        event.preventDefault();
        d = document.querySelector("#dayInput").value;
        m = document.querySelector("#monthInput").value;
        celeb = document.querySelector("#celebInput").value;
        img = document.querySelector("#imgInput").value;

        if((d > 31 || m > 31) || (d > new Date(new Date().getFullYear(), 2 , 0).getDate() && 
            m == 2) || (d > 30 && [4,6,9,11].includes(m)) || d < 1 || m < 1){
            
            document.querySelector(".msj").innerHTML = "Fecha NO valida.";

        } else if(img == "none"){

            document.querySelector(".msj").innerHTML = "Seleccione una Imagen.";

        } else if(celeb == ""){

            document.querySelector(".msj").innerHTML = "Debe ingresar una Celebracion.";

        } else {

            let id = arrayMonth[m-1].slice(0,3) + d;
            console.log(id);
            let consult;

            try {
                consult = await getDoc(doc(db, "Celebrations", id));

            } catch(err){
                document.querySelector(".msj").innerHTML = "¡Hubo un error! Intentenlo otra vez.";
                console.error(err);
            }
            
            if(consult.exists()){
                try {
                    await updateDoc(doc(db, "Celebrations", id), {
                        celebration: arrayUnion(celeb),
                        img: arrayUnion(img)
                    })
                        .then(() => {
                            document.querySelector(".msj").innerHTML = "Agregado Correctamente.";
                            document.querySelector("#dayInput").value = "";
                            m = document.querySelector("#monthInput").value = "";
                            celeb = document.querySelector("#celebInput").value = "";
                            img = document.querySelector("#imgInput").value = "none";
                            document.querySelector("#imgSet").removeChild(document.querySelector("#imgSet").firstChild);
                        })
                } catch(err){

                    document.querySelector(".msj").innerHTML = "¡Hubo un error! Intentenlo otra vez.";
                    console.error(err);
                }
            } else {

                try {
                    await setDoc(doc(db, "Celebrations", id), {
                        celebration: [celeb],
                        img: [img],
                    })
                        .then(()=> {
                            document.querySelector(".msj").innerHTML = "Agregado Correctamente.";
                            document.querySelector("#dayInput").value = "";
                            m = document.querySelector("#monthInput").value = "";
                            celeb = document.querySelector("#celebInput").value = "";
                            img = document.querySelector("#imgInput").value = "none";
                            document.querySelector("#imgSet").removeChild(document.querySelector("#imgSet").firstChild);
                        })                   
                } catch(err){
                    document.querySelector(".msj").innerHTML = "¡Hubo un error! Intentenlo otra vez.";
                    console.error(err);
                }                
            }        
        }
    }

    document.querySelector("#dayInput").addEventListener("change", limpiar);
    document.querySelector("#monthInput").addEventListener("change", limpiar);
    document.querySelector("#celebInput").addEventListener("change", limpiar);
    document.querySelector("#imgInput").addEventListener("change", Img);

    function limpiar() {
        document.querySelector(".msj").innerHTML = "";
    }
    
    let days;

    async function obtener() { 
        
        try {
            await getDocs(collection(db, "Celebrations")) 
                .then((resp) =>{
                    console.log(resp.docs);
                    days = resp.docs.map((docu) => ({id: docu.id, ...docu.data()}));
                    console.log(days);
                })
        } catch (err){
            document.querySelector(".msj").innerHTML = "¡Hubo un error! Intentenlo otra vez.";
            console.error(err);
        }

        for(let i = 0; i < days.length; i++){

            let id = days[i].id;
            
            for(let j = 0; j < days[i].img.length; j++){

                const dayDiv = document.createElement("div");
                dayDiv.className = "dayDiv";
                dayDiv.id = id + "-" + j;
                document.querySelector("#divImg" + id).appendChild(dayDiv);
        
                const mark = document.createElement("img");
                mark.className = "markImg";
                mark.src = days[i].img[j]
                //mark.onclick = openDetail(id, );
        
                document.querySelector("#" + dayDiv.id).appendChild(mark);
            }            
        }    
    }

    // function openDetail(id) {
    //     document.querySelector(".detail").style.display = "flex";
    // }

    obtener();

}, false);