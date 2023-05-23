function plus(){
    const num1 = +document.getElementById("num1").value;
    const num2 = +document.getElementById("num2").value;

    document.getElementById("output1").innerHTML = num1 + num2;
}

function ex2(num3 , num4){
    console.log( +num3 + +num4);
}

ex2();

function return1(){
    const num5 = +document.getElementById("num1").value;
    const num6 = +document.getElementById("num2").value;

    return num5 + num6;
}

function return2(num7 , num8){
    return (+num7 + +num8)
}

return2();


function multi(){
    const num9 = +document.getElementById("num9").value;
    const num10 = +document.getElementById("num10").value;

    document.getElementById("output2").innerHTML = num9 * num10;
}

function tax(){
    const price = +document.getElementById("befor").value;

    document.getElementById("output3").innerHTML = price * 1.1 ; 
}

function tax_console(price){
    console.log(+price * 1.1)
}

function tax2(){
    let price2 = +document.getElementById("befor2").value;

    return price2 * 1.1;
}

