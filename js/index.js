import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, addDoc, collection, getDocs, orderBy, limit, query, Timestamp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js";

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

    const actividades_content = document.querySelector(".actividades_content");

    const actividades_card = document.createElement("div");
    actividades_card.className = "actividades_card";

    const card_image = document.createElement("div");
    card_image.className = "card_image";

    const act_imagen = document.createElement("img");
    act_imagen.className = "act_imagen";

    const card_text = document.createElement("div");
    card_text.className = "card_text";

    const card_heading = document.createElement("div");
    card_heading.className = "card_heading";

    const h4 = document.createElement("h4");
    h4.className = "act_titulo";

    const card_date = document.createElement("div");
    card_date.className = "card_date";

    const i0 = document.createElement("i");
    i0.classList = "fa-regular fa-calendar";

    const span = document.createElement("span");
    span.className = "act_fecha";

    const card_main_text = document.createElement("div");
    card_main_text.className = "card_main-text";

    const act_texto = document.createElement("act_texto");
    act_texto.className = "act_texto";

    const card_link = document.createElement("div");
    card_link.className = "card_link";

    const act_link = document.createElement("a");
    act_link.className = "act_link";
    act_link.target = "_blank";

    const i1 = document.createElement("i");
    i1.classList = "fa-solid fa-arrow-up-right-from-square";

    let fileData;

    queryData();

    async function queryData() {
        console.log("Query");
        
        await getDocs(query(collection(db, "Activities"), orderBy("date"), limit(9)))
            .then((resp) => {
                fileData = resp.docs.map((doc) => (doc.data()))
                console.log(fileData);
                loadActive();
            })
    }
        
    function loadActive() {
        console.log("start");
        for(let i = 0; i < fileData.length; i++){
            let path = fileData[i].path;
            let dateid = fileData[i].date.seconds.toString();
            console.log(dateid);
    
            actividades_card.id = "actividades_card" + dateid;
            card_image.id = "card_image" + dateid;
            act_imagen.id = "act_imagen" + dateid;
            card_text.id = "card_text" + dateid;
            card_heading.id = "card_heading" + dateid;
            h4.id = "act_titulo" + dateid;
            h4.innerHTML = fileData[i].title;
            card_date.id = "card_date" + dateid;
            // i0
            span.id = "act_fecha" + dateid;
            span.innerHTML = "Publicado el " + fileData[i].date.toDate().toLocaleDateString('en-GB');
            card_main_text.id = "card_main_text" + dateid;
            act_texto.id = "act_texto" + dateid;
            act_texto.innerHTML = fileData[i].description;
            card_link.id = "card_link" + dateid;
            act_link.id = "act_link" + dateid;
            act_link.href = fileData[i].link
            // i1
    
            actividades_content.appendChild(actividades_card);
                document.querySelector("#actividades_card" + dateid).appendChild(card_image);
                    document.querySelector("#card_image" + dateid).appendChild(act_imagen);
                document.querySelector("#actividades_card" + dateid).appendChild(card_text);
                    document.querySelector("#card_text" + dateid).appendChild(card_heading);
                        document.querySelector("#card_heading" + dateid).appendChild(h4);
                    document.querySelector("#card_text" + dateid).appendChild(card_date);
                        document.querySelector("#card_date" + dateid).appendChild(i0);
                        document.querySelector("#card_date" + dateid).appendChild(span);
                    document.querySelector("#card_text" + dateid).appendChild(card_main_text);
                        document.querySelector("#card_main_text" + dateid).appendChild(act_texto);
                    document.querySelector("#card_text" + dateid).appendChild(card_link);
                        document.querySelector("#card_link" + dateid).appendChild(act_link);
                            document.querySelector("#act_link" + dateid).appendChild(i1);
        }

        for(let i = 0; i < fileData.length; i++){
            const pathRef = ref(getStorage(), fileData[i].path);
            const imgUrl = document.querySelector("#act_imagen" + fileData[i].date.seconds.toString())
            
            getDownloadURL(pathRef)
                .then((url) => {
                    console.log(url);
                    imgUrl.src = url;
                })
        }

        console.log("end");
    }

    async function getImg(path) {
        console.log(path);
        
    }

},false)