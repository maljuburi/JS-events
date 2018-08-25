let obj = document.getElementById("handler");
obj.style.top = window.innerHeight / 2 - 100 + "px";
obj.style.left = window.innerWidth / 2 - 100 + "px";

let circleText = document.getElementById("text");
circleText.innerHTML = "Mouse Events..Try Me";

let x = document.getElementById("x");
let y = document.getElementById("y");

let followCircle = document.getElementById("followMouse");

let keyPressed = document.getElementById("keyPressed");

document.addEventListener("mousemove", e => {
  x.innerHTML = "x: " + e.x;
  x.style.left = e.x - 10 + "px";
  x.style.top = e.y - 30 + "px";
  y.innerHTML = "y: " + e.y;
  y.style.top = e.y - 50 + "px";
  y.style.left = e.x - 10 + "px";
  followCircle.style.top = e.y - 10 + "px";
  followCircle.style.left = e.x - 15 + "px";
});

document.addEventListener("keydown", e => {
  keyPressed.style.display = "inline-block";
  keyPressed.innerHTML = "( " + e.key + " ) key was pressed";
});

//Mouse Enter
obj.addEventListener("mouseenter", () => {
  circleText.innerHTML = "Mouse Entered";
  obj.style.width = "220px";
  obj.style.height = "220px";
  obj.style.backgroundColor = "#0b6316";
  obj.style.top = window.innerHeight / 2 - 110 + "px";
  obj.style.left = window.innerWidth / 2 - 110 + "px";
});

// Mouse Leave
obj.addEventListener("mouseleave", () => {
  circleText.innerHTML = "Mouse Left";
  obj.style.width = "200px";
  obj.style.height = "200px";
  obj.style.backgroundColor = "#333333";
  obj.style.top = window.innerHeight / 2 - 100 + "px";
  obj.style.left = window.innerWidth / 2 - 100 + "px";
});

// Mouse Down
obj.addEventListener("mousedown", () => {
  circleText.innerHTML = "Mouse Down";
  obj.style.width = "220px";
  obj.style.height = "220px";
  obj.style.backgroundColor = "#1d7098";
  obj.style.top = window.innerHeight / 2 - 110 + "px";
  obj.style.left = window.innerWidth / 2 - 110 + "px";
});

// Mouse Up
obj.addEventListener("mouseup", () => {
  circleText.innerHTML = "Mouse Up";
  obj.style.width = "220px";
  obj.style.height = "220px";
  obj.style.backgroundColor = "#981d1d";
  obj.style.top = window.innerHeight / 2 - 110 + "px";
  obj.style.left = window.innerWidth / 2 - 110 + "px";
});
