const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.querySelector('.menu-close');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});