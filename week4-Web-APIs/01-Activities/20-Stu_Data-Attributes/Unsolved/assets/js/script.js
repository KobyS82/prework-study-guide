var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  var state = element.getAttribute('data-state');

  // TODO: Complete function
  if (element.matches('.box')) {
    if(state === "hidden"){
      element.textContent = element.dataset.number;
      element.dataset.state = "visible";
    } else {
      element.textContent = "";
      element.setAttribute("data-state", "hidden");
    }
  }
});
