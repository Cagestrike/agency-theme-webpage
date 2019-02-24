let navbar = document.getElementById("nav");

window.addEventListener('scroll', () => {
    if (window.scrollY) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active');
    }
})

