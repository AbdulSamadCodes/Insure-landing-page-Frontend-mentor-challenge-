
/* navbar functionality */

const header = document.querySelector("[data-header]");
const navbar = document.querySelector("[data-navbar]");
const navItems = document.querySelectorAll("[data-nav-item]");
const heroTitle = document.querySelector("[data-hero-title]");

const navToggle = () =>  navbar.classList.toggle("active");  
const navClose = () => navbar.classList.remove("active"); 

function navbarHandler() {
  const navToggler = document.querySelector("[data-nav-toggle-btn]");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  console.log(navLinks);

  navToggler.addEventListener("click" , navToggle);
  navLinks.forEach((link) => link.addEventListener("click",navClose));
}

navbarHandler();

/* navlinks hover functionality */

function navHover() {
  navItems.forEach((item) => {
    item.style.border = "none";
  });

  if(window.innerWidth <= 992) this.style.border = "1.5px solid hsl(0 , 0% , 100%)";
}

navItems.forEach((item) => item.addEventListener("mouseover" , navHover));

/* function to add design element on hero title */

function addTopBar() {
  if(window.innerWidth > 768) heroTitle.classList.add("has-top-bar");
  else heroTitle.classList.remove("has-top-bar");
}

function addDesignElement() {
  window.addEventListener("resize",addTopBar);
  window.addEventListener("load",addTopBar);
}

addDesignElement();


