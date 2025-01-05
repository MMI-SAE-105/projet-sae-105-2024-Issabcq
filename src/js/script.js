const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.style.display = 'flex'; // Affiche le menu
});

menuClose.addEventListener('click', () => {
    menu.style.display = 'none'; // Cache le menu
});
