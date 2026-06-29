// Grace in Bloom - Grand Library

setTimeout(() => {
  const note = document.getElementById("libraryNote");
  if (note) note.classList.add("fade");
}, 4200);

const helpButton = document.getElementById("helpButton");
if (helpButton) {
  helpButton.addEventListener("click", () => {
    document.body.classList.toggle("show-all");
  });
}

// On iPad/iPhone: first tap reveals label, second tap follows link.
document.querySelectorAll(".hotspot").forEach(hotspot => {
  let tappedOnce = false;

  hotspot.addEventListener("touchstart", (event) => {
    if (!tappedOnce) {
      event.preventDefault();
      document.querySelectorAll(".hotspot").forEach(h => h.classList.remove("show"));
      hotspot.classList.add("show");
      tappedOnce = true;

      setTimeout(() => {
        tappedOnce = false;
        hotspot.classList.remove("show");
      }, 1800);
    }
  }, { passive: false });
});
