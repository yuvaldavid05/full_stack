const grades = [88, 96, 75, 100, 101, 95, 34, 45, 85];

function sum(){
    let i = 0;
    let sum = 0;

    while(i < grades.length){
        sum += grades[i];
        i++;
    }

    document.getElementById("output1").innerHTML = sum ;
}

function showAsterisks(){
    let i = 0;

    while(i < 10){
        document.getElementById("output2").innerHTML += "*" +"<br>"; 
        i++;
    }
}

function showNumbers(){
    let i = 1;

    while (i <= 15){
        document.getElementById("output3").innerHTML += i + "<br>";
        i++;
    }
}

function showRange(){
    let i = 10;
    const arr = [];

    while( i <= 30){
        arr.push(i);
        i++;
    }

    document.getElementById("output4").innerHTML = arr.join(" , ")
}

function showSizeNumber(){
    let i = 1;

    while (i <= 100){
        const span = `<span style="font-size: ${i}px">${i}, </span>`;
        document.getElementById("output5").innerHTML += span;
        i++;
    }
}

function avg(){
    let res = 0;

    for (let i = 0; i < grades.length; i++){
        res += grades[i];
    }

    const average = res / grades.length;
    document.getElementById("output6").innerHTML = Math.round(average);
}

function colors(){

    for (let i = 0; i < 30; i++){
        const div = `<div style="background-color:hsl (${i * 30} 50% 52%); height: 50px"></div>`;
        document.getElementById("output7").innerHTML += div;
    }
}

function showSpecialAsterisks(){
    for (let i = 1; i <= 10; i++){

        for(let x = 0; x < i; x++){
            
            document.getElementById("output8").innerHTML = "*";
        }
document.getElementById("output8").innerHTML = "<br>";

    }
}


function showSpecialAsterisks10(){
    for (let i = 1; i <= 10; i++){

        for(let x = 1; x <= 10; x++){
            document.getElementById("output9").innerHTML += "*";
        }
        document.getElementById("output8").innerHTML += "<br>";
    }
}



