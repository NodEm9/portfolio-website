
let navigationBar = (function () {
  let navToggle = document.querySelector('.burgerButton');
  let nav = document.querySelectorAll('.navigation');
  let closeButton = document.querySelector('.close');

  let show = false;


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


  function burgerButton() {
    let burgerButton = toggleNav();
    return burgerButton;
  }

  navToggle.addEventListener('click', burgerButton);
  closeButton.addEventListener('click', burgerButton);

  return {
    burgerButton
  }

})();  // IIFE
