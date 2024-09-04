(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();


document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.mobile-menu-link');

  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); 

      const subMenu = this.nextElementSibling;

      const icon = this.querySelector('.icon-mobile');

      if (subMenu && subMenu.classList.contains('header-sub-list')) {
        subMenu.classList.toggle('active');

        icon.classList.toggle('icon-rotated');
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const descLinks = document.querySelectorAll('.desc-link');

  descLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); 

      const subMenu = this.nextElementSibling;

      document.querySelectorAll('.desc-list.active').forEach(activeSubMenu => {
        if (activeSubMenu !== subMenu) {
          activeSubMenu.classList.remove('active');
        }
      });

      if (subMenu && subMenu.classList.contains('desc-list')) {
        subMenu.classList.toggle('active'); 
      }
    });
  });
});








