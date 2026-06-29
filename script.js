let selectedCharacter = "";

document.querySelectorAll(".character-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".character-card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    selectedCharacter = card.dataset.character;
  });
});

const enterButton = document.getElementById("enterGrace");
if (enterButton) {
  enterButton.addEventListener("click", () => {
    const name = document.getElementById("characterName").value.trim();
    const month = document.getElementById("birthMonth").value;
    const day = document.getElementById("birthDay").value;
    const year = document.getElementById("birthYear").value;

    if (!selectedCharacter) {
      alert("Choose a character first.");
      return;
    }

    if (!name) {
      alert("Name your character first.");
      return;
    }

    localStorage.setItem("gib-character", selectedCharacter);
    localStorage.setItem("gib-character-name", name);
    localStorage.setItem("gib-birth-month", month);
    localStorage.setItem("gib-birth-day", day);
    localStorage.setItem("gib-birth-year", year);
    localStorage.setItem("gib-arrival-complete", "true");

    window.location.href = "woodland.html";
  });
}

const skipButton = document.getElementById("skipSetup");
if (skipButton) {
  skipButton.addEventListener("click", () => {
    localStorage.setItem("gib-arrival-complete", "true");
    window.location.href = "woodland.html";
  });
}

const greeting = document.getElementById("woodlandGreeting");
if (greeting) {
  const name = localStorage.getItem("gib-character-name");
  greeting.textContent = name ? `Welcome Home, ${name}` : "Welcome Home";
}
