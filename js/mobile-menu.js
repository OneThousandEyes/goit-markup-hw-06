(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    menuLinks: document.querySelectorAll(".mobile-menu-nav-link"),
  };

  if (!refs.openMenuBtn || !refs.closeMenuBtn || !refs.menu) {
    return;
  }

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
  }

  function closeMenu() {
    refs.menu.classList.remove("is-open");
  }
})();
