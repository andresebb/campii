window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const letra = document.querySelectorAll(".nav-link");
  const top = window.scrollY;

  if (top >= 100) {
    navbar.classList.add("verde");
    letra.forEach((evt) => {
      evt.classList.add("blanco");
    });
  } else {
    navbar.classList.remove("verde");

    letra.forEach((evt) => {
      evt.classList.remove("blanco");
    });
  }
});
