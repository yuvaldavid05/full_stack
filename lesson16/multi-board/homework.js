for (let y = 1; y <= 10; y++){
    for(let x = 1; x <= 10; x++){
        const div = document.createElement("div");
        div.innerHTML = x * y;
        
        div.addEventListener("click", function(ev){
            ev.target.classList.toggle('color');
        })

        document.getElementById("board").appendChild(div);
    }
}
