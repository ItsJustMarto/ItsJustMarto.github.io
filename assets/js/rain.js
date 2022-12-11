// create an array to store the raindrop elements
var raindrops = [];

// create a function to generate a new raindrop element
function createRaindrop() {
// create a new div element and give it a class of "raindrop"
var raindrop = document.createElement("div");
raindrop.className = "raindrop";

// set a random position for the raindrop
var x = Math.random() * window.innerWidth -1px;
var y = Math.random() * window.innerHeight -1px;
raindrop.style.left = x + "px";
raindrop.style.top = y + "px";

// add the raindrop to the array and the page
raindrops.push(raindrop);
document.body.appendChild(raindrop);
}

// create a function to move the raindrops down the page
function moveRaindrops() {
for (var i = 0; i < raindrops.length; i++) {
var raindrop = raindrops[i];
var y = raindrop.offsetTop + 1;
raindrop.style.top = y + "px";

// if the raindrop has moved off the bottom of the page, remove it
if (y > window.innerHeight) {
  raindrop.parentNode.removeChild(raindrop);
  raindrops.splice(i, 1);
  i--;
}
}
}

// generate a new raindrop every 50 milliseconds
setInterval(createRaindrop, 50);

// move the raindrops every 10 milliseconds
setInterval(moveRaindrops, 1);
