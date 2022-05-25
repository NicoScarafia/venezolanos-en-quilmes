// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, doc, collection, setDoc, getDoc, getDocs, deleteDoc, updateDoc, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";


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
    let usersData;
    let logTrue;

    if(JSON.parse(sessionStorage.getItem("loginSomosVen"))){
        logTrue = sessionStorage.getItem("loginSomosVen");
        document.querySelector(".usersAdm").style.display = "block";
        document.querySelector("#login").style.display = "none"
        userLog = sessionStorage.getItem("usuarioSV")
        document.querySelector(".logedUser").innerHTML = userLog;
        getUsers();

        if(JSON.parse(sessionStorage.getItem("sudoSV"))){
            document.querySelector("#addUser").style.display = "block";

        } else {
            document.querySelector("#addUser").style.display = "none";
        }
        

    } else {
        logTrue = false;
    }    
    
    const user = document.querySelector("#user");
    const pass = document.querySelector("#pass");

    const submit = document.querySelector("#submit")
    submit.onclick = (e) => {
            e.preventDefault();
            login();
        }

    async function login() {
        let u = user.value;
        let p = pass.value;
        let userData;

        try {
            console.log(u);
            console.log(p);
            userData = await getDoc(doc(db, "Users", u))

        } catch (err){            
            console.error(err);
        }

        if(userData.exists()){
            console.log(userData);
            console.log(u);
            console.log(p);
            console.log(userData.data());
            console.log(userData.data().sudo);

            if(userData.data().pass == p){
                logTrue = true;
                sessionStorage.setItem("loginSomosVen", true);
                document.querySelector(".usersAdm").style.display = "block";

                if(userData.data().sudo === true){
                    document.querySelector("#addUser").style.display = "block";
                    sessionStorage.setItem("sudoSV", true);
                } else {
                    document.querySelector("#addUser").style.display = "none";
                    sessionStorage.setItem("sudoSV", false);
                }

                getUsers();
                document.querySelector("#login").style.display = "none"
                document.querySelector(".logedUser").innerHTML = u;
                sessionStorage.setItem("usuarioSV", u);
                userLog = sessionStorage.getItem("usuarioSV");
            } else {
                document.querySelector(".msj").innerHTML = "Usuario y/o contraseña invalidos.";
                document.querySelector(".msj").style.color = "red"
            }               
        } else {
            document.querySelector(".msj").innerHTML = "Usuario y/o contraseña invalidos.";
            document.querySelector(".msj").style.color = "red"
        }
    }

    async function getUsers() {
        try {
            await getDocs(collection(db, "Users"))
                .then(
                    (resp) => {
                        usersData = resp.docs.map((doc) => ({id: doc.id}));
                        console.log(usersData);
                        
                        for(let i = 0; i < usersData.length; i++){
                            const userLi = document.createElement("li");
                            userLi.id = usersData[i].id;
                            userLi.innerHTML = "- " + usersData[i].id;

                            const del = document.createElement("button");
                            del.id = usersData[i].id + "Del";
                            del.innerHTML = "Eliminar";
                            del.className = "delete";
                            
                            if(JSON.parse(sessionStorage.getItem("sudoSV"))){
                                del.style.display = "block";
                            } else {
                                del.style.display = "none";
                            }

                            del.onclick = () => {eliminar(usersData[i].id);}
                            
                            document.querySelector(".userAdmUl").appendChild(userLi);
                            document.querySelector("#" + usersData[i].id).appendChild(del);
                        }
                    }
                )
        } catch (err){
            console.log(err);
        }
    }

    const changePass = document.querySelector(".changePass");
    changePass.onclick = () => {changeP()};

    const newUser = document.querySelector("#newUser");
    const pass0 = document.querySelector("#pass0");
    const pass1 = document.querySelector("#pass1");

    const currentPass = document.querySelector("#currentPass");
    const newPass0 = document.querySelector("#newPass0");
    const newPass1 = document.querySelector("#newPass1");

    async function changeP(){
        document.querySelector("#changePassUser").style.display = "flex"
    }

    const addUser = document.querySelector("#addUser");
    addUser.onclick = () => {add()}

    async function add() {
        document.querySelector(".addUserInput").style.display = "flex"
    }

    const confirmUser = document.querySelector("#confirmUser");
    confirmUser.onclick = (e) => {
        e.preventDefault();
        addUserB(newUser.value, pass0.value, pass1.value)}

    async function addUserB(us, p0, p1) {
        
        if(check(us, p0, p1)){
            
            let sudoCheck = false;

            if(document.querySelector("#sudo").checked){
                sudoCheck = true;
            } 
            
            try {
                await setDoc(doc(db, "Users", us), {
                    pass: p0,
                    sudo: sudoCheck
                })
                    .then(() => {
                        document.querySelector(".addUserMsj").innerHTML = "Usuario agregado correctamente.";                        document.querySelector(".addUserMsj").style.color = "green"
                        newUser.value = "";
                        newPass0.value = "";
                        newPass1.value = "";
                        while(document.querySelector(".userAdmUl").firstChild){
                            document.querySelector(".userAdmUl").removeChild(document.querySelector(".userAdmUl").firstChild)
                        }
                        getUsers();
                    })
            } catch (err) {
                console.log(err);
            }

        } else {
            document.querySelector(".addUserMsj").innerHTML = "¡El usuario ya esta registrado o las contraseñas no coinciden!"
            document.querySelector(".addUserMsj").style.color = "red"
        }
    }

    async function eliminar(id) {
        await deleteDoc(doc(db, "Users", id))
            .then(() => {
                document.querySelector("#" + id).remove()
            })

    }

    const closeSession = document.querySelector("#closeSession");
    closeSession.onclick = () => {close()}

    function check(us, p0, p1) {
        console.log(p0);
        console.log(p1);
        console.log(us);
        if(p0 !== p1 || p0 === "" || p1 === ""){
            return false;
        } 

        for(let u = 0; u < usersData.length; u++){
            if(usersData[u].id === us){
                return false;
            }
        }
        
        return true;
    }

    function close() {
        sessionStorage.setItem("loginSomosVen", false);
        sessionStorage.setItem("sudoSV", false);
        sessionStorage.setItem("usuarioSV", "");
        document.querySelector("#login").style.display = "flex";
        document.querySelector(".usersAdm").style.display = "none";
        user.value = "";
        pass.value = "";
        while(document.querySelector(".userAdmUl").firstChild){
            document.querySelector(".userAdmUl").removeChild(document.querySelector(".userAdmUl").firstChild)
        }
    }

    


}, false)