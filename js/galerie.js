let slideIndex = 0;

let slideInterval = setInterval(() => {
  plusSlides(1);
}, 5000);

showSlides(1)


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);

  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 10000);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let grad = Math.floor(Math.random()*14)-7

  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  slides[slideIndex].style.transform = "rotate(" + grad.toString()+"deg)";
  dots[slideIndex].className += " active";
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}






















let slideIndex2 = 0;

let slideInterval2 = setInterval(() => {
  plusSlides2(1);
}, 5000);



showSlides2(1)


// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);

  clearInterval(slideInterval2);
  slideInterval2 = setInterval(() => {
    plusSlides2(1);
  }, 10000);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("demo2");
  let grad = Math.floor(Math.random()*14)-7

  if (n >= slides.length) {slideIndex2 = 0}
  if (n < 0) {slideIndex2 = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2].style.display = "inline-block";
  slides[slideIndex2].style.transform = "rotate(" + grad.toString()+"deg)";
  dots[slideIndex2].className += " active";
}


function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}
