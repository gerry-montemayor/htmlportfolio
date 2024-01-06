const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const navHRLine = document.getElementsByClassName('hr-container')[0];
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  navHRLine.classList.toggle('active');

});