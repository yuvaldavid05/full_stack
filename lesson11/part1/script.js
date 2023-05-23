function welcome() {
    alert ("ברוכים הבאים");
    console.log("Welcome to the site");
}

function welcome2() {
    const userName = document.getElementById("userName").value;
    alert("ברוך הבא ל" + userName);
}

function multi50() {
    const num = document.getElementById("num1").value;
    alert(num * 50);

}

function multi() {
    const n1 = document.getElementById("num2").value;
    const n2 = document.getElementById("num3").value;

    document.getElementById("output1").innerHTML = n1 * n2;
}

function changeColor() {
    const color = document.getElementById("myColor").value;

    document.body.style.backgroundColor = color;
}

function sum(){
    const n4 = +document.getElementById("num4").value;
    const n5 = +document.getElementById("num5").value;

    document.getElementById("output2").innerHTML = n4 + n5;
}


function sum2(){
    const n1 = +document.getElementById("num6").value;
    const n2 = +document.getElementById("num7").value;
    const res= n1 + n2;

    document.getElementById("output3").innerHTML = (n1 + " + " + n2 + "=" + res);

}