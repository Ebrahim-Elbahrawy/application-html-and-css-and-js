let reset = document.getElementById("reset");
let img = document.querySelector("img");
let image = document.getElementById("img");
let upload = document.getElementById("upload");
let download = document.getElementById("download")
let saturated = document.getElementById("saturated");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
reset.onclick = function() {
    resetvalue();
}

function resetvalue() {
    img.style.filter = 'block';
    canvas.style.display = 'none';
    saturated.value = "100";
    contrast.value = "100";
    brightness.value = "100";
    sepia.value = "0";
    grayscale.value = "0";
    blur.value = "0";
    hueRotate.value = "0";
}
window.onload = function() {
    download.style.display = 'none';
    reset.style.display = 'none';
    image.style.display = 'none';
}
upload.onchange = function() {
    resetvalue();
    download.style.display = 'block';
    reset.style.display = 'block';
    image.style.display = 'block';
    canvas.style.display = 'block';
    image.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0])
    file.onload = function() {
        img.src = file.result;
    }
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.style.display = 'none'
    }
}
let filters = document.querySelectorAll("ul li input");
filters.forEach(input => {
    input.addEventListener('input', function() {
        ctx.filter = `
        saturate(${saturated.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg) `
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    })
});
download.onclick = function() {
    download.href = canvas.toDataURL('image/jpeg');
}