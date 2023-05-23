function showEven(){
    const num = [];

    for(i = 0; i <= 100; i++){
        if (i % 2 == 0){
            num.push(i);
        }
    } 
    document.getElementById("output1").innerHTML = num.join(" , ");
}


function isPrime(){
    const num1 = +document.getElementById("num1").value;
    let isPrime = true;

    for(i = 2; i < num1; i++){
        if(num1 % i == 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        document.getElementById("output2").innerHTML = 'מספר ראשוני';
    } else {
        document.getElementById("output2").innerHTML = 'מספר לא ראשוני';
    }
}

function showDividers(){
    const dividers = [];
    const num2 = +document.getElementById("num2").value;

    for(i = 1; i <= num2; i++){

        if (num2 % i === 0){
            dividers.push(i);
        }
    }
    document.getElementById("output3").innerHTML = dividers.join(" , ");
}

function showNumbersUnder(){
    const numbers = [];
    const num3 = +document.getElementById("num3").value;

    for (i = 1; i <= num3; i++){
        numbers.push(i);
    }
    document.getElementById("output4").innerHTML = numbers.join(" , ");
}

function showNumbersBetween(){
    const num4 = +document.getElementById("num4").value;
    const num5 = +document.getElementById("num5").value;
    const between = [];

    const max = Math.max(num4 , num5);
    const min = Math.min(num4 , num5);

    for(i = min; i <= max; i++){
        between.push(i);
    }
    document.getElementById("output5").innerHTML = between.join(" , ");
}

function showFactorial(){
    const num6 = +document.getElementById("num6").value;
    const factorial = [];
    let res = 1;

    for(i = 1; i <= num6; i++){
        factorial.push(i);
        res *= i;
    }
    document.getElementById("output6").innerHTML = factorial.join("x ") + "=" + res;
}

function showSumNum(){
    const num7 = document.getElementById("num7").value;
    let res = 0;

    for(i = 0; i < num7.length; i++){
        res += +num7[i];
    }
    document.getElementById("output7").innerHTML = res;
}