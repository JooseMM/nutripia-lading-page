const menuTogglerButton = document.getElementById("menuToggler");

function toggleMenuVisibility(shouldHide) {
  const navigationMenuWrapper = document.getElementById("navigationMenu");
  const menuTogglerIcon = document.getElementById("menuTogglerIcon");

  if (!shouldHide) {
    navigationMenuWrapper.classList.toggle("navbar__navigation--visible");
  } else {
    navigationMenuWrapper.classList.remove("navbar__navigation--visible");
  }

  const isVisible = navigationMenuWrapper.classList.contains(
    "navbar__navigation--visible",
  );

  if (isVisible) {
    menuTogglerIcon.src = "assets/icons/close-menu.png";
  } else {
    menuTogglerIcon.src = "assets/icons/hamburguer.png";
  }
}

/* Register Events */

menuTogglerButton.onclick = (event) => {
  event.stopPropagation();
  toggleMenuVisibility();
};

document.onclick = () => {
  toggleMenuVisibility(true);
};
