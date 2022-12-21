function keydownAction(event) {
  // TODO: Complete keydown function
  var keyPressed = event.key;
  var keyCode = event.code;
  document.querySelector('#key').textContent = keyPressed;
  document.querySelector('#code').textContent = keyCode;
  document.querySelector('#status').textContent = "keydown Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
