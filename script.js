const typed = new Typed('#changing-text', {
  strings: ['Flutter Developer', 'Web Developer', 'Web Designer', 'Web App Developer', 'FLutter UI designer'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

// Projects

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("click", function () {
        card.classList.toggle("flipped");
      });
    });
  });



// Function to add or remove the 'active' class based on scroll position
function setActiveNav() {
  const sections = document.querySelectorAll("section"); // Replace with your section elements
  const navLinks = document.querySelectorAll(".navbar a");
  const icons = document.querySelectorAll(".bottom-icons a i");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      // Highlight the corresponding nav link and icon
      navLinks[index].classList.add("active");
      icons[index].classList.add("active");
    } else {
      // Remove the 'active' class from nav link and icon
      navLinks[index].classList.remove("active");
      icons[index].classList.remove("active");
    }
  });
}

// Listen for scroll events and call the setActiveNav function
window.addEventListener("scroll", setActiveNav);

// Call setActiveNav initially to highlight the active section on page load
setActiveNav();



  
// TIME LINE
(function () {
  "use strict";

  // define variables
  
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

// Contacttttt
const scriptURL = 'https://script.google.com/macros/s/AKfycbwvlmFmTZeDsL3mqALhcx51fnu_p6lzzC19uurAjn6hvcNdhY_BSzn4DlE3lKmQYFY_iA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.style.display = "block"
        setTimeout(function(){
            msg.style.display = "none"
        },4000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


// Swipper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 15,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
  },
  loop: true,
});

