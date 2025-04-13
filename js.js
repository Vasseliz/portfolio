const menuBtn = document.getElementById('botaoMenu');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('menuSobreposto');

function openMenu() {
  mobileMenu.classList.add('open');
  overlay.classList.remove('hidden');
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  overlay.classList.add('hidden');
}

menuBtn.addEventListener('click', openMenu);
overlay.addEventListener('click', closeMenu);

document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', closeMenu);
});