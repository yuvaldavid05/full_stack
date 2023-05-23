const first = "israel";
const last = "israeli";

function sayHola(){
    alert ("Hola" + " " + first + " " + last);
}

function changeName(){
    prompt ("הכנס שם מלא");
    const fullname = document.getElementById("prompt").value;
}

function name() {
    alert ("Hola" + " " + fullname);
}

function what(){
    const pick = document.getElementById("pick").value;

    if(pick == "אמור הולה")
    alert("אמור הולה");
} else if