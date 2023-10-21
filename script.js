const typed = new Typed('#changing-text', {
  strings: ['Web Developer', 'Web Designer', '.Net Developer', 'Web App Developer'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});
// Nav scroll

    // Function to add or remove the 'active' class based on scroll position
    function setActiveNav() {
      const sections = document.querySelectorAll("section"); // Replace with your section elements
      const navLinks = document.querySelectorAll(".navbar a, .bottom-icons a i");

      sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
              // Highlight the corresponding nav link
              navLinks[index].classList.add("active");
          } else {
              // Remove the 'active' class from nav link
              navLinks[index].classList.remove("active");
          }
      });
  }

  // Listen for scroll events and call the setActiveNav function
  window.addEventListener("scroll", setActiveNav);

  // Call setActiveNav initially to highlight the active section on page load
  setActiveNav();


  
// // TILT
const cards = document.querySelectorAll('.tilt');
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener('mousemove', rotate);
  card.addEventListener('mouseout', stopRotate)
}

function rotate(e) {
  const cardItem = this.querySelector('.card-item');
  const halfHeight = cardItem.offsetHeight / 2;

  cardItem.style.transform = 'rotateX(' + -(e.offsetY - halfHeight) / 7 + 'deg) rotateY(' + (e.offsetX - halfHeight) / 7 + 'deg)';
}
function stopRotate() {
  const cardItem = this.querySelector('.hero-img');
  cardItem.style.transform = 'rotate(0)';
}
console.log(cards);
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

// Contact
// document.getElementsByClassName('successfully-saved')
const scriptURL = 'https://script.google.com/macros/s/AKfycbwvlmFmTZeDsL3mqALhcx51fnu_p6lzzC19uurAjn6hvcNdhY_BSzn4DlE3lKmQYFY_iA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response =>
            console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})
