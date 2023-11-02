// start localStorage 
let mainColor = localStorage.getItem("color_option");
let toggler = localStorage.getItem("toggler");
if (mainColor !== null) {
    document.querySelector(":root").style.setProperty('--main-color', mainColor);

}

// rest localStorage 
let restButton = document.querySelector(".btn-option");
restButton.onclick = function() {
        localStorage.clear();
        window.location.reload();
    }
    // end localStorage 


// start settingBox
let settingBox = document.querySelector(".setting-box");
let icon = document.querySelector(".toogle-settings");
icon.onclick = function() {
    settingBox.classList.toggle("open");
}
let themeToggler = document.querySelector(".theme-toggler");
themeToggler.onclick = function() {
    themeToggler.classList.toggle('active');
    if (themeToggler.classList.contains('active')) {
        localStorage.setItem("toggler", "active");
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
        localStorage.setItem("toggler", "");

    }
}
let themeColor = document.querySelectorAll(".theme-colors .color")
themeColor.forEach(e => {
    e.onclick = () => {
        localStorage.setItem("color_option", e.style.background);
        document.querySelector(":root").style.setProperty('--main-color', e.style.background);
        document.querySelectorAll(".theme-colors .color").forEach(b => {
            b.classList.remove("active");
            e.classList.add("active");
        });
    }
});
if (toggler === "active") {
    document.body.classList.add('active');
    themeToggler.classList.toggle('active');
} else {
    document.body.classList.remove('active');
}

// end settingsBox 
// start navBox 
let bullets = document.querySelectorAll(".nav-bullets .bullet");
let links = document.querySelectorAll(".links li")
console.log(links);

function scrollTo(e) {
    e.forEach(bullet => {
        bullet.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            })
        })
    });

}
scrollTo(bullets);
scrollTo(links);





// end navbox 
let landing = document.querySelector(".landing");
setInterval(() => {
    landing.style.backgroundImage = `url(../image/${[Math.floor(Math.random() * 5)]}.jpg)`;
}, 10000);
// start skills
let ourSkills = document.querySelector(".skills");
let spanWidth = document.querySelectorAll(".skills .skill-box .skill-progress span")
window.onscroll = function() {
        let skillsOffsetTop = ourSkills.offsetTop;
        let skillsOuterHeight = ourSkills.offsetHeight;
        let windowsHeight = window.innerHeight;
        let windowScrollTop = window.pageYOffset;

        if ((windowScrollTop + 200) > (skillsOffsetTop + skillsOuterHeight - windowsHeight)) {
            spanWidth.forEach(skill => {
                skill.style.width = skill.dataset.progress;
            })
        }

    }
    // end skills
    // start Gallary
let ourGallary = document.querySelectorAll(".gallary img");
ourGallary.forEach(img => {
        img.addEventListener('click', (e) => {
            let overlay = document.createElement("div");
            overlay.className = 'popup-overlay'
            document.body.appendChild(overlay);
            let popupBox = document.createElement("div");
            popupBox.className = "popup-box";
            let close = document.createElement("span");
            popupBox.appendChild(close)
            let closeText = document.createTextNode("X")
            close.className = 'popup-close';
            close.appendChild(closeText)
            close.onclick = function() {
                document.body.removeChild(overlay);
                document.body.removeChild(popupBox);
            }
            if (img.alt !== null) {
                let imageHeading = document.createElement("h3")
                let heading = document.createTextNode(img.alt)
                imageHeading.appendChild(heading);
                popupBox.appendChild(imageHeading)
            }
            let popupImage = document.createElement("img");
            popupImage.src = img.src;
            popupBox.appendChild(popupImage);
            document.body.appendChild(popupBox);
        })
    })
    // end Gallery