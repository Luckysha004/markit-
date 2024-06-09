document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  
  });

  // carousel

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// card

function prev() {
  let cardCount = 5;
  var cards = document.querySelectorAll(".child-card");
  cards.forEach((card, i) => {
    card.classList.toggle("card-hide", i >= cardCount);
    card.classList.toggle("card-show", i < cardCount);
  });
}

function next() {
  let cardCount = 5;
  var cards = document.querySelectorAll(".child-card");
  cards.forEach((card, i) => {
    card.classList.toggle("card-hide", i < cardCount);
    card.classList.toggle("card-show", i >= cardCount);
  });
}

// beauty product card

function beautyProductPrev() {
  let cardCount = 5;
  var cards = document.querySelectorAll(".child2-card");
  cards.forEach((card, i) => {
    card.classList.toggle("card-hide", i >= cardCount);
    card.classList.toggle("card-show", i <cardCount);
  });
}

function beautyProductNext() {
  let cardCount = 5;
  var cards = document.querySelectorAll(".child2-card");
  cards.forEach((card, i) => {
    card.classList.toggle("card-hide", i < cardCount);
    card.classList.toggle("card-show", i >= cardCount);
  });
}

