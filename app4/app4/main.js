let themeClose = document.getElementById("theme-close");
let themeOpen = document.getElementById("theme-open");
let s = document.querySelector(".theme-container");
let themeToggler = document.querySelector(".theme-toggler");
themeClose.onclick = function() {
    s.style.right = "-400px";
}
themeOpen.onclick = function() {
    s.style.right = "10px";
}
themeToggler.onclick = function() {
    themeToggler.classList.toggle('active');
    if (themeToggler.classList.contains('active')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}
document.querySelectorAll(".theme-colors .color").forEach(e => {
    e.onclick = () => {
        document.querySelector(":root").style.setProperty('--main-color', e.style.background)
    }
})