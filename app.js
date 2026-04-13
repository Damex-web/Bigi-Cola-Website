// Nav Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 50) {
        navbar.classList.add("scrolled");
    }else {
        navbar.classList.remove("scrolled");
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");
const revealOnScroll = function () {
    revealElements.forEach( function (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
};


// Mobile meun button
const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    if (navLinks.classList.contains("show")) {
        menuBtn.textContent = "✕";
    }else {
        menuBtn.textContent = "☰"
    }
});

navLinks.querySelectorAll("a").forEach( function (link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("show");
        menuBtn.textContent = "☰";
    })
})

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
