//references to html elements
var canvas = document.getElementById('userCanvas');
var ctx = canvas.getContext('2d');

//will hold WireV objects
var logo1;
var logo2;
var logo3;

//determines whether or not to render the third WireV
var renderThird = false;

//determines whether or not WireV is glitching
var isGlitching = false;

//animation setup
function setup() {

	//assign WireV objects
	logo1 = new WireV(canvas.width/2, canvas.height/2, sizeX, sizeY, glitchyness, finalGlitchyness);
	logo2 = new WireV(canvas.width/2, canvas.height/2, sizeX, sizeY, glitchyness, finalGlitchyness);
	logo3 = new WireV(canvas.width/2, canvas.height/2, sizeX, sizeY, glitchyness, finalGlitchyness);

	logo1.setWire();
	logo2.setWire();
	logo3.setWire();

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
		logo1.setWire();
		logo2.setWire();
		logo3.setWire();

		logo1.glitchWire();
		logo2.glitchWire();
		logo3.glitchWire();

		logo1.drawWire();
		logo2.drawWire();
		logo3.drawWire();

		logo1.setWire();
		logo2.setWire();
		logo3.setWire();

		logo1.stableGlitchWire();
		logo2.stableGlitchWire();
		logo3.stableGlitchWire();

		if (getRandomFloat(0, 1) > 0.5) renderThird = true;
		else renderThird = false;

		//stop glitching after 400 millis
		setTimeout(function() {
			isGlitching = false;
		}, glitchTime);

		//if not glitching, then render WireVs according to blinkyness
	} else {
		if (getRandomFloat(0, 1) > blinkyness) logo1.drawWire();
		if (getRandomFloat(0, 1) > blinkyness) logo2.drawWire();
		if (renderThird && getRandomFloat(0, 1) > blinkyness) logo3.drawWire();
	}

	//loop animation
	window.requestAnimationFrame(draw);
}

//triggerswireV glitches
setInterval(function() {
	isGlitching = true
}, downTime);

//on page load, call setup to start animation
window.addEventListener("DOMContentLoaded", function () {
	setup();
});
