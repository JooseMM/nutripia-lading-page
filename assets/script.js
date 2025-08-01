const IS_VISIBLE_CLASS = "navbar__navigation--visible";
const ANIMATION_TIME = 300;
const menuTogglerButton = document.getElementById("menuToggler");
const navigationMenuWrapper = document.getElementById("navigationMenu");

function onMenuInteraction(hide) {
  const isVisible = navigationMenuWrapper.classList.contains(IS_VISIBLE_CLASS);
  const isMobile = window.innerWidth > 1000;
  const isAlreadyHide = !isVisible && hide;

  if (isMobile || isAlreadyHide) {
    return;
  }

  updateMenuVisibility(isVisible || hide);
  updateButtonIcon(isVisible || hide);
}

function updateMenuVisibility(hide) {
  if (hide) {
    navigationMenuWrapper.classList.add("fade-out");
    setTimeout(
      () => navigationMenuWrapper.classList.remove("fade-in", IS_VISIBLE_CLASS),
      ANIMATION_TIME,
    );
  } else {
    navigationMenuWrapper.classList.add("fade-in", IS_VISIBLE_CLASS);
    navigationMenuWrapper.classList.remove("fade-out");
  }
}

function updateButtonIcon(hide) {
  const menuTogglerIcon = document.getElementById("menuTogglerIcon");
  const spin = () => {
    menuTogglerIcon.classList.add("spin");
    setTimeout(() => menuTogglerIcon.classList.remove("spin"), ANIMATION_TIME);
  };

  if (hide) {
    spin();
    setTimeout(
      () => (menuTogglerIcon.src = "assets/icons/hamburguer.png"),
      ANIMATION_TIME * 0.8,
    );
  } else {
    spin();
    setTimeout(
      () => (menuTogglerIcon.src = "assets/icons/close-menu.png"),
      ANIMATION_TIME * 0.5,
    );
  }
}

/* Register Events */

menuTogglerButton.onclick = (event) => {
  event.stopPropagation();
  onMenuInteraction();
};

document.onclick = () => {
  onMenuInteraction(true);
};
