const task1 = document.querySelector("#task1");

task1.querySelector('button').addEventListener('click' , function (){
    const num = Math.floor(Math.random() * 50) + 1;
    task1.querySelector('p').innerHTML = num ; 
});

const task2 = document.querySelector("#task2");

task2.querySelector('button').addEventListener('click', function (){
    const num1 = task2.querySelector("input").value;
    const rand = Math.random();
    const res = Math.floor(rand * num1) + 1;
    task2.querySelector('p').innerHTML = res;
});

const task3 = document.querySelector("#task3");

task3.querySelector('button').addEventListener('click', function(){
    const min = +task3.querySelector("#min").value;
    const max = +task3.querySelector("#max").value;

    const rand = Math.random();
    const res = Math.floor(rand * (max - min + 1)) + min;

    task3.querySelector('p').innerHTML = res;
});


const task4 = document.querySelector("#task4");

const chars = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ל","מ","נ","ס","ע","פ","צ","ק","ר","ש","ת","ך","ם","ן","ף","ץ"];

task4.querySelector('button').addEventListener('click', function(){

    const len = task4.querySelector("input").value;
    let res = "";

    for( i = 0; i <= len; i++){
        const num = Math.floor(Math.random() * chars.length);
        res += chars[num];

        if (i % 6 === 0){
            res += " ";
        }

    }
    task4.querySelector('p').innerHTML = res;
});