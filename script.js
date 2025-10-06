// Menü butonunu ve sidebar'ı seç
const toggleBtn = document.querySelector(".header-toggle");
const header = document.querySelector(".header");

toggleBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});
