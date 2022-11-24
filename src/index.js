const navToggle = document.querySelector('.nav-toggler');
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

const navLinks = document.querySelectorAll('.nav__link')
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
