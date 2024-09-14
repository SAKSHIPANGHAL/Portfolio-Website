
var typed = new Typed(".typed-text", {
    strings: ["Frontend Developer", "Youtuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}
