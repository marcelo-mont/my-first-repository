const navMenu = document.querySelector('.nav-menu');
const sanduiche = document.querySelector('.sanduiche');

function toggleMenu() {
    sanduiche.classList.toggle('active');
    navMenu.classList.toggle('active');
}

sanduiche.addEventListener('click', toggleMenu);