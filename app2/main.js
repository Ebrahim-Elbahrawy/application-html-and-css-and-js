let sp = document.querySelectorAll("span.text");
let p = document.querySelector("#nav_toggle i")
let doo = document.getElementById("nav_toggle");
console.log(doo)
doo.onclick = function() {
    p.classList.toggle("rotate");
    sp.forEach(element => {
        element.classList.toggle("text");
    });
}