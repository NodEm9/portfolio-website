let navigationBar = (function () {
  let navToggle = document.querySelector('.hamburger');
  let nav = document.querySelectorAll('.navigation');
  let closeButton = document.querySelector('.close');

  let show = false;

  // Toggle navigation
  function toggleNav() {
    if (!show) {
      nav.forEach(item => item.classList.add('hide'));
      show = true;
    } else {
      nav.forEach(item => item.classList.remove('hide'));
      show = false;
    }

    return show;
  }
  // Burger button
  function burgerButton() {
    return toggleNav();
  }

  nav.forEach(item => item.addEventListener('click', burgerButton));
  navToggle.addEventListener('click', burgerButton);
  closeButton.addEventListener('click', burgerButton);

  return burgerButton
  
})();  // IIFE


