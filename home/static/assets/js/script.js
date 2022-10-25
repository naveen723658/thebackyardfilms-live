'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  
  navElemArr[i].addEventListener("click", function () {
    
    navbar.classList.toggle("active");   
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
    
  });
  
}



/**
 * header sticky
 */

const navbar_links = document.querySelectorAll(".navbar-link");
const mob = document.querySelector(".menu-open-btn");
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");
  window.scrollY >= 10 ? mob.classList.add("active") : mob.classList.remove("active");
  for (var i = 0; i < navbar_links.length; i++) {
    window.scrollY >= 10 ? navbar_links[i].classList.add("active") : navbar_links[i].classList.remove("active");
  }

  
  
});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


// toggle dark mode
function toggleTheme() {
  var theme = document.getElementsByTagName('link')[2];
  if (theme.getAttribute('href') == '') {
      theme.setAttribute('href', 'static/assets/css/light.css');
  } else {
      theme.setAttribute('href', '');
  }
}

function changeCSS(cssFile, cssLinkIndex) {

  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}