const toggleButton = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleButton.addEventListener('click', function() {
    //navMenu.classList.toggle('active');
    navMenu.style.display = "block";
})

const closeButton = document.querySelector('.close-btn');
closeButton.addEventListener('click', function() {
    navMenu.style.display = "none";
})

const navLinks = document.querySelectorAll('.close-li');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.style.display = "none";
    })
})