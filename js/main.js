let menu = document.getElementById('menu');

let navbar = document.querySelector('header .navbar');

let scrollBar = document.querySelector('.scroll-bar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    scrollIndicator();
}

function scrollIndicator() {
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    scrollBar.style.width = percentage + '%';
}

