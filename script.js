function toggleMenu() {
      document.querySelector(".options").classList.toggle("active");
}

const modeBtn = document.getElementById("mode");
const icon = document.getElementById("icon");

modeBtn.addEventListener ("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
            icon.textContent = " 🔆 ";
      }
      else {
            icon.textContent = " 🌙 ";
      }
});
