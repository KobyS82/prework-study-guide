// TODO: Which element is the following line of code selecting?
//sELECTING THE CAROUSEL ELEMENT
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
//Selecting the "next" button from inside of carousel
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// Waiting for a click to open up an image to a new window
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// Displays the next image
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // Stops addEventListener from opening a new window
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// Displays the previous image
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    // Stops addEventListener from opening into a new browser
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
