window.addEventListener('load', function() {

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
    addButton.onclick = (e) => {
        e.preventDefault();
        d = document.querySelector("#dayInput").value;
        m = document.querySelector("#monthInput").value;
        celeb = document.querySelector("#celebInput").value;

        if((d > 31 || m > 31) || (d > new Date(new Date().getFullYear(), 2 , 0).getDate() && m == 2) || (d > 30 && [4,6,9,11].includes(m))){
            document.querySelector(".msj").innerHTML = "Fecha NO valida.";
        } else {

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

    const holyDay = [
        {
            day: "Ene1",
            celebration: ["Año Nuevo"],
            img: ""
        },
        {
            day: "Ene3",
            celebration: ["Ascenso de Alejandro de Humbolt y Aimé Bonpland al pico El Ávila."],
            img: ""
        },
        {
            day: "Ene4",
            celebration: ["Muerte de Rafael María Baralt."],
            img: ""
        },
        {
            day: "Ene6",
            celebration: ["Día de Reyes."],
            img: ""
        },
        {
            day: "Ene10",
            celebration: ["Muerte del General Ezequiel Zamora."],
            img: ""
        },
        {
            day: "Ene14",
            celebration: ["Día de la Virgen de la Divina Pastora."],
            img: ""
        },
        {
            day: "Ene15",
            celebration: ["Día del Maestro."],
            img: ""
        },
        {
            day: "Ene16",
            celebration: ["Muerte Juan Vicente Bolívar y Ponte padre del Libertador Simón Bolívar."],
            img: ""
        },
        {
            day: "Ene23",
            celebration: ["Natalicio de José Francisco Bermúdez.", "Caída de dictadura de Marcos Pérez Jiménez."],
            img: ""
        },
        {
            day: "Ene27",
            celebration: ["Natalicio de Juan Crisóstomo Falcón."],
            img: ""
        },
        {
            day: "Ene31",
            celebration: ["Muerte de José Félix Ribas."],
            img: ""
        },
        {
            day: "Feb1",
            celebration: ["Natalicio de Cecilio Acosta."],
            img: ""
        },
        {
            day: "Feb2",
            celebration: ["Día de la Virgen de la Candelaria."],
            img: ""
        },
        {
            day: "Feb3",
            celebration: ["Natalicio del Mariscal Antonio José de Sucre."],
            img: ""
        },
        {
            day: "Feb7",
            celebration: ["Natalicio de Almirante Cristóbal Colón.", "Muerte de General Agustín Codazzi."],
            img: ""
        },
        {
            day: "Feb11",
            celebration: ["Muerte del General Carlos Soublette."],
            img: ""
        },
        {
            day: "Feb12",
            celebration: ["Batalla de La Victoria."],
            img: ""
        },
        {
            day: "Feb14",
            celebration: ["Día de San Valentín."],
            img: ""
        },
        {
            day: "Feb20",
            celebration: ["Día de la Federación."],
            img: ""
        },
        {
            day: "Feb24",
            celebration: ["Natalicio de Daniel Florencio O'Leary."],
            img: ""
        },
        {
            day: "Feb25",
            celebration: ["Muerte del General Jacinto Lara."],
            img: ""
        },
        {
            day: "Feb28",
            celebration: ["Natalicio del General Antonio Guzmán Blanco.", "Natalicio de José María España.", "Muerte de Simón Rodríguez."],
            img: ""
        },
        {
            day: "Mar1",
            celebration: ["Fundación de San Carlos."],
            img: ""
        },
        {
            day: "Mar10",
            celebration: ["Natalicio de José María Vargas."],
            img: ""
        },
        {
            day: "Mar14",
            celebration: ["Natalicio de Luis Beltrán Prieto Figueroa."],
            img: ""
        },
        {
            day: "Mar15",
            celebration: ["Natalicio de Juan Bautista Arismendi."],
            img: ""
        },
        {
            day: "Mar17",
            celebration: ["Muerte de Vicente Campo Elías."],
            img: ""
        },
        {
            day: "Mar19",
            celebration: ["Día de San José."],
            img: ""
        },
        {
            day: "Mar25",
            celebration: ["Fundación de Valencia (1814).", "Muerte Antonio Ricaurte."],
            img: ""
        },
        {
            day: "Mar27",
            celebration: ["Natalicio de Antonio Arraiz."],
            img: ""
        },
        {
            day: "Mar28",
            celebration: ["Natalicio de Francisco de Miranda."],
            img: ""
        },
        {
            day: "Mar31",
            celebration: ["Fundación de San Cristóbal (1561)."],
            img: ""
        },
        {
            day: "Abr7",
            celebration: ["Día Mundial de la Salud."],
            img: ""
        },
        {
            day: "Abr11",
            celebration: ["Día de la Batalla de San Félix."],
            img: ""
        },
        {
            day: "Abr14",
            celebration: ["Día del Panamericanismo."],
            img: ""
        },
        {
            day: "Abr19",
            celebration: ["Primer movimiento preindependentista. Destitución de Vicente Emparan, el 19 de abril de 1810."],
            img: ""
        },
        {
            day: "Abr22",
            celebration: ["Día de La Tierra."],
            img: ""
        },
        {
            day: "Abr23",
            celebration: ["Día del Idioma y del Libro."],
            img: ""
        },
        {
            day: "Abr25",
            celebration: ["Natalicio del presidente, general Marcos Pérez Jiménez en Michelena, Estado Táchira."],
            img: ""
        },
        {
            day: "Abr26",
            celebration: ["Natalicio de Raúl Leoni."],
            img: ""
        },
        {
            day: "Abr28",
            celebration: ["Natalicio de Manuel Carlos Piar."],
            img: ""
        },
        {
            day: "May1",
            celebration: ["Día Internacional del Trabajador."],
            img: ""
        },
        {
            day: "May3",
            celebration: ["Día de Cruz de Mayo."],
            img: ""
        },
        {
            day: "May6",
            celebration: ["Muerte del General José Antonio Páez"],
            img: ""
        },
        {
            day: "May20",
            celebration: ["Muerte del Almirante Cristóbal Colón."],
            img: ""
        },
        {
            day: "May21",
            celebration: ["Muerte de Andrés Eloy Blanco."],
            img: ""
        },
        {
            day: "May25",
            celebration: ["Día del Himno Nacional."],
            img: ""
        },
        {
            day: "May28",
            celebration: ["Natalicio del General Jacinto Lara."],
            img: ""
        },
        {
            day: "Jun2",
            celebration: ["Muerte de Luisa Cáceres de Arismendi."],
            img: ""
        },
        {
            day: "Jun3",
            celebration: ["Muerte del Mariscal Antonio José de Sucre."],
            img: ""
        },
        {
            day: "Jun5",
            celebration: ["Natalicio del artista Jesús Soto.", "Día Internacional del Ambiente."],
            img: ""
        },
        {
            day: "Jun13",
            celebration: ["Natalicio de José Antonio Páez."],
            img: ""
        },
        {
            day: "Jun15",
            celebration: ["Decreto de Guerra a Muerte."],
            img: ""
        },
        {
            day: "Jun16",
            celebration: ["Natalicio de Arturo Michelena."],
            img: ""
        },
        {
            day: "Jun22",
            celebration: ["Instalación del Congreso Anfictiónico de Panamá.", "Muerte del General Juan Bautista Arismendi."],
            img: ""
        },
        {
            day: "Jun24",
            celebration: ["Batalla de Carabobo (1821).", "Día del Ejército.", "Festividad de San Juan."],
            img: ""
        },
        {
            day: "Jun29",
            celebration: ["Muerte de José Gregorio Hernández."],
            img: ""
        },
        {
            day: "Jul5",
            celebration: ["Declaración de Independencia."],
            img: ""
        },
        {
            day: "Jul8",
            celebration: ["Muerte de Cecilio Acosta."],
            img: ""
        },
        {
            day: "Jul10",
            celebration: ["Natalicio de Antonio Ricaurte."],
            img: ""
        },
        {
            day: "Jul13",
            celebration: ["Muerte de José María Vargas."],
            img: ""
        },
        {
            day: "Jul14",
            celebration: ["Muerte del Generalísimo Francisco de Miranda."],
            img: ""
        },
        {
            day: "Jul16",
            celebration: ["Día de la Virgen del Carmen."],
            img: ""
        },
        {
            day: "Jul19",
            celebration: ["Natalicio de Juan José Flores."],
            img: ""
        },
        {
            day: "Jul23",
            celebration: ["Natalicio de Cristóbal Mendoza."],
            img: ""
        },
        {
            day: "Jul24",
            celebration: ["Natalicio del Libertador Simón Bolívar.", "Natalicio de Juan Vicente Gómez.", "Batalla naval del Lago de Maracaibo."],
            img: ""
        },
        {
            day: "Jul25",
            celebration: ["Natalicio de Santiago Mariño.", "Fundación de Caracas."],
            img: ""
        },
        {
            day: "Jul26",
            celebration: ["Fundación de Coro."],
            img: ""
        },
        {
            day: "Jul29",
            celebration: ["Muerte de Arturo Michelena."],
            img: ""
        },
        {
            day: "Ago2",
            celebration: ["Cristóbal Colón llega a Venezuela."],
            img: ""
        },
        {
            day: "Ago3",
            celebration: ["Día de la Bandera."],
            img: ""
        },
        {
            day: "Ago6",
            celebration: ["Natalicio de Andrés Eloy Blanco."],
            img: ""
        },
        {
            day: "Ago10",
            celebration: ["Natalicio de Juan Manuel Cajigal."],
            img: ""
        },
        {
            day: "Sep6",
            celebration: ["La Carta de Jamaica, escrita por Simón Bolívar en 1815."],
            img: ""
        },
        {
            day: "Sep8",
            celebration: ["Día de la Virgen del Valle."],
            img: ""
        },
        {
            day: "Sep10",
            celebration: ["Fundación de la OPEP."],
            img: ""
        },
        {
            day: "Sep11",
            celebration: ["Aparición de la Virgen de Coromoto."],
            img: ""
        },
        {
            day: "Sep19",
            celebration: ["Natalicio de José Félix Ribas."],
            img: ""
        },
        {
            day: "Sep23",
            celebration: ["Natalicio de Fermín Toro."],
            img: ""
        },
        {
            day: "Sep24",
            celebration: ["Día de la Virgen de las Mercedes."],
            img: ""
        },
        {
            day: "Sep25",
            celebration: ["Natalicio de Luisa Cáceres de Arismendi."],
            img: ""
        },
        {
            day: "Oct4",
            celebration: ["Muerte de Juan Antonio Pérez Bonalde."],
            img: ""
        },
        {
            day: "Oct5",
            celebration: ["Natalicio de Teresa de la Parra."],
            img: ""
        },
        {
            day: "Oct7",
            celebration: ["Día de la Virgen Nuestra Señora del Rosario."],
            img: ""
        },
        {
            day: "Oct10",
            celebration: ["Natalicio de Francisco Antonio Rísquez."],
            img: ""
        },
        {
            day: "Oct12",
            celebration: ["Día de la resistencia indígena."],
            img: ""
        },
        {
            day: "Oct26",
            celebration: ["Natalicio de José Gregorio Hernández."],
            img: ""
        },
        {
            day: "Oct28",
            celebration: ["Natalicio de José Tadeo Monagas y de Simón Rodríguez."],
            img: ""
        },
        {
            day: "Nov2",
            celebration: ["Día de los fieles difuntos."],
            img: ""
        },
        {
            day: "Nov14",
            celebration: ["Natalicio del General José Antonio Anzoátegui."],
            img: ""
        },
        {
            day: "Nov15",
            celebration: ["Muerte del General José Antonio Anzoátegui."],
            img: ""
        },
        {
            day: "Nov20",
            celebration: ["Conmemoración de la Convención Internacional de los derechos del niño."],
            img: ""
        },
        {
            day: "Nov21",
            celebration: ["Día del Estudiante Universitario."],
            img: ""
        },
        {
            day: "Nov25",
            celebration: ["Día Internacional de la Eliminación de la Violencia contra la Mujer.", "Natalicio de José Gil Fortoul."],
            img: ""
        },
        {
            day: "Nov29",
            celebration: ["Natalicio de Andrés Bello."],
            img: ""
        },
        {
            day: "Dic1",
            celebration: ["Día mundial de la lucha contra el SIDA."],
            img: ""
        },
        {
            day: "Dic8",
            celebration: ["Día de la Inmaculada Concepción."],
            img: ""
        },
        {
            day: "Dic10",
            celebration: ["Día de la Fuerza Aérea Venezolana.", "Día de la Declaración Universal de los Derechos Humanos."],
            img: ""
        },
        {
            day: "Dic12",
            celebration: ["Día de Nuestra Señora de Guadalupe."],
            img: ""
        },

        {
            day: "Dic17",
            celebration: ["Muerte de Simón Bolívar."],
            img: ""
        },
        {
            day: "Dic24",
            celebration: ["Víspera de Navidad."],
            img: ""
        },
        {
            day: "Dic25",
            celebration: ["Navidad/Natividad."],
            img: ""
        },
        {
            day: "Dic28",
            celebration: ["Día de los Inocentes."],
            img: ""
        },
        {
            day: "Dic31",
            celebration: ["Fin de año."],
            img: ""
        }
    ]
    
    for(let i = 0; i < holyDay.length; i++){

        console.log(holyDay[i].day);
        console.log(holyDay.length);

        let id = holyDay[i].day;

        const dayDiv = document.createElement("div");
        dayDiv.className = "dayDiv";
        document.querySelector("#" + id).appendChild(dayDiv);

        const mark = document.createElement("img");
        mark.className = "markImg";
        mark.src = "../assets/img/markBandera.png"

        console.log(id);

        document.querySelector("#" + id + " .dayDiv").appendChild(mark);
    }

}, false);