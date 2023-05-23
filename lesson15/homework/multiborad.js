

for (let y = 1; y <= 10; y++) {
    for (let x = 1; x <= 10; x++){
        const div = document.createElement("div");
        div.innerHTML = x * y;
        document.getElementById("board").appendChild(div);
    }
}



// let board = "";

// for(let y = 1; y <= 10; y++){
//     for(let x = 1; x <= 10; x++){
//         board += `<div> ${x * y} </div>`;
//     }
// }
// document.getElementById("board").innerHTML = board;