document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded in...");
});

let nav = document.querySelector("#nav");
let navLinks = Array.from(document.querySelectorAll("#nav-link"));
let bio = document.querySelector("#bio");
let navBreakpoint = bio.getBoundingClientRect().top + window.scrollY - 30;

window.addEventListener("scroll", () => {
  let yPos = window.scrollY;
  console.log(navBreakpoint)
  if (yPos >= navBreakpoint) {
    if (nav.classList.contains("nav-top")) {
      nav.classList.remove("nav-top");
      nav.classList.add("nav-trans");
      navLinks.map((navLink) => {
        navLink.classList.remove("nav-link-top");
        navLink.classList.add("nav-link-trans");
      });
    }
  } else {
    if (nav.classList.contains("nav-trans")) {
      nav.classList.remove("nav-trans");
      nav.classList.add("nav-top");
      navLinks.map((navLink) => {
        navLink.classList.add("nav-link-top");
        navLink.classList.remove("nav-link-trans");
      });
    }
  }
});
