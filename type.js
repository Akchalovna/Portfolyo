document.addEventListener("DOMContentLoaded", function () {
  new Typed(".typed", {
    strings: document
      .querySelector(".typed")
      .getAttribute("data-typed-items")
      .split(","),
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
