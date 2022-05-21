window.addEventListener('load', function() {

    const hero = document.querySelector(".hero-section");
    hero.style.height = "8rem";
    hero.style.minHeight = "0rem";

    const year = document.createElement("div");
    year.className = "year";
    document.querySelector("#calendar").appendChild(year);

    const arrayMonth = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    const arrayDays = [31,31,28,31,30,31,30,31,31,30,31,30,31,31];
    let ene1 = new Date(new Date().getFullYear(), 0, 1).getDay();
    let start = ene1;

    for(let i = 0; i < 12; i++){

        let dayNum = arrayDays[i+1];

        const month = document.createElement("div");
        month.id = arrayMonth[i];
        month.className = "month"
        document.querySelector(".year").appendChild(month)

        const monthTitle = document.createElement("h3");
        monthTitle.innerText = arrayMonth[i][0].toUpperCase() + arrayMonth[i].slice(1);
        document.querySelector("#" + arrayMonth[i]).appendChild(monthTitle);

        const dayGrid = document.createElement("div")
        dayGrid.id = "dayGrid" + arrayMonth[i]
        dayGrid.className = "dayGrid"

        document.querySelector("#" + arrayMonth[i]).appendChild(dayGrid);
        
        let row = 0;

        if ((start + dayNum) % 7 == 0){
            row = (start + dayNum) / 7;

            if(start == 7){
                row --;
                start = 0;
            }

            console.log(row);
            document.querySelector("#dayGrid" + arrayMonth[i]).style.gridTemplateRows = "repeat(" + row + ", auto)";
        } else {
            row = Math.floor((start + dayNum) / 7) + 1;
            
            if(start == 7){
                row --;
                start = 0;
            }
            
            console.log(row);
            document.querySelector("#dayGrid" + arrayMonth[i]).style.gridTemplateRows = "repeat(" + row + ", auto)"
        }  
        
        console.log("start: " + start);

        for(let j = 0; j < (row * 7); j++){
            const day = document.createElement("div");
            day.id = arrayMonth[i].slice(0,3) + (j+1);
            day.className = "day"

            if (j < start){
                day.innerHTML = arrayDays[i] - start + j + 1;
            } else if (j >= start && j < dayNum + start){
                day.innerHTML = j - start + 1;
            } else if (j >= dayNum + start ){
                day.innerHTML = j - start - dayNum + 1;
            }

            document.querySelector("#dayGrid" + arrayMonth[i]).appendChild(day);
        }

        start = 7 - ((row * 7) - start - dayNum);
    }

    

    
    

}, false);