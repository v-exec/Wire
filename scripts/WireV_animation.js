//references to html elements
var canvas = document.getElementById('userCanvas');
var ctx = canvas.getContext('2d');

//will hold WireV objects
var logos = new Array(logoCount);

//determines whether or not to render the last WireV in the array
var renderLast = true;

//determines whether or not WireV is glitching
var isGlitching = false;

//animation setup
function setup() {

	//assign WireV objects and set initial position
	for (var i = 0; i < logos.length; i++) {
		logos[i] = new WireV(canvas.width/2, canvas.height/2, sizeX, sizeY, glitchyness, finalGlitchyness);
		logos[i].setWire();
	}

	//call draw function to start animation loop
	window.requestAnimationFrame(draw);
}

//animation loop
function draw() {

	//clear canvas for next frame
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//if glitching, reset shape, glitch it, and draw it
	//rest it once more for a more stable glitching (in case glitching is about to end and we want the final WireV to be a bit more tamed)
	//randomly decide if third WireV will be visible
	if (isGlitching) {
		for (var i = 0; i < logos.length; i++) {
			logos[i].setWire();
			logos[i].glitchWire();
			logos[i].drawWire();
		}

		for (var i = 0; i < logos.length; i++) {
			logos[i].setWire();
			logos[i].stableGlitchWire();
		}

		if (getRandomFloat(0, 1) <= renderLastChance) renderThird = true;
		else renderLast = false;

		//stop glitching after 400 millis
		setTimeout(function() {
			isGlitching = false;
		}, glitchTime);

		//if not glitching, then render WireVs according to blinkyness
	} else {

		//render all WireVs except for last one
		for (var i = 0; i < logos.length - 1; i++) {
			if (getRandomFloat(0, 1) > blinkyness) logos[i].drawWire();
		}

		//if renderLast ended up being true, then draw last WireV
		if (renderLast && getRandomFloat(0, 1) > blinkyness) logos[logoCount-1].drawWire();
	}

	//loop animation
	window.requestAnimationFrame(draw);
}

//triggers WireV glitches
setInterval(function() {
	isGlitching = true
}, downTime);

//on page load, call setup to start animation
window.addEventListener("DOMContentLoaded", function () {
	setup();
});
