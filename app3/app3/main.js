let img = document.querySelector('.image');
let body = document.querySelector("body")

function changeImage(phone) {
    img.src = phone;
}

function color(color) {
    body.style.background = color;
}