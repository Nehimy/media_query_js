
// Creamos el querie
const screen = window.matchMedia("(max-width: 1000px)")

// función que escucha los cambios de estado

screen.addEventListener("change", function() {
  // Si media query conincide
  if (screen.matches) {
    document.querySelector("nav").style.display = "none";
  } else {
    document.querySelector("nav").style.display = "block";
  }
});
