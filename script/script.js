const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('open');
});

menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    menu.classList.toggle('close');
  }
});
