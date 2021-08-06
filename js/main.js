window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let logo = document.querySelector("#logo");
  header.classList.toggle("sticky", window.scrollY > 100);
  logo.classList.toggle("transparentLogo", window.scrollY < 100);
});
