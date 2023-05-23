const numbers = [56, 89, 77, 36, 20, 100, 96, 35, 48, 77, 80];


function addToArray(ev){
const value = ev.target.value;

    if (keycode.target === 13 && value ){
    numbers.push(+value);

    ev.target.value = "";
    }

}

function showArray(){
    document.getElementById("output1").innerHTML = numbers.join(" , ");
}

function sum(){
    let res = 0;

    for (i = 0; i < numbers.length; i++){
        res += numbers[i];
    }
    document.getElementById("output2").innerHTML = res;
}

function avg(){
    let res = 0;

    for (i = 0; i < numbers.length; i++){
        res += numbers[i];
    }
    document.getElementById("output3").innerHTML = Math.round(res / numbers.length);
}

function max(){
    let big = numbers[0];

    for(i = 1; i < numbers.length; i++){
        if (numbers[i] > big){
            big = numbers[i];
        }
    }
    document.getElementById("output4").innerHTML = big;
}

function min(){
    let small = numbers[0];

    for(i = 1; i < numbers.length; i++){
        if (numbers[i] < small){
            small = numbers[i];
        }
    }
    document.getElementById("output5").innerHTML = small;
}

function allfunction(){
showArray();
sum();
avg();
max();
min();
}

