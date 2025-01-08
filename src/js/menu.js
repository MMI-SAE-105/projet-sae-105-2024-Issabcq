// Menu toggle functionality
const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const mainMenu = document.getElementById('mainMenu');

openMenuBtn.addEventListener('click', () => {
    mainMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', () => {
    mainMenu.classList.remove('active');
    document.body.style.overflow = '';
});

// Dropdown functionality
const infoTrigger = document.getElementById('infoTrigger');
const infoDropdown = document.getElementById('infoDropdown');
const arrowIcon = document.querySelector('.menu__arrow-icon');

infoTrigger.addEventListener('click', () => {
    infoDropdown.classList.toggle('active');
    arrowIcon.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideMenu = mainMenu.contains(event.target);
    const isClickOnMenuButton = openMenuBtn.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnMenuButton && mainMenu.classList.contains('active')) {
        mainMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Prevent scroll when menu is open
mainMenu.addEventListener('touchmove', (e) => {
    e.preventDefault();
}, { passive: false });