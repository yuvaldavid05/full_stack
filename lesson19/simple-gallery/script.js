const images = ["תמונה (1).jpg", "תמונה (2).jpg", "תמונה (3).jpg", "תמונה (4).jpg", "תמונה (5).jpg", "תמונה (6).jpg", "תמונה (7).jpg", "תמונה (8).jpg", "תמונה (9).jpg", "תמונה (10).jpg", "תמונה (11).jpg", "תמונה (12).jpg", "תמונה (13).jpg", "תמונה (14).jpg", "תמונה (15).jpg", "תמונה (16).jpg", "תמונה (17).jpg"];

let currentImage = 0;

function nextImage() {
    if (currentImage >= images.length) {
        currentImage = 0;
    }

    const img = document.querySelector('#gallery img');
    img.src = `images/${images[currentImage]}`;

    currentImage++;
}

nextImage();

// let currentImage = 0;

// function nextImage() {
//     if (currentImage >= images.length) {
//         currentImage = 0;
//     }

//     // קודם כל מאפסים את הגלרייה
//     const gallery = document.querySelector('#gallery');
//     gallery.innerHTML = "";

//     // יוצרים אלמנט של תמונה ומציגים אותה
//     const img = document.createElement('img');
//     img.src = `images/${images[currentImage]}`;
//     gallery.appendChild(img);

//     currentImage++;
// }

// nextImage();


function prevImage(ev){
    ev.preventdefult
}